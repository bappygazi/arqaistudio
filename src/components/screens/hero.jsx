"use client";
import Head from "next/head";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      {/* Page-level Meta Tags */}
      <Head>
        <title>Arqai Studio - Bespoke AI and Art Studio</title>
        <meta
          name="description"
          content="Arqai Studio is a bespoke AI and art studio — Imagine it. See it. Own it. AI-generated art, custom paintings, art with vision."
        />
        <meta
          name="keywords"
          content="Arqai Studio, AI art studio, bespoke artwork, luxury art, AI-generated art, custom paintings, visionary art"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Arqai Studio - Bespoke AI and Art Studio" />
        <meta
          property="og:description"
          content="Imagine it. See it. Own it. AI-generated art, custom paintings, art with vision from Arqai Studio."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arqai Studio" />
        <meta
          name="twitter:description"
          content="Imagine it. See it. Own it. AI-generated art, custom paintings, art with vision."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      <section className="relative bg-black w-full h-[290px] sm:h-[500px] md:h-[650px] lg:h-[750px] xl:h-[850px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute xl:top-[-35px] top-[-25px] md:top-[-35px] inset-0 flex justify-center items-center">
          <div className="relative w-[300px] sm:w-[500px] md:w-[650px] lg:w-[750px] xl:w-[857px] h-[290px] sm:h-[483px] md:h-[627px] lg:h-[724px] xl:h-[827px]">
            <Image src="/banner.svg" alt="Hero banner background artwork" fill priority className="object-contain" />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="Arqai Studio logo - bespoke AI and art studio"
              title="Arqai Studio, AI art studio, bespoke artwork, luxury art"
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
    </>
  );
};

export default HeroSection;
