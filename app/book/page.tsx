"use client";

import ProgressBar from "./components/progressBar";
import CustomerInfo from "./steps/customerInfo";

import useMultiStepForm from "./useMultiStepForm";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import DateTime from "./steps/dateTime";
import OptionStep from "./steps/optionStep";
import ThankYou from "./steps/thankYou";

export default function Book() {
  const { register, setValue, getValues, control } = useForm();

  const { totalSteps, step, page, nextStep, prevStep } = useMultiStepForm([
    <CustomerInfo register={register} />,
    <DateTime register={register} setValue={setValue} />,
    <OptionStep
      register={register}
      prompt="Do you need a nail removal?"
      options={["Yes", "No"]}
      name="Service"
    />,
    <OptionStep
      register={register}
      prompt="What shape nails would you like?"
      options={["Almond", "Oval", "Rounded", "Square", "Stiletto"]}
      name="Shape"
    />,
    <ThankYou getValues={getValues} />
  ]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    nextStep();
  }

  return (
    <body
      className="
      bg-gradient-to-t from-green-400 to-pink-400
      h-screen flex items-center justify-center"
    >
      <form
        className="w-80 h-fit bg-white rounded-[3rem] p-8"
        onSubmit={handleSubmit}
      >
        <BackButton
          prevStep={prevStep}
          visibility={step === 0 || step === totalSteps - 1 ? "invisible" : ""}
        />
        <ProgressBar
          totalSteps={totalSteps - 1}
          currentStep={step + 1}
          visibility={step === totalSteps - 1 ? "hidden" : ""}
        />
        {page}
        <button
          className={`
          ${step !== totalSteps - 2 ? "bg-pink-400" : "bg-green-400"}
          w-64 rounded-full p-2 
          text-3xl text-white font-bold`}
        >
          {step < totalSteps - 2 && "Next"}
          {step == totalSteps - 2 && "Submit"}
          {step == totalSteps - 1 && "Back Home"}
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
