"use client";
import Button from "<@>/components/Button";
import Input from "<@>/components/Input";
import useStore from "<@>/store/store";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { RiCloseCircleLine } from "react-icons/ri";

type PlanKey = "mobile" | "basic" | "standard" | "premium";

type PlansPriceType = Record<PlanKey, string>;

const plansPrice: PlansPriceType = {
  mobile: "₹ 149",
  basic: "₹ 199",
  standard: "₹ 499",
  premium: "₹ 649",
};

const CreditFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "Please enter a first name.")
    .max(30, "First name cannot be more than 30 character."),
  lastName: z
    .string()
    .max(30, "Last name cannot be more than 30 character.")
    .optional(),

  cardNumber: z.string().regex(/^\d{16}$/, "Enter a valid card number."),
  cvv: z.string().regex(/^\d{3,4}$/, "Enter a valid cvv."),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Enter a valid expiry date."),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type FormSchemaType = z.infer<typeof CreditFormSchema>;

const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(CreditFormSchema),
    mode: "onTouched",
    defaultValues: {
      cardNumber: "1234567812345678",
      cvv: "455",
      expiryDate: "04/24",
    },
  });
  const [choosedPlan] = useStore((state) => [state.selectedPlan]);
  const onCreditFormSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(onCreditFormSubmit)}
      className="flex flex-col mt-8 gap-2 max-w-[450px] p-4"
    >
      <p className="uppercase text-sm">
        Step <span className="font-bold">3</span> of{" "}
        <span className="font-bold">3</span>
      </p>
      <h2 className="text-3xl font-bold mb-4">
        Set up your credit or debit card
      </h2>
      <div className="flex gap-2">
        <img src="/images/paymentOptions/VISA.png" alt="VISA Card Image" />
        <img src="/images/paymentOptions/DINERS.png" alt="DINERS Card Image" />
        <img
          src="/images/paymentOptions/MASTERCARD.png"
          alt="MASTERCARD Image"
        />
        <img src="/images/paymentOptions/AMEX.png" alt="AMEX Card Image" />
      </div>
      <div
        onSubmit={handleSubmit(onCreditFormSubmit)}
        className="flex flex-col gap-6 mt-4"
      >
        <Input
          register={register("firstName")}
          errorMessage={errors.firstName?.message}
          touchedFlieds={touchedFields.firstName}
          label="First name"
          id="firstName"
        />
        <Input
          register={register("lastName")}
          errorMessage={errors.lastName?.message}
          touchedFlieds={touchedFields.lastName}
          label="Last name"
          id="lastName"
        />
        <Input
          register={register("cardNumber")}
          errorMessage={errors.cardNumber?.message}
          touchedFlieds={touchedFields.cardNumber}
          label="Card number"
          id="cardNumber"
        />
        <Input
          register={register("expiryDate")}
          errorMessage={errors.expiryDate?.message}
          touchedFlieds={touchedFields.expiryDate}
          label="Expiration date (MM/YY)"
          id="expiryDate"
        />
        <Input
          register={register("cvv")}
          errorMessage={errors.cvv?.message}
          touchedFlieds={touchedFields.cvv}
          label="Security code (cvv)"
          id="cvv"
        />
      </div>

      <div className="mt-4 flex items-center justify-between p-4 bg-slate-800 rounded-md">
        <div className="flex flex-col">
          <span className="font-bold">{plansPrice[choosedPlan]}/month</span>
          <span>Basic</span>
        </div>
        <div>
          <Link
            href="/signup/planform"
            className="text-lg text-blue-600 hover:underline"
          >
            Change
          </Link>
        </div>
      </div>
      <p className="text-sm text-gray-400">
        Any payment above ₹ 2000 shall need additional authentication.
      </p>
      <p className="text-sm text-gray-400">
        By checking the checkbox below, you agree to our{" "}
        <span className="text-blue-600 cursor-pointer hover:underline">
          Terms of Use
        </span>
        ,{" "}
        <span className="text-blue-600 cursor-pointer hover:underline">
          Privacy Statement
        </span>
        , and that you are over 18. Netflix will automatically continue your
        membership and charge the membership fee (currently ₹ 199/month) to your
        payment method until you cancel. You may cancel at any time to avoid
        future charges.
      </p>
      <div className="relative flex gap-4 text-lg items-center mb-4">
        <input
          required
          {...register("agree")}
          className="w-5 h-5"
          id="agree"
          type="checkbox"
          name="agree"
        />
        <label htmlFor="agree">I agree</label>
        {errors.agree?.message && (
          <span className="absolute -bottom-6 flex gap-2 items-center left-0 text-sm text-red-600 font-semibold">
            <RiCloseCircleLine className="w-5 h-5" /> {errors.agree?.message}
          </span>
        )}
      </div>
      <Button>Start Membership</Button>
    </form>
  );
};

export default page;
