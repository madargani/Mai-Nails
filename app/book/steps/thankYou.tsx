import { UseFormGetValues } from "react-hook-form"

export default function ThankYou({
  getValues
}: {
  getValues: UseFormGetValues<any>;
}) {
  return (
    <div className="text-center flex flex-col gap-5 mb-8">
      <p className="text-7xl">✅</p>
      <p className="text-5xl font-extrabold">Thank You!</p>
      <p className="text-l">I&apos;ll see you on</p>
      <p className="text-xl font-extrabold">{getValues("Date")} {getValues("Time")}</p>
      <p className="text-l">You&apos;ll receive an email with your appointment details soon</p>
    </div>
  )
}
