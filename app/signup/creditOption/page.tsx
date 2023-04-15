import Button from "<@>/components/Button";
import Input from "<@>/components/Input";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col mt-8 gap-2 max-w-[450px] p-4">
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
      <form action="" className="flex flex-col gap-4 mt-4">
        <Input label="First name" id="first_name" />
        <Input label="Last name" id="last_name" />
        <Input label="Card number" id="card_number" />
        <Input label="Expiration date (MM/YY)" id="expiration_date" />
        <Input label="Security code (cvv)" id="security_code" />
      </form>
      <div className="mt-4 flex items-center justify-between p-4 bg-slate-800 rounded-md">
        <div className="flex flex-col">
          <span className="font-bold">₹ 199/month</span>
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
      <div className="flex gap-4 text-lg items-center mb-4">
        <input className="w-5 h-5" id="agree" type="checkbox" />
        <label htmlFor="agree">I agree</label>
      </div>
      <Button>Start Membership</Button>
    </div>
  );
};

export default page;
