import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validations/yup";
import { Link, useNavigate } from "react-router-dom";
import path from "../../constants/path";
import { AuthType } from "../../types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../configs/api/auth.config";
import { omit } from "lodash";
import { isAxiosUnprocessableEntityError } from "../../utils/util";
import { ResponseApi } from "../../types/response.type";

const Register = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: yupResolver(schema),
  });

  const { mutate } = useMutation({
    mutationFn: (body: Omit<AuthType, "confirm_password">) => {
      return registerUser(body);
    },
  });

  const handleSubmitRegisterUser = handleSubmit((data) => {
    const body = omit(data, ["confirm_password"]);
    mutate(body, {
      onSuccess: (data) => {
        console.log(data);
        navigate("/login");
      },
      onError: (error) => {
        if (
          isAxiosUnprocessableEntityError<ResponseApi<Pick<AuthType, "name">>>(
            error
          )
        ) {
          const FormError = error.response?.data;
          if (FormError) {
            setError("email", {
              message: String(FormError),
              type: "Server",
            });
          }
        }
      },
    });
  });
  return (
    <form
      className=" w-full md:max-w-xl shadow-md  overflow-hidden  px-6 lg:px-0"
      onSubmit={handleSubmitRegisterUser}
    >
      <div className="flex flex-col items-start px-5 py-4 gap-3  bg-slate-50  shadow-slate-800 rounded-lg  ">
        <Title
          content="Register  User"
          className="bg-clip-text text-transparent bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-2xl font-semibold md:text-3xl pointer-events-none "
        />
        <Input
          name="name"
          type="text"
          placeholder="What your name?"
          className="mt-3 w-full "
          register={register}
          errorMessage={errors.name?.message}
        />
        <Input
          name="age"
          type="number"
          min="1"
          placeholder="How old?"
          className="mt-3 w-full "
          register={register}
          errorMessage={errors.age?.message}
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
          register={register}
          options={{ eye: true }}
          errorMessage={errors.confirm_password?.message}
        />
        <Button
          className="w-full bg-slate-800 text-center py-4 rounded-lg text-white font-medium text-2xl  cursor-pointer duration-200 hover:bg-slate-900"
          type="button"
          content="Register"
        />
        <div className="">
          Đã có tài khoản? Đăng nhập{" "}
          <Link
            to={path.login}
            className="text-blue-500 underline font-semibold"
          >
            Tại đây
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
