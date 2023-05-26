export type IUser = {
  _id?: any;
  name?: string;
  password?: string;
  email: string;
  isAdmin?: boolean;
  token?: string;
};

export type IUserInfo = {
  userInformation: IUser | null;
};

//RootState interface=> used for state type in useSelector hook

export type IUserInfoRootState = {
  userInfo: IUserInfo;
};
