import checkMark from "../assets/icons/checkMark.svg";
import recycleIcon from "../assets/icons/recycleIcon.svg";
import purchaseIcon from "../assets/icons/purchaseIcon.svg";
import transitDelivery from "../assets/icons/transitDelivery.svg";
import JoinTheClub from "./JoinTheClub";

export default function WhatsMake() {
  return (
    <>
      <div className="w-full bg-white py-16 text-[#2A254B]">
        <div className="mx-auto w-4/5 pb-[1rem] pt-[3rem]">
          <h2 className="font-clash text-xl font-normal md:text-center md:text-2xl">
            What makes our brand <br className="md:hidden" /> different
          </h2>
        </div>
        <div className="mx-auto flex w-4/5 flex-col gap-[2.25rem] py-4 md:mb-[5.375rem] md:mt-[3.125rem] md:w-[85%] md:flex-row md:gap-[3.625rem]">
          <div className="flex flex-col gap-4 md:gap-2">
            <img
              src={transitDelivery}
              alt="transit-icon"
              className="h-6 w-6 md:mt-2"
            />

            <h3 className="font-clash text-base font-normal md:text-xl lg:text-nowrap">
              Next day as standard
            </h3>
            <p className="font-satoshi text-sm font-normal">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-2">
            <img
              src={checkMark}
              alt="checkmark-icon"
              className="h-6 w-6 md:mt-2"
            />

            <h3 className="font-clash text-base font-normal md:text-xl lg:text-nowrap">
              Made by true artisans
            </h3>
            <p className="font-satoshi text-sm font-normal">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-2">
            <img
              src={purchaseIcon}
              alt="purchase-icon"
              className="h-6 w-6 md:mt-2"
            />
            <h3 className="font-clash text-base font-normal md:text-xl lg:text-nowrap">
              Unbeatable prices
            </h3>
            <p className="font-satoshi text-sm font-normal">
              For our materials and quality you won't find better prices
              anywhere
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-2">
            <img
              src={recycleIcon}
              alt="recylce-icon"
              className="h-6 w-6 md:mt-2"
            />
            <h3 className="font-clash text-base font-normal md:text-xl lg:text-nowrap">
              Recycled packaging
            </h3>
            <p className="font-satoshi text-sm font-normal">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
      <div className="div py-8">
        <JoinTheClub />
      </div>
    </>
  );
}
