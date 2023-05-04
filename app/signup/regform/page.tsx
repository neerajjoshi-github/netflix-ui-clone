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

type FormSchemaType = z.infer<typeof emailPassSchema>;

const page = () => {
  const router = useRouter();
  const [isFormSubmiting, setIsForomSubmiting] = useState(false);
  const [userEmail, updateUserEmail] = useStore((state) => [
    state.userEmail,
    state.updateUserEmail,
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormSchemaType>({
    defaultValues: {
      userEmail: userEmail,
    },
    resolver: zodResolver(emailPassSchema),
    mode: "onTouched",
  });

  const onRegFormSubmit: SubmitHandler<FormSchemaType> = (data) => {
    setIsForomSubmiting(true);
    console.log(data);
    router.push("/signup");
  };
  return (
    <div className="w-full h-full md:h-[90%] md:w-[540px] lg:h-[85%] px-8 py-12">
      <p className="uppercase text-sm">
        Step <span className="font-bold">1</span> of{" "}
        <span className="font-bold">3</span>
      </p>

      <form
        onClick={handleSubmit(onRegFormSubmit)}
        className="mt-4 flex flex-col gap-8"
      >
        <h2 className="text-3xl font-semibold">
          Create a password to start your membership
        </h2>
        <p className="text-xl">
          Just a few more steps and you're done! We hate paperwork, too.
        </p>
        <Input
          className="w-full"
          label="Email or phone number"
          id="user_email"
          type="text"
          register={register("userEmail")}
          errorMessage={errors.userEmail?.message}
          touchedFlieds={touchedFields.userEmail}
        />
        <Input
          className="w-full"
          label="Password"
          id="user_password"
          type="password"
          register={register("userPassword")}
          errorMessage={errors.userPassword?.message}
          touchedFlieds={touchedFields.userPassword}
        />

        <Button isLoding={isFormSubmiting}>Next</Button>
      </form>
    </div>
  );
};

export default page;
