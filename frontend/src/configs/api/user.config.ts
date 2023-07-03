import { AxiosResponse } from "axios";
import { getAccessToken } from "../../utils/LocalStorage.util";
import http from "../../utils/http.util";

export interface Data {
  _id: string;
  name: string;
  email: string;
  age: number;
  imageAvatar: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const getInfoUser = () => {
  return http.get<AxiosResponse<Data>>("user/info", {
    headers: {
      Authorization: getAccessToken(),
    },
  });
};
