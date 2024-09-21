"use client";

import ProgressBar from "./components/progressBar";
import CustomerInfo from "./steps/customerInfo";

import useMultiStepForm from "./useMultiStepForm";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import DateTime from "./steps/dateTime";

export default function Book() {
  const { register, getValues, setValue, control } = useForm();

  const { totalSteps, step, page, nextStep, prevStep } = useMultiStepForm([
    <CustomerInfo register={register} getValues={getValues} />,
    <DateTime register={register} getValues={getValues} setValue={setValue} />,
    <div>Step 3</div>,
  ]);

  return (
    <body
      className="
      bg-gradient-to-t from-green-400 to-pink-400
      h-screen flex items-center justify-center"
    >
      <form className="w-80 h-fit bg-white rounded-[3rem] p-8">
        <BackButton
          prevStep={prevStep}
          visibility={step === 0 ? "invisible" : ""}
        />
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

function BackButton({
  prevStep,
  visibility,
}: {
  prevStep: () => void;
  visibility: string;
}) {
  return (
    <button
      onClick={prevStep}
      type="button"
      className={`
      ${visibility}
      border-r-[24px] border-y-[16px] border-transparent border-r-neutral-300`}
    ></button>
  );
}
