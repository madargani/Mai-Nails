import { useState } from "react";

export default function useMultiStepForm(pages: React.ReactNode[]) {
  const [step, setStep] = useState(0);

  function nextStep() {
    if (step === pages.length - 1) return;
    setStep(step + 1);
  }

  function prevStep() {
    if (step === 0) return;
    setStep(step - 1);
  }

  return {
    totalSteps: pages.length,
    step,
    page: pages[step],
    nextStep,
    prevStep,
  };
}
