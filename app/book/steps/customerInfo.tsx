import { UseFormRegister } from "react-hook-form";

export default function CustomerInfo({
  register,
}: {
  register: UseFormRegister<any>;
}) {
  return (
    <div className="flex flex-col gap-4 my-8">
      <p className="text-3xl font-extrabold">
        Hello! 😊 Tell me about yourself.
      </p>
      <TextInput register={register} label="Name" />
      <TextInput register={register} label="Email" />
      <TextInput register={register} label="Phone Number" />
    </div>
  );
}

function TextInput({
  register,
  label,
}: {
  register: UseFormRegister<any>;
  label: string;
}) {
  return (
    <input
      className="
      w-full border-2 border-neutral-300 rounded-full
      text-2xl placeholder-neutral-300 text-neutral-500 px-4 py-1"
      placeholder={label}
      {...register(label)}
    />
  );
}
