"use client";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import * as Yup from "yup";
import en from "@/locales/en";
import Input from "@/components/Input";
import toast from "react-hot-toast";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

const SignUp = () => {
  const { data } = useSession();
  const router = useRouter();
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (data?.user) {
      router.push("/");
    }
  }, [data, router]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      LoginHandler(values);
    },
  });

  async function LoginHandler(user: User) {
    const toastId = toast.loading("trying Login");
    setDisableButton(true);
    try {
      const response = await signIn("credentials", {
        redirect: false,
        ...user,
      });
      if (response?.ok) {
        toast.dismiss(toastId);
        toast.success("User login Successfully");
        router.push("/");
      }
    } catch (err: any) {
      toast.dismiss(toastId);
      toast.error("Invalid email or password");
      setDisableButton(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg py-4 px-8 rounded-lg">
        <h2 className="text-lg md:text-2xl font-bold">Login</h2>
        <p className="mt-4 mb-2">
          {en.hi}
          <br />
          <span className="inline-block text-palette-mute dark:text-palette-base/80 text-[12px] mt-2 bg-palette-fill p-2">
            {en.loginExplanation}
          </span>
        </p>
        <div className="py-5">
          <form onSubmit={formik.handleSubmit}>
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
              disabled={disableButton}
              className="bg-palette-primary w-full py-4 rounded-lg text-palette-side text-xl shadow-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Link href={`/signUp`} className="block my-4">
        <span className="text-sm text-palette-mute">{en.doHaveAnAccount}</span>
        <span className="text-cyan-500">Sign Up</span>
      </Link>
    </div>
  );
};

export default SignUp;
