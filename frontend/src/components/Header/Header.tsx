import Logo from "../Logo/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import path from "../../constants/path";
import { useContext, useState } from "react";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";
import MenuBar from "../Icon/MenuBar/MenuBar";
import Button from "../Button/Button";
import Title from "../Title/Title";
import House from "../Icon/House/House";
import MenuItem from "../MenuItem/MenuItem";
import Film from "../Icon/Film/Film";
import TV from "../Icon/TV/TV";
import Heart from "../Icon/Heart/Heart";
import User from "../Icon/User/User";
import { AppContext } from "../../context/app.context";
import Logout from "../Icon/Logout/Logout";

const navList = [
  {
    id: 1,
    name: "Home",
    path: path.home,
  },
  {
    id: 2,
    name: "TV Series",
    path: path.tv,
  },
  {
    id: 3,
    name: "Movies",
    path: path.movie,
  },
];

const MediaScreenNav = ({
  isOpenNav,
  setIsOpenNav,
  profile,
}: {
  isOpenNav: boolean;
  profile: string;
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleToggleMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setIsOpenNav(!isOpenNav);
    }
  };

  return (
    <div
      className={`fixed z-20  top-0 left-0 right-0 bottom-0 bg-slate-900/30 overflow-hidden ${
        isOpenNav === true ? "" : "w-0"
      }`}
      onClick={handleToggleMenu}
    >
      <div className="absolute w-80 top-0 left-0 bottom-0 bg-slate-50 p-3 dark:bg-slate-700">
        <div className="w-full flex items-center justify-center py-3">
          <Logo />
        </div>
        <div>
          <Title
            content="Menu"
            className="text-xl font-bold text-slate-900 dark:text-cyan-600"
          />
          <ul className="w-full flex flex-col gap-1">
            <MenuItem pathName={path.home}>
              <House className=" dark:text-slate-50 text-slate-900" />
              <span className="dark:text-slate-50 text-slate-900  text-xl font-semibold ">
                Home
              </span>
            </MenuItem>
            <MenuItem pathName={path.movie}>
              <Film className=" dark:text-slate-50 text-slate-900" />
              <span className="dark:text-slate-50 text-slate-900  text-xl font-semibold ">
                Movies
              </span>
            </MenuItem>
            <MenuItem pathName={path.tv}>
              <TV className=" dark:text-slate-50 text-slate-900" />
              <span className="dark:text-slate-50 text-slate-900  text-xl font-semibold ">
                TV Series
              </span>
            </MenuItem>
          </ul>
        </div>
        <div className="mt-5">
          <Title
            content="Personal"
            className="text-xl font-bold text-slate-900 dark:text-cyan-600"
          />
          <ul className="w-full flex flex-col gap-1">
            <MenuItem pathName={path.profile}>
              <Heart className=" dark:text-slate-50 text-slate-900" />
              <span className="dark:text-slate-50 text-slate-900  text-xl font-semibold ">
                Favorites
              </span>
            </MenuItem>
            <MenuItem pathName={path.profile}>
              <User className=" dark:text-slate-50 text-slate-900" />
              <span className="dark:text-slate-50 text-slate-900  text-xl font-semibold ">
                Profile
              </span>
            </MenuItem>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 right-0 py-5 px-4 dark:bg-slate-800 bg-slate-400">
          <div className="flex items-end justify-between px-5">
            <span className="text-xl font-semibold dark:text-slate-50 text-slate-900 ">
              {profile}
            </span>
            <Logout className="dark:text-slate-50 text-slate-900 font-semibold" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [, setIsActive] = useState<string>(path.home);
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);
  const { profile, isAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  const isActivePath = (path: string) => location.pathname === path;
  const location = useLocation();

  return (
    <header className="flex items-end justify-between py-5 bg-transparent">
      <Logo />
      <ul className="flex text-xl lg:text-2xl font-bold gap-5  text-slate-800 dark:text-slate-50">
        {navList.map((item, index) => {
          return (
            <li
              className={`relative hidden md:block ${
                isActivePath(item.path) &&
                "before:absolute before:w-full before:h-[3px] before:bg-cyan-600 before:-bottom-1 before:text-transparent bg-clip-text  text-cyan-600 dark:bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
              }`}
              key={index}
              onClick={() => {
                setIsActive(item.path);
              }}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-3">
        <ToggleDarkMode />
        <MenuBar
          className="block md:hidden"
          onClick={() => setIsOpenNav(!isOpenNav)}
        />
        <MediaScreenNav
          isOpenNav={isOpenNav}
          setIsOpenNav={setIsOpenNav}
          profile={profile?.name as string}
        />
        {isAuthenticated ? (
          <div className="dropdown dropdown-hover dropdown-end hidden md:block">
            <label
              tabIndex={0}
              className="btn bg-transparent border-0 text-slate-900 dark:text-slate-50   hover:bg-transparent"
            >
              {profile?.name}
            </label>
            <ul
              tabIndex={1}
              className="dropdown-content   p-3 shadow bg- rounded-box w-52 bg-slate-100 dark:bg-slate-700  text-slate-900 dark:text-slate-50"
            >
              <li className="dark:hover:bg-slate-900  hover:bg-slate-300 dark:text-slate-50  text-slate-900 p-2">
                <Link
                  to={path.profile}
                  className="flex items-center justify-start gap-2"
                >
                  <User />
                  <p>Your profile</p>
                </Link>
              </li>
              <div className="mt-5 flex  items-center gap-2 dark:hover:bg-slate-900  hover:bg-slate-300 dark:text-slate-50  text-slate-900 p-2">
                <Logout />
                <p className="text-slate-900 dark:text-slate-50  text-xl ">
                  Logout
                </p>
              </div>
            </ul>
          </div>
        ) : (
          <Button
            content="Login"
            className="text-white font-medium text-2xl bg-slate-800 dark:text-slate-800 dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 px-4 py-1 rounded-xl hidden md:block hover:bg-slate-600"
            onClick={() => navigate(path.login)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
