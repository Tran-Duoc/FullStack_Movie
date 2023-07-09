import { useMutation, useQuery } from "@tanstack/react-query";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { useForm } from "react-hook-form";
import {
  UpdateUserType,
  changeInfoUser,
  getInfoUser,
} from "../../configs/api/user.config";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingSpin from "../../components/LoadingSpin/LoadingSpin";
import {
  getProfileFromLS,
  setProfileToLS,
} from "../../utils/LocalStorage.util";

interface FormType {
  name: string;
  email: string;
  age: number;
  imageAvatar: string;
}

const InForUser = () => {
  const { handleSubmit, register, setValue } = useForm<FormType>();
  const profileUer = getProfileFromLS();
  const { data: infoUser, isLoading } = useQuery({
    queryKey: ["infoUser"],
    queryFn: () => {
      return getInfoUser();
    },
    onSuccess: (data) => {
      setValue("name", data.data.data.name);
      setValue("email", data.data.data.email);
      setValue("age", data.data.data.age);
      setProfileToLS({ ...profileUer, name: data.data.data.name });
    },
  });

  const { mutate, isLoading: isLoadingWhenUPdate } = useMutation({
    mutationFn: (body: UpdateUserType) => {
      return changeInfoUser(body, infoUser?.data.data._id);
    },
    onSuccess: (data) => {
      console.log("mutation", data);
      toast.success("Cập nhật thông tin thành công");
    },
  });
  const handleSubmitUploadInfoUser = handleSubmit((data) => {
    mutate({ ...data });
  });

  return (
    <>
      <div className="w-full">
        <div className="max-w-4xl px-5">
          <Title
            content="Cập nhật thông tin người dùng"
            className="text-2xl md:text-4xl text-start text-slate-50 my-8"
          />
          {isLoading || isLoadingWhenUPdate ? (
            <LoadingSpin />
          ) : (
            <form
              action=""
              className="w-full "
              onSubmit={handleSubmitUploadInfoUser}
            >
              <Input
                name="name"
                className="w-full"
                type="text"
                register={register}
              />

              <Input
                name="email"
                type="email"
                className="w-full"
                register={register}
              />

              <Input
                name="age"
                type="number"
                className="w-full"
                register={register}
                min={0}
                max={100}
              />

              <Button
                content="Cập nhât"
                className="bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-500 duration-300 text-white"
              />
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default InForUser;
