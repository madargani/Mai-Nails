export default function CustomerInfo() {
  return (
    <div className="flex flex-col gap-4 my-8">
      <p className="text-3xl font-extrabold">
        Hello! 😊 Tell me about yourself.
      </p>
      <TextInput label="Name" />
      <TextInput label="Email" />
      <TextInput label="Phone Number" />
    </div>
  );
}

function TextInput({ label }: { label: string }) {
  return (
    <input
      className="
      w-full border-2 border-neutral-300 rounded-full
      text-2xl placeholder-neutral-300 text-neutral-500 px-4 py-1"
      placeholder={label}
      id={label}
    />
  );
}
