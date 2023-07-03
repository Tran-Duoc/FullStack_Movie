import axios, { AxiosInstance } from "axios";
import {
  ClearLS,
  getAccessToken,
  saveAccessTokenToLS,
  setProfileToLS,
} from "./LocalStorage.util";
import { User } from "../types/auth.type";

interface AuthResponse<TData> {
  message: string;
  data: TData;
}

interface AuthLogin {
  user: User;
  access_token: string;
}

class Http {
  instance: AxiosInstance;
  private access_token: string;
  constructor() {
    this.access_token = getAccessToken();
    this.instance = axios.create({
      baseURL: "http://localhost:8000/api/v1/",
      timeout: 10 * 1000, //! 10s request time out
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token) {
          config.headers.authorization = this.access_token;
          return config;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.instance.interceptors.response.use((response) => {
      const { url } = response.config;
      if (url === "user/login") {
        const data = response.data as AuthResponse<AuthLogin>;
        this.access_token = data.data.access_token;
        saveAccessTokenToLS(this.access_token);
        const { user } = data.data;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...other } = user;
        setProfileToLS(other);
      } else if (url === "user/logout") {
        this.access_token = "";
        ClearLS();
      }
      return response;
    });
  }
}

const http = new Http().instance;
export default http;
