"use client";
import Input from "<@>/components/Input";
import React, { useState } from "react";
import Link from "next/link";
import { emailPassSchema } from "<@>/lib/zodObjects";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

type LoginFormSchemaType = z.infer<typeof emailPassSchema>;

const page = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(emailPassSchema),
    mode: "onTouched",
  });

  const onLoginFormSubmit: SubmitHandler<LoginFormSchemaType> = async (
    data
  ) => {
    console.log("formData", data);
    const { userEmail, userPassword } = data;
    console.log(userEmail, userPassword);
    try {
      const signInData = await signIn("credentials", {
        userEmail,
        userPassword,
        redirect: false,
        callbackUrl: "/dashboard",
      });
      if (signInData?.ok && signInData.url) {
        router.push(signInData.url);
      }
      console.log(signInData);
      if (signInData?.error && !signInData?.ok) {
        setErrorMessage(signInData?.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-[url('/netflix-bg1.jpg')]">
      <div className="h-full w-full relative flex items-center justify-center bg-black/60">
        <Link href="/" className="absolute top-4 left-4">
          <div className="h-6 md:h-10 w-auto cursor-pointer">
            <img src="/logo.png" alt="Netflix logo" className="w-full h-full" />
          </div>
        </Link>
        <form
          onSubmit={handleSubmit(onLoginFormSubmit)}
          className="w-full h-full bg-black/70 md:h-[90%] md:w-[420px] lg:h-[85%] px-8 py-12 md:rounded-md"
        >
          <div className="flex flex-col gap-12 mt-6">
            <h1 className="text-4xl font-bold">Sign In</h1>
            <div className="flex flex-col items-center gap-10">
              <Input
                register={register("userEmail")}
                errorMessage={errors.userEmail?.message}
                touchedFlieds={touchedFields.userEmail}
                label="Email or phone number"
                id="user_email"
                type="text"
                className="w-full !border-x-0 !border-t-0 !bg-[#333333]  !border-orange-400"
              />
              <Input
                errorMessage={errors.userPassword?.message}
                touchedFlieds={touchedFields.userPassword}
                register={register("userPassword")}
                label="Password"
                id="user_password"
                type="password"
                className="w-full !border-x-0 !border-t-0 !bg-[#333333]  !border-orange-400"
              />
            </div>
            <div className="text-zinc-300">
              <button className="w-full text-white text-xl font-bold px-4 py-3 bg-red-600 rounded-md">
                Sign In
              </button>
              <div className="flex items-center justify-between">
                <div className="mt-3 flex items-center">
                  <input
                    className="mr-1 w-4 h-4"
                    id="remember_me"
                    type="checkbox"
                  />
                  <label htmlFor="remember_me" className="text-sm">
                    Remember me
                  </label>
                </div>
                <span className="hover:underline text-sm cursor-pointer">
                  Need help?
                </span>
              </div>
              <div className="mt-2">
                New to Netflix?{" "}
                <Link
                  href="/in"
                  className="font-bold hover:underline cursor-pointer"
                >
                  Sign up now.
                </Link>
              </div>
              <div className="mt-2 text-sm">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <span className="text-blue-500 cursor-pointer hover:underline">
                  Learn more.
                </span>
              </div>
            </div>
          </div>
          {errorMessage && (
            <span className="truncate mt-2 flex gap-2 justify-center items-center text-sm text-red-600 font-semibold">
              {errorMessage}
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default page;
