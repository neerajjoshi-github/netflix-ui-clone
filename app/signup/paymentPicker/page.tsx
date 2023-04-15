import React from "react";
import { TfiLock } from "react-icons/tfi";
import { RiLock2Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <div className="mt-4 sm:mt-8 p-4 flex flex-col items-center gap-4">
      <div className="flex w-12 h-12 mb-4 sm:mb-8 items-center justify-center p-2 rounded-full border-2 border-red-600">
        <TfiLock className="text-red-600 w-full h-full " />
      </div>
      <p className="uppercase text-sm">
        Step <span className="font-bold">3</span> of{" "}
        <span className="font-bold">3</span>
      </p>
      <h2 className="text-3xl font-bold mb-4">Choose how to pay</h2>
      <p className="text-center text-lg">
        Your payment is encrypted and you can change your payment method at
        anytime.
      </p>
      <p className="text-center font-semibold text-lg">
        Secure for peace of mind. Cancel easily online.
      </p>
      <div className="flex flex-col w-full gap-3">
        <div className="flex gap-1 items-center text-sm justify-end ">
          <span>End-to-end encrypted</span>
          <RiLock2Fill className="text-yellow-400" />
        </div>
        <Link href="/signup/creditOption">
          <button className="w-full max-sm:py-2 sm:h-16 px-4 flex items-center justify-between border border-gray-400 rounded-md ">
            <div className="flex flex-wrap sm:flex-row gap-4 items-center">
              <span className="max-sm:w-full text-lg font-semibold">
                Credit or Debit Card
              </span>
              <img
                className="max-sm:w-[18%] max-w-[50px]"
                src="/images/paymentOptions/VISA.png"
                alt="VISA Card Image"
              />
              <img
                className="max-sm:w-[18%] max-w-[50px]"
                src="/images/paymentOptions/MASTERCARD.png"
                alt="MASTERCARD Card Image"
              />
              <img
                className="max-sm:w-[18%] max-w-[50px]"
                src="/images/paymentOptions/DINERS.png"
                alt="DINERS Card Image"
              />
              <img
                className="max-sm:w-[18%] max-w-[50px]"
                src="/images/paymentOptions/AMEX.png"
                alt="AMEX Card Image"
              />
            </div>
            <div>
              <IoIosArrowForward size={30} />
            </div>
          </button>
        </Link>
        <Link href="/signup/upiPaymentOption">
          <button className="w-full max-sm:py-2 sm:h-16 px-4 flex items-center justify-between border border-gray-400 rounded-md">
            <div className="flex flex-wrap sm:flex-row gap-4 items-center">
              <span className="max-sm:w-full text-lg font-semibold">
                UPI AutoPay
              </span>
              <img
                className="max-sm:w-[15%] max-w-[50px]"
                src="/images/paymentOptions/PAYTM.png"
                alt="PAYTM Image"
              />
              <img
                className="max-sm:w-[15%] max-w-[50px]"
                src="/images/paymentOptions/GPAY.png"
                alt="Gpay image"
              />
              <img
                className="max-sm:w-[15%] max-w-[50px]"
                src="/images/paymentOptions/PHONEPE.png"
                alt="Phonepe"
              />
              <img
                className="max-sm:w-[15%] max-w-[50px]"
                src="/images/paymentOptions/BHIM.png"
                alt="BHIM Image"
              />
              <img
                className="max-sm:w-[15%] max-w-[50px]"
                src="/images/paymentOptions/AMAZONPAY.png"
                alt="AmazonPay Image"
              />
            </div>
            <div>
              <IoIosArrowForward size={30} />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
