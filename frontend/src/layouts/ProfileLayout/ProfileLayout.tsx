import House from "../../components/Icon/House/House";
import Info from "../../components/Icon/InfoUser/Info";
import User from "../../components/Icon/User/User";
import Logo from "../../components/Logo/Logo";
import MenuItem from "../../components/MenuItem/MenuItem";
import path from "../../constants/path";

interface Props {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-row gap-2">
      <div className="w-full  hidden md:block max-w-xs bg-slate-700 px-2 md:px-5">
        <div className="flex flex-col justify-center">
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
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ProfileLayout;
