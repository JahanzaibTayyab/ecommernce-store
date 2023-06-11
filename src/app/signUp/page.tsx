"use client";
import Link from "next/link";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import { getError } from "@/utils/helper";
import * as Yup from "yup";
import en from "@/locales/en";
import Input from "@/components/Input";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

const Login = () => {
  const router = useRouter();

  const userInfo = null;
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm }) => {
      SignUpHandler(values);
    },
  });

  async function SignUpHandler(user: User) {
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
      console.log(getError(err));
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg py-4 px-8 rounded-lg">
        <h2 className="text-lg md:text-2xl font-bold">Sign Up</h2>
        <p className="mt-4 mb-2">{en.hi}</p>
        <div className="py-5">
          <form onSubmit={formik.handleSubmit}>
            <Input
              id="name"
              name="name"
              type="text"
              label={"User Name"}
              placeholder="Please Enter Your Name"
              required={true}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <Input
              id="email"
              name="email"
              type="email"
              label={"Email"}
              placeholder="Please Enter Your Email"
              required={true}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Input
              id="password"
              name="password"
              type="password"
              label={"Password"}
              placeholder="Please Enter Your Password"
              required={true}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <button
              type="submit"
              className="bg-palette-primary w-full py-4 rounded-lg text-palette-side text-xl shadow-lg"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Link href={`/login`} className="block my-4">
        <span className="text-sm text-palette-mute">{en.doHaveAnAccount}</span>
        <span className="text-cyan-500">Login</span>
      </Link>
    </div>
  );
};

export default Login;
