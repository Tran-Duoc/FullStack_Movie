import Logo from "../Logo/Logo";
import { Link, NavLink, useNavigate } from "react-router-dom";
import path from "../../constants/path";
import { useState } from "react";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";
import MenuBar from "../Icon/MenuBar/MenuBar";
import Button from "../Button/Button";

const navList = [
  {
    id: 1,
    name: "Home",
    path: path.home,
  },
  {
    id: 2,
    name: "TV",
    path: path.tv,
  },
  {
    id: 3,
    name: "Movie",
    path: path.movie,
  },
];

const Header = () => {
  const [isActive, setIsActive] = useState<string>(path.home);
  const navigate = useNavigate();
  const isActivePath = (path: string) => isActive === path;

  return (
    <header className="flex items-end justify-between py-5">
      <Logo />
      <ul className="flex text-xl md:text-2xl font-bold gap-5  text-slate-800 dark:text-slate-50">
        {navList.map((item, index) => {
          return (
            <li
              className={`relative  hidden md:block ${
                isActivePath(item.path) &&
                "before:absolute before:w-full before:h-[3px] before:bg-cyan-600 text-transparent bg-clip-text  text-cyan-600 dark:bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900  before:-bottom-1 before:dark:"
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
        <MenuBar className="block md:hidden" />
        <Button
          content="Login"
          className="text-white font-medium text-2xl bg-slate-800 dark:text-slate-800 dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 px-4 py-1 rounded-xl hidden md:block hover:bg-slate-600"
          onClick={() => navigate(path.login)}
        />
      </div>
    </header>
  );
};

export default Header;
