import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import path from "../../constants/path";
import { useForm } from "react-hook-form";
import { AuthType } from "../../types/auth.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validations/yup";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../configs/api/auth.config";
import { omit } from "lodash";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

type LoginType = Pick<AuthType, "email" | "password" | "confirm_password">;
const loginSchema = schema.pick(["email", "password", "confirm_password"]);
const Login = () => {
  const { setIsAuthenticated, setProfile } = useContext(AppContext);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
  });

  const { mutate } = useMutation({
    mutationFn: (body: Pick<AuthType, "email" | "password">) => {
      return loginUser(body);
    },
  });

  const handleSubmitLoginUser = handleSubmit((data) => {
    const body = omit(data, "confirm_password");
    mutate(body, {
      onSuccess: (data) => {
        const { name } = data.data.data.user;
        setIsAuthenticated(true);
        setProfile({ name });
        navigate(path.home);
      },
    });
  });

  return (
    <form
      className=" w-full md:max-w-xl shadow-md  overflow-hidden  px-6 lg:px-0"
      onSubmit={handleSubmitLoginUser}
    >
      <div className="flex flex-col items-start px-5 py-4 gap-3  bg-slate-100  shadow-slate-800 rounded-lg  ">
        <Title
          content="Login User"
          className="bg-clip-text text-transparent bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-2xl font-semibold md:text-3xl pointer-events-none"
        />
        <Input
          name="email"
          type="text"
          placeholder="enter your email address!"
          className="mt-3 w-full "
          register={register}
          errorMessage={errors.email?.message}
        />
        <Input
          name="password"
          type="password"
          placeholder="enter your password!"
          className="w-full relative"
          options={{ eye: true }}
          register={register}
          errorMessage={errors.password?.message}
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder="confirm password!"
          className="w-full relative"
          options={{ eye: true }}
          register={register}
          errorMessage={errors.confirm_password?.message}
        />
        <Button
          className="w-full bg-slate-800 text-center py-4 rounded-lg text-white font-medium text-2xl  cursor-pointer duration-200 hover:bg-slate-900"
          type="submit"
          content="Login"
        />
        <div className="">
          Chưa có tài khoản? Đăng ký{" "}
          <Link
            to={path.register}
            className="text-blue-500 underline font-semibold"
          >
            Tại đây
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
