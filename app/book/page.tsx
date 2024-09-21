"use client";

import ProgressBar from "./components/progressBar";
import CustomerInfo from "./steps/customerInfo";

import useMultiStepForm from "./useMultiStepForm";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function Book() {
  const { register, control } = useForm();

  const { totalSteps, step, page, nextStep, prevStep } = useMultiStepForm([
    <CustomerInfo register={register} />,
    <div>Step 2</div>,
    <div>Step 3</div>,
  ]);

  return (
    <body
      className="
      bg-gradient-to-t from-green-400 to-pink-400
      h-screen flex items-center justify-center"
    >
      <form className="w-80 h-fit bg-white rounded-[3rem] p-8">
        <button type="button" onClick={prevStep}>
          <LeftArrow />
        </button>
        <ProgressBar totalSteps={totalSteps} currentStep={step + 1} />
        {page}
        <button
          className={`
          ${step !== totalSteps - 1 ? "bg-pink-400" : "bg-green-400"}
          w-64 rounded-full p-2 
          text-3xl text-white font-bold`}
          type="button"
          onClick={nextStep}
        >
          {step !== totalSteps - 1 ? "Next" : "Submit"}
        </button>
      </form>
      <DevTool control={control} />
    </body>
  );
}

function LeftArrow() {
  return (
    <div className="border-r-[24px] border-y-[16px] border-transparent border-r-neutral-300"></div>
  );
}
