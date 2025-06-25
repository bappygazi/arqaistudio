import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="relative bg-black w-full h-[290px] sm:h-[500px] md:h-[650px] lg:h-[750px] xl:h-[850px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute xl:top-[-35px] top-[-25px] md:top-[-35px] inset-0 flex justify-center items-center">
        <div className="relative w-[300px] sm:w-[500px] md:w-[650px] lg:w-[750px] xl:w-[857px] h-[290px] sm:h-[483px] md:h-[627px] lg:h-[724px] xl:h-[827px]">
          <Image src="/banner.svg" alt="Banner" fill priority className="object-contain" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="">
          <Image
            src="/logo.png"
            alt="ArqAI Logo"
            width={610}
            height={418}
            priority
            className="w-[160px] sm:w-[200px] md:w-[250px] lg:w-[280px] xl:w-[305px] h-auto mx-auto"
          />
        </div>

        {/* Heading */}
        <div className="text-center mt-[-30px] px-4">
          <h1 className="font-tamil bg-gradient-to-r from-[#95774B] via-[#B89E76] to-[#95774B] bg-clip-text text-transparent text-[17px] sm:text-[24px] md:text-[32px] lg:text-[38px] xl:text-[44px] leading-[24px] sm:leading-[32px] md:leading-[45px] lg:leading-[55px] xl:leading-[65px] font-normal">
            Imagine it. See it. Own it.
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
