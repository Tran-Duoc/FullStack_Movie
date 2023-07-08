import { AxiosResponse } from "axios";
import { getAccessToken } from "../../utils/LocalStorage.util";
import http from "../../utils/http.util";

export interface DataUser {
  _id: string;
  name: string;
  email: string;
  age: number;
  imageAvatar: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type UpdateUserType = Pick<DataUser, "name" | "email" | "age">;

export const getInfoUser = () => {
  return http.get<AxiosResponse<DataUser>>("user/info", {
    headers: {
      Authorization: getAccessToken(),
    },
  });
};

export const changeInfoUser = (
  body: UpdateUserType,
  id: string | undefined
) => {
  return http.patch<AxiosResponse>(`user/update/${id}`, body);
};

export const updateAvatarUser = (body: any, id: string | undefined) => {
  return http.patch<AxiosResponse>(`user/update-avatar/${id}`, body);
};
