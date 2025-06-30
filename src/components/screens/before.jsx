"use client";
import Head from "next/head";
import Image from "next/image";

const Before = () => {
  return (
    <>
      <Head>
        <title>Before - Arqai Studio</title>
        <meta
          name="description"
          content="Explore AI inspired paintings, custom wall art, geometric and abstract artworks, surreal art, and digital inspiration crafted by Arqai Studio."
        />
        <meta
          name="keywords"
          content="AI inspired painting, custom wall art, modern interior decor, geometric art, abstract painting, mid-century style decor, surreal art, abstract impressionism, digital art inspiration"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className="bg-black w-full py-12">
        {/* Title */}
        <div className="text-center">
          <h1
            className="font-tamil text-[24px] sm:text-[28px] md:text-[32px] font-bold 
          bg-gradient-to-r from-[#95774B] via-[#B89E76] to-[#95774B] bg-clip-text text-transparent"
          >
            See before it's real
          </h1>
        </div>

        {/* Description */}
        <div className="mx-auto mt-5 px-2">
          <p className="font-avenir text-center mx-auto max-w-[1025px] text-sm sm:text-base md:text-[20px] font-normal text-[#B4B4B4] leading-relaxed md:leading-8">
            Arqai Studio is a bespoke art atelier that transforms your most abstract visions into tangible, one-of-a-kind artworks. Using AI-generated design concepts as a creative
            foundation, we collaborate with skilled artisans to bring your ideas to life – in the form of hand-painted canvases, ceramics, sculptures, or other refined forms of expression. Each
            piece begins with your story. The rest is crafted through a blend of technology, intuition, and art.
          </p>
        </div>

        {/* Images Grid */}
        <div className="lg:container mx-auto ">
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            <Image
              src="/beforepic1p.png"
              alt="Hand-painted flower artwork in modern living room"
              title="AI inspired painting, custom wall art, modern interior decor"
              width={381}
              height={480}
              className="w-full max-w-[400px] rounded-[10px] object-cover"
            />
            <Image
              src="/beforepic2p.png"
              alt="Geometric artwork in minimalist dining space"
              title="Geometric art, abstract painting, mid-century style decor"
              width={381}
              height={480}
              className="w-full max-w-[400px] rounded-[10px] object-cover"
            />
            <Image
              src="/beforepic3p.png"
              alt="Colorful abstract painting inspired by AI"
              title="Surreal art, abstract impressionism, digital art inspiration"
              width={381}
              height={480}
              className="w-full max-w-[400px] rounded-[10px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Before;
