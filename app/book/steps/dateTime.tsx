import {
  UseFormRegister,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { useState, useEffect } from "react";
import { getAppts } from "../actions";

export default function DateTime({
  register,
  getValues,
  setValue,
}: {
  register: UseFormRegister<any>;
  getValues: UseFormGetValues<any>;
  setValue: UseFormSetValue<any>;
}) {
  const [appts, setAppts] = useState<string[]>([]);
  useEffect(updateAppts, []);

  function handleDateChange() {
    updateAppts();
    setValue("Time", "");
  }

  function updateAppts() {
    getAppts(getValues("Date")).then((appts) => {
      setAppts(appts);
    });
  }

  return (
    <div className="flex flex-col gap-4 my-8">
      <p className="text-3xl font-extrabold">
        When is a good time for us to meet?
      </p>
      <input
        className="
        w-full border-2 border-neutral-300 rounded-full
        text-2xl text-neutral-500 px-4 py-1"
        type="date"
        {...register("Date")}
        onChange={handleDateChange}
      />
      {appts.map((appt) => (
        <RadioButton key={appt} register={register} value={appt} name="Time" />
      ))}
    </div>
  );
}

function RadioButton({
  value,
  name,
  register,
}: {
  value: string;
  name: string;
  register: UseFormRegister<any>;
}) {
  return (
    <div className="flex justify-center">
      <input
        {...register(name)}
        className="hidden peer"
        type="radio"
        value={value}
        id={value}
        name={name}
      />
      <label
        className="
        peer-checked:bg-green-300 peer-checked:text-white
        border-2 border-green-300
        block w-40 rounded-full p-1 
        text-center text-2xl text-green-300 font-bold"
        htmlFor={value}
      >
        {value}
      </label>
    </div>
  );
}
