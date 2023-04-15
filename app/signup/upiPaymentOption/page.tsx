"use client";
import Input from "<@>/components/Input";
import React from "react";
import Select from "<@>/components/Select";
import { UpiOptions } from "<@>/data/paymentOptions";
import Button from "<@>/components/Button";

const page = () => {
  return (
    <div className="mt-4 p-4 sm:mt-8 flex flex-col gap-4">
      <p className="uppercase text-sm">
        Step <span className="font-bold">3</span> of{" "}
        <span className="font-bold">3</span>
      </p>
      <h2 className="text-3xl font-bold mb-4">Set up UPI AutoPay</h2>
      <p className="text-lg">
        You can change this recurring payment any time in your settings.
      </p>
      <Select options={UpiOptions} id="upi_id" />
      <Input label="UPI Id" id="upi_id" className="!border !rounded-none" />
      <span className="text-blue-600 cursor-pointer hover:underline text-lg">
        How do I find my UPI ID?
      </span>
      <Button>Next</Button>
    </div>
  );
};

export default page;
