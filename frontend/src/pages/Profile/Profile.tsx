import {
  useMutation,
  useQuery,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import { getInfoUser, updateAvatarUser } from "../../configs/api/user.config";
import user_default from "/src/assets/images/user.png";
import LoadingSpin from "../../components/LoadingSpin/LoadingSpin";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { generateAvatarPath } from "../../utils/image.util";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import axios from "axios";
import { toast } from "react-toastify";

interface ImageType {
  image: any;
}

const Profile = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<ImageType>({});
  const queryClient = useQueryClient();

  const {
    data: dataUser,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["dataUser"],
    queryFn: () => {
      return getInfoUser();
    },
  });

  const { mutate } = useMutation({
    mutationFn: (body: any) => {
      const imageForm = new FormData();
      imageForm.append("image", body);
      return axios.patch(
        `http://localhost:8000/api/v1/user/update-avatar/${dataUser?.data.data._id}`,
        imageForm
      );
    },
    onSuccess: () => {
      toast.success("Cập nhật ảnh đại diện thành công");
      setOpenModel(false);
      queryClient.invalidateQueries({ queryKey: ["dataUser"] });
    },
  });

  const handleSubmitUploadImage = handleSubmit((data) => {
    const file = data.image[0];
    mutate(file);
  });

  return (
    <>
      <section className="flex  items-start justify-start p-10 min-h-screen">
        {isLoading || isFetching ? (
          <LoadingSpin />
        ) : (
          <div className="flex flex-col gap-10">
            <div>
              <img
                src={
                  dataUser?.data.data.imageAvatar
                    ? generateAvatarPath(dataUser?.data.data.imageAvatar)
                    : user_default
                }
                alt=""
                loading="lazy"
                className="rounded-full object-cover bg-cover w-36 h-36"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 ">
                <div className="max-w-[150px]">Họ Tên:</div>
                <span>{dataUser?.data.data.name}</span>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="max-w-[150px]">Tuổi:</div>
                <span>{dataUser?.data.data.age}</span>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="max-w-[150px]">Email</div>
                <span>{dataUser?.data.data.email}</span>
              </div>
              {openModel && (
                <form onSubmit={handleSubmitUploadImage}>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 "
                    htmlFor="file_input"
                  ></label>

                  <Input
                    name="image"
                    type="file"
                    register={register}
                    id="image"
                  />
                  <Button
                    content="Cập nhật"
                    className="px-4 py-2 bg-cyan-600 mt-5  rounded-xl text-slate-900 font-semibold hover:bg-cyan-500 duration-200"
                  />
                </form>
              )}
            </div>
            <div className="flex flex-row gap-2">
              <Button
                content="Thay ảnh đại diện"
                className="bg-cyan-600 hover:bg-cyan-500 duration-200 text-slate-900 font-semibold px-4 py-2 rounded-xl"
                onClick={() => setOpenModel(true)}
              />
              {openModel && (
                <Button
                  content="Đóng"
                  className="bg-red-600 hover:bg-red-500 duration-200 text-slate-900 font-semibold px-4 py-2 rounded-xl"
                  onClick={() => setOpenModel(false)}
                />
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Profile;
