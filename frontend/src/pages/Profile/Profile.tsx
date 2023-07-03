import { useQuery } from "@tanstack/react-query";
import { getInfoUser } from "../../configs/api/user.config";
import { useEffect, useState } from "react";
import user_default from "/src/assets/images/user.png";
import ImageUpload from "../../components/ImageUpload/ImageUpload";

const Profile = () => {
  const [avatar, setAvatar] = useState<string>(user_default);

  const { data: dataUser } = useQuery({
    queryKey: ["dataUser"],
    queryFn: () => {
      return getInfoUser();
    },
  });

  useEffect(() => {
    console.log(dataUser);
  }, [dataUser]);

  return (
    <section className="flex  items-start justify-start p-10 min-h-screen">
      <div className="flex flex-col gap-10">
        <div>
          <ImageUpload avatar={avatar} />
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
        </div>
      </div>
    </section>
  );
};

export default Profile;
