"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EnteringBox from "@/components/entering/EnteringBox";
import { User } from "@/types/user";
import { getError } from "@/utils/helper";
// import { userInfoActions } from "../store/user-slice";
// import { getError } from "../utilities/error";

const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const userInfo = null;
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);
  async function LoginHandler(user: User) {
    const { email, password } = user;
    try {
      // const { data } = await axios.post("/api/users/login", {
      //   email,
      //   password,
      // });
      // dispatch(userInfoActions.userLogin(data));
      // jsCookie.set("userInfo", JSON.stringify(data));
      // router.push("/");
    } catch (err: any) {
      setErrorMessage(getError(err));
      console.log(getError(err));
    }
  }
  return (
    <EnteringBox
      title="login"
      submitHandler={LoginHandler}
      errorMessage={errorMessage}
    />
  );
};

export default Login;
