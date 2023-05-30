export type User = {
  _id?: any;
  name?: string;
  password?: string;
  email: string;
  isAdmin?: boolean;
  token?: string;
};

export type UserInfo = {
  userInformation: User | null;
};

export type IUserInfoRootState = {
  userInfo: UserInfo;
};
