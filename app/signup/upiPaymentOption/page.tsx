"use client";
import Input from "<@>/components/Input";
import React from "react";
import { UpiOptions } from "<@>/data/paymentOptions";
import Button from "<@>/components/Button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import ReactSelect from "react-select";

const upiFormSchema = z.object({
  upiOptions: z.enum([
    "others",
    "amazon_pay",
    "paytm",
    "bhim_upi",
    "phonepe",
    "google_pay",
  ]),
  upiId: z
    .string()
    .regex(/^[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}$/, "Enter a valid upi id!"),
});

type UpiFormSchemaType = z.infer<typeof upiFormSchema>;

const page = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<UpiFormSchemaType>({
    resolver: zodResolver(upiFormSchema),
    mode: "onTouched",
  });

  const onCreditFormSubmit: SubmitHandler<UpiFormSchemaType> = (data) => {
    console.log("HELLO");
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(onCreditFormSubmit)}
      className="mt-4 p-4 sm:mt-8 flex flex-col gap-5"
    >
      <p className="uppercase text-sm">
        Step <span className="font-bold">3</span> of{" "}
        <span className="font-bold">3</span>
      </p>
      <h2 className="text-3xl font-bold mb-4">Set up UPI AutoPay</h2>
      <p className="text-lg">
        You can change this recurring payment any time in your settings.
      </p>

      <Controller
        control={control}
        name="upiOptions"
        render={({
          field: { onChange, onBlur, value, name, ref },
          formState: { errors },
        }) => (
          <ReactSelect
            value={UpiOptions.find((c) => c.value === value)}
            onChange={(val) => onChange(val?.value)}
            ref={ref}
            name="upiOptions"
            options={UpiOptions}
            unstyled
            classNames={{
              control: (state) =>
                `${
                  errors.upiId?.message ? "border-red-600" : "border-gray-500"
                } bg-black  p-4 !border  font-bold text-lg !cursor-pointer`,
              option: (state) =>
                `${
                  state.isSelected ? "font-bold" : "font-normal"
                } !cursor-pointer bg-black p-2 text-lg hover:bg-slate-800`,
              container: () => "",
              menu: () => "border border-gray-500 py-2 !z-20 bg-black",
            }}
            placeholder="Select your UPI App"
          />
        )}
      />
      <Input
        register={register("upiId")}
        label="UPI Id"
        id="upiId"
        className="!border rounded-none "
        errorMessage={errors.upiId?.message}
        touchedFlieds={touchedFields.upiId}
      />

      <span className="mt-4 text-blue-600 cursor-pointer hover:underline text-lg">
        How do I find my UPI ID?
      </span>
      <Button>Next</Button>
    </form>
  );
};

export default page;
