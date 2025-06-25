import Link from "next/link";
const Journey = () => {
  return (
    <section className="bg-black w-full py-12 px-4 md:px-8">
      {/* Title */}
      <div
        className="font-tamil bg-[linear-gradient(90deg,_#95774B_29.17%,_#B89E76_50.03%,_#95774B_70.9%)] 
        bg-clip-text text-transparent text-center text-[20px] sm:text-[24px] md:text-[32px] font-bold max-w-4xl mx-auto"
      >
        <h1>Tell us your vision – and we’ll create a masterpiece from it</h1>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <Link href="#contact">
          <button
            className="border-2 font-avenir border-[#95774B] text-white text-[14px] sm:text-[16px] font-bold rounded-lg 
            w-[180px] sm:w-[200px] md:w-[221px] h-12 hover:bg-[#95774B] transition duration-300 ease-in-out"
          >
            Start your journey
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Journey;
