import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        absolute top-0 left-0 right-0
        flex justify-center items-center
        px-8 h-48
        bg-green-950 bg-opacity-85"
    >
      <Image
        src="/images/mai_nails_logo.png"
        width={300}
        height={100}
        alt="Mai Nails"
      />
    </header>
  );
}
