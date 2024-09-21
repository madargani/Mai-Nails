import ProgressBar from "./components/progressBar";
import CustomerInfo from "./steps/customerInfo";

export default function Book() {
  return (
    <body
      className="
      bg-gradient-to-t from-green-400 to-pink-400
      h-screen flex items-center justify-center"
    >
      <form className="w-80 h-fit bg-white rounded-[3rem] p-8">
        <button>
          <LeftArrow />
        </button>
        <ProgressBar totalSteps={3} currentStep={3} />
        <CustomerInfo />
        <button
          className="
          w-64 bg-pink-400 rounded-full p-2 
          text-3xl text-white font-bold"
        >
          Next
        </button>
      </form>
    </body>
  );
}

function LeftArrow() {
  return (
    <div className="border-r-[24px] border-y-[16px] border-transparent border-r-neutral-300"></div>
  );
}
