import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { useState, useEffect } from "react";
import { getAppts } from "../actions";

export default function DateTime({
  register,
  setValue,
}: {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
}) {
  const [appts, setAppts] = useState<string[]>([]);
  useEffect(updateAppts, []);

  const [loading, setLoading] = useState(false);

  function handleDateChange() {
    updateAppts();
    setValue("Time", "");
  }

  function updateAppts() {
    setLoading(true);
    const dateInput = document.getElementById("Date") as HTMLInputElement;
    if (!dateInput) return;
    getAppts(dateInput.value).then((appts) => {
      setAppts(appts);
      setLoading(false);
    });
  }

  return (
    <div className="flex flex-col gap-4 my-8">
      <p className="text-3xl font-extrabold">
        When is a good time for us to meet?
      </p>
      <input
        id="Date"
        className="
        w-full border-2 border-neutral-300 rounded-full
        text-2xl text-neutral-500 px-4 py-1"
        type="date"
        {...register("Date")}
        onChange={handleDateChange}
      />
      <div className="flex flex-col gap-4 my-4">
        {loading ? (
          <p className="text-center text-xl text-neutral-400 my-4">
            Loading...
          </p>
        ) : (
          <>
            {appts.map((appt) => (
              <RadioButton
                key={appt}
                register={register}
                value={appt}
                name="Time"
              />
            ))}
            {appts.length === 0 && (
              <p className="text-center text-xl text-neutral-400 my-4">
                No appointments available. Try a different date.
              </p>
            )}
          </>
        )}
      </div>
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
        peer-checked:bg-green-400 peer-checked:text-white
        border-2 border-green-400
        block w-40 rounded-full p-1 
        text-center text-2xl text-green-400 font-bold"
        htmlFor={value}
      >
        {value}
      </label>
    </div>
  );
}
