import Logo from "./components/Logo";

export default function Home() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <section>
        <a href="/book">Book an Appointment</a>
      </section>
    </>
  );
}
