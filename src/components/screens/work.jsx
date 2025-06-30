"use client";
import Head from "next/head";
import Image from "next/image";

const steps = [
  {
    image: "/product-1.png",
    alt: "Client brief about wildflowers and dreamy sunset vision",
    title: "You imagine",
    description:
      "Tell us what you envision – a mood, a memory, a surreal dream, a striking shape or emotion.",
    keywords: "custom art brief, AI generated concept, personalized artwork",
  },
  {
    image: "/product-2.png",
    alt: "Final visual concept for custom painting",
    title: "We design",
    description:
      "We generate 3 distinct visual directions using AI. You choose one, and we refine it together.",
    keywords: "AI design to real artwork, visual art direction, luxury art",
  },
  {
    image: "/product-3.png",
    alt: "Final artwork created from AI vision",
    title: "We create",
    description:
      "Your chosen concept is brought to life by hand: painted, sculpted, or crafted by our studio or artisan partners.",
    keywords: "from prompt to painting, AI powered creativity, fine art",
  },
];

const Work = () => {
  return (
    <>
      <Head>
        <title>How it Works - Arqai Studio</title>
        <meta
          name="description"
          content="Explore Arqai Studio's creative process: from custom art briefs and AI-generated concepts to luxury artwork crafted by skilled artisans. Confidence and clarity before the first brushstroke."
        />
        <meta
          name="keywords"
          content="
            custom art brief, AI generated concept, personalized artwork,
            AI design to real artwork, visual art direction, luxury art,
            from prompt to painting, AI powered creativity, fine art
          "
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className="bg-black w-full py-12">
        {/* Title */}
        <div className="text-center">
          <h1 className="pt-16 text-[24px] sm:text-[28px] md:text-[32px] font-bold font-tamil bg-gradient-to-r from-[#95774B] via-[#B89E76] to-[#95774B] bg-clip-text text-transparent">
            How does it work?
          </h1>
        </div>

        {/* Description */}
        <div className="mt-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1145px] mx-auto">
            <p className="font-avenir text-center font-normal text-sm sm:text-base md:text-[20px] text-[#B4B4B4] leading-relaxed md:leading-8">
              Most commissioned art is a leap of faith. At Arqai Studio, it’s a dialogue. You don’t have to imagine what your artwork might look like – we show you three AI-generated visions
              before a single brushstroke is made. Only once you approve the concept, we begin crafting it by hand. Confidence, clarity, and complete creative control – before anything is created.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="lg:container mx-auto mt-16">
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {steps.map((step, idx) => (
              <div key={idx} className="relative w-full max-w-[400px] rounded-lg overflow-hidden">
                {/* Image block with fixed size */}
                <div className="relative w-full h-[549px] rounded-[10px] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    title={step.keywords}
                    width={549}
                    height={549}
                    className="w-full h-full object-cover rounded-[10px]"
                    priority
                  />
                </div>

                {/* Content below image */}
                <div className="absolute bottom-0 left-0 w-full">
                  <div className="text-center rounded-[10px] bg-[#FFFFFFB8] py-3.5 text-[20px] sm:text-[22px] md:text-[26px] font-bold text-[#3A3A3A] font-tamil">
                    {step.title}
                  </div>
                  <div className="bg-[#95774B] py-4 px-5 rounded-t-[10px] rounded-b-[10px]">
                    <p className="text-sm font-avenir font-medium sm:text-[14px] max-w-[300px] md:text-[15px] text-white leading-[20px] mx-auto text-left">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
