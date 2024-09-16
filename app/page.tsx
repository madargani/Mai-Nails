import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <body className="flex flex-col h-screen">
      <Header />
      <section
        className="
        bg-[url('/images/nails.jpg')] bg-center bg-cover
        flex-grow"
      >
        <a
          className="
          block p-6 rounded-full
          mx-auto w-fit mt-[50vh]
          text-white text-3xl font-semibold
          bg-pink-500"
          href="/book"
        >
          Get Stylish Nails
        </a>
      </section>
      <Footer />
    </body>
  );
}
