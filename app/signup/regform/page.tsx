"use client";
import React, { useState } from "react";
import Input from "<@>/components/Input";
import Button from "<@>/components/Button";
import useStore from "<@>/store/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { emailPassSchema } from "<@>/lib/zodObjects";
import axios, { isAxiosError } from "axios";

const regFormSchema = emailPassSchema.extend({
  userName: z
    .string()
    .min(1, "Userame is required!!")
    .max(16, "Userame cannot be more than 16 character!!"),
});

type RegFormSchemaType = z.infer<typeof regFormSchema>;

const page = () => {
  const router = useRouter();
  const [isFormSubmiting, setIsForomSubmiting] = useState(false);
  const [axiosError, setAxiosError] = useState("");
  const [userEmail, updateUserEmail] = useStore((state) => [
    state.userEmail,
    state.updateUserEmail,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<RegFormSchemaType>({
    resolver: zodResolver(regFormSchema),
    mode: "onTouched",
    defaultValues: {
      userEmail: userEmail,
    },
  });

  const onRegFormSubmit: SubmitHandler<RegFormSchemaType> = async (data) => {
    setIsForomSubmiting(true);
    console.log(data);
    try {
      await axios.post("/api/register", { data });
      router.push("/signup");
    } catch (error) {
      if (isAxiosError(error)) {
        setAxiosError(error.response?.data);
      } else {
        console.log(error);
      }
    } finally {
      setIsForomSubmiting(false);
    }
  };

  return (
    <div className="w-full h-full md:h-[90%] md:w-[540px] lg:h-[85%] px-8 py-12">
      <p className="uppercase text-sm">
        Step <span className="font-bold">1</span> of{" "}
        <span className="font-bold">3</span>
      </p>
      <form
        onSubmit={handleSubmit(onRegFormSubmit)}
        className="mt-4 flex flex-col gap-8"
      >
        <h2 className="text-3xl font-semibold">
          Create a password to start your membership
        </h2>
        <p className="text-xl">
          Just a few more steps and you're done! We hate paperwork, too.
        </p>
        {axiosError && (
          <span className="truncate flex gap-2 items-center text-sm text-red-600 font-semibold">
            {axiosError}
          </span>
        )}
        <Input
          register={register("userName")}
          errorMessage={errors.userName?.message}
          touchedFlieds={touchedFields.userName}
          label="Username"
          id="userName"
          type="text"
          className="w-full"
        />
        <Input
          register={register("userEmail")}
          errorMessage={errors.userEmail?.message}
          touchedFlieds={touchedFields.userEmail}
          label="Email or phone number"
          id="userEmail"
          type="text"
          className="w-full"
        />
        <Input
          errorMessage={errors.userPassword?.message}
          touchedFlieds={touchedFields.userPassword}
          register={register("userPassword")}
          label="Password"
          id="userPassword"
          type="password"
          className="w-full"
        />

        <Button isLoding={isFormSubmiting}>Next</Button>
      </form>
    </div>
  );
};

export default page;
