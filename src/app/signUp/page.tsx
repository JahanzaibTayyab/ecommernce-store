"use client";
import Link from "next/link";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
import { getError } from "@/utils/helper";
import * as Yup from "yup";
import en from "@/locales/en";
import Input from "@/components/Input";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

const SignUp = () => {
  const router = useRouter();
  const { data } = useSession();
  const [disableButton, setDisableButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (data?.user) {
      router.push("/");
    }
  }, [data, router]);

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
    try {
      setDisableButton(true);
      const data = await fetch("api/registerUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
        }),
      });

      const res = await data.json();
      if (data.status === 200) {
        toast.success("User created");
        setShowModal(true);
      } else {
        setDisableButton(false);
        toast.error(getError(res));
      }
    } catch (err: any) {
      setDisableButton(false);
      toast.error(getError(err));
    }
  }

  return (
    <>
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <button
                type="submit"
                disabled={disableButton}
                className="bg-palette-primary w-full py-4 rounded-lg text-palette-side text-xl shadow-lg flex justify-center"
              >
                {disableButton && (
                  <Loader2 className="mr-2 h-8 w-8 animate-spin" />
                )}
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <Link href={`/login`} className="block my-4">
          <span className="text-sm text-palette-mute">
            {en.alreadyHaveAnAccount}
          </span>
          <span className="text-cyan-500">Login</span>
        </Link>
      </div>
      {showModal && (
        <AlertDialog open={showModal}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Congratulations</AlertDialogTitle>
              <AlertDialogDescription>
                Account Created Successfully.Now you can login into your account
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>
                <Link href="/login">Login</Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default SignUp;
