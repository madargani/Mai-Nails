export default function ProgressBar({
  totalSteps,
  currentStep,
  visibility
}: {
  totalSteps: number;
  currentStep: number;
  visibility: string;
}) {
  const width = (currentStep / totalSteps) * 100;
  return (
    <div
      className={`
      ${visibility}
      w-full h-4 bg-neutral-300 rounded-full my-4`}
    >
      <div
        className="h-full bg-pink-400 rounded-full"
        style={{ width: `${width}%` }}
      ></div>
    </div >
  );
}
