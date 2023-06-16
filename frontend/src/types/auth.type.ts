export type AuthType = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
};

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  imageAvatar: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
