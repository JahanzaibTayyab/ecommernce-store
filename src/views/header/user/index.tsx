"use client";
import React from "react";
import { useSession } from "next-auth/react";
import UserAccountBtn from "./UserAccountBtn";
import LoginBtn from "./LoginBtn";

const User = () => {
  const { data } = useSession();
  return <div>{data?.user ? <UserAccountBtn /> : <LoginBtn />}</div>;
};

export default User;
