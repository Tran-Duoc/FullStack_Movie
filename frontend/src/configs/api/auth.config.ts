import { AxiosResponse } from "axios";
import http from "../../utils/http.util";

interface FormData {
  name: string;
  email: string;
  password: string;
  age: number;
}

interface AuthResponse<TData> {
  message: string;
  data: TData;
}

export interface User {
  name: string;
  email: string;
  password: string;
  age: number;
  imageAvatar: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AuthLogin {
  user: User;
  access_token: string;
}

export const registerUser = (body: FormData) => {
  return http.post<AuthResponse<User>>("user/register", body);
};

export const loginUser = (body: Pick<FormData, "email" | "password">) => {
  return http.post<AuthResponse<AuthLogin>>("user/login", body);
};

export const logOut = () => {
  return http.post<AxiosResponse>("user/logout");
};
