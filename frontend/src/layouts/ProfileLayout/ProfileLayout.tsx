import { useMutation } from "@tanstack/react-query";
import House from "../../components/Icon/House/House";
import Info from "../../components/Icon/InfoUser/Info";
import Logout from "../../components/Icon/Logout/Logout";
import User from "../../components/Icon/User/User";
import Logo from "../../components/Logo/Logo";
import MenuItem from "../../components/MenuItem/MenuItem";
import path from "../../constants/path";
import { logOut } from "../../configs/api/auth.config";
import { AppContext } from "../../context/app.context";
import { useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<Props> = ({ children }) => {
  const { setIsAuthenticated, setProfile } = useContext(AppContext);

  const { mutate } = useMutation({
    mutationFn: () => {
      return logOut();
    },
    onSuccess: () => {
      setIsAuthenticated(false);
      setProfile(null);
    },
  });

  const handleLogout = () => {
    mutate();
  };

  return (
    <div className="min-h-screen flex flex-row gap-2">
      <div className="w-full  hidden md:block max-w-xs bg-slate-700 px-2 md:px-5 relative">
        <div className="flex flex-col justify-center ">
          <div className="mt-8">
            <Logo />
          </div>
          <div className="flex flex-col gap-2">
            <MenuItem pathName={path.home}>
              <House />
              Quay về trang chủ
            </MenuItem>
            <MenuItem pathName={path.profile}>
              <User />
              Thông tin cá nhân
            </MenuItem>
            <MenuItem pathName={`${path.profile}/${path.changeInfo}`}>
              <Info />
              Cập nhật thông tin
            </MenuItem>
          </div>
          <div
            className="absolute bottom-0 right-0 py-5 px-10 w-full bg-slate-800 hover:bg-slate-800/70 duration-200"
            onClick={handleLogout}
          >
            <div className="flex items-center justify-between">
              <span>Đăng xuất</span>
              <Logout />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ProfileLayout;
