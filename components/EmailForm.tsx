"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Loding from "./Loding";
import useStore from "<@>/store/store";

const formSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address.")
    .min(1, "Email is required!!")
    .max(50, "Please enter a valid email fffaddress."),
});

type FormSchemaType = z.infer<typeof formSchema>;

const EmailForm = () => {
  const updateUserEmail = useStore((state) => state.updateUserEmail);
  const [isFormSubmiting, setIsForomSubmiting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const onSubmitHandler: SubmitHandler<FormSchemaType> = (data) => {
    setIsForomSubmiting(true);
    console.log(data);
    updateUserEmail(data.email);
    router.push("/signup/registration");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-5 md:gap-10 items-center"
    >
      <p className="text-lg md:text-2xl text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col md:flex-row gap-4 items-center h-14">
        <Input
          register={register("email")}
          errorMessage={errors.email?.message}
          id="user_email"
          label="Email Address"
          type="email"
          className="w-[300px] md:w-[380px]"
          touchedFlieds={touchedFields.email}
        />
        <button
          disabled={isFormSubmiting}
          className={`disabled:cursor-wait disabled:bg-red-800 disabled:justify-center w-[170px] h-full max-md:mt-3 flex items-center py-2 px-2 rounded-md text-2xl font-semibold bg-red-600 hover:bg-red-700 transition duration-300`}
        >
          {isFormSubmiting ? (
            <Loding />
          ) : (
            <>
              Get Started
              <IoIosArrowForward size={30} className="text-white" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default EmailForm;

//
