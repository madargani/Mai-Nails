export default function ProgressBar({
  totalSteps,
  currentStep,
}: {
  totalSteps: number;
  currentStep: number;
}) {
  const width = (currentStep / totalSteps) * 100;
  return (
    <div
      className="
      w-full h-4 bg-neutral-300 rounded-full my-4"
    >
      <div
        className="h-full bg-pink-400 rounded-full"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}
