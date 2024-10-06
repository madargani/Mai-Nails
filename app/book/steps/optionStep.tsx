import { UseFormRegister } from "react-hook-form";

export default function OptionStep({
  register,
  prompt,
  options,
  name,
}: {
  register: UseFormRegister<any>;
  prompt: string;
  options: string[];
  name: string;
}) {
  return (
    <div className="flex flex-col gap-4 my-8">
      <p className="text-3xl font-extrabold">{prompt}</p>
      {options.map((option) => (
        <RadioButton
          key={option}
          register={register}
          name={name}
          value={option}
        />
      ))}
    </div>
  );
}

function RadioButton({
  register,
  name,
  value,
}: {
  register: UseFormRegister<any>;
  name: string;
  value: string;
}) {
  return (
    <div className="flex justify-center">
      <input
        required
        {...register(name)}
        className="hidden peer"
        type="radio"
        value={value}
        id={value}
        name={name}
      />
      <label
        className="
        peer-checked:bg-pink-400 peer-checked:text-white
        border-2 border-pink-400
        block w-40 rounded-3xl p-1 
        text-center text-2xl text-pink-400 font-bold"
        htmlFor={value}
      >
        {value}
      </label>
    </div>
  );
}
