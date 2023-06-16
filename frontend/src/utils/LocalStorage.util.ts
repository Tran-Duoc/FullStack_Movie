import { User } from "../types/auth.type";

export const saveAccessTokenToLS = (access_token: string) => {
  return localStorage.setItem("access_token", access_token);
};

export const ClearLS = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("profile");
};

export const getAccessToken = () => {
  return localStorage.getItem("access_token") || "";
};

export const getProfileFromLS = () => {
  const result = localStorage.getItem("profile");
  return result ? JSON.parse(result) : null;
};
export const setProfileToLS = (profile: Pick<User, "name">) => {
  localStorage.setItem("profile", JSON.stringify(profile));
};
