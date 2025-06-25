import Image from "next/image";

const studio = () => {
  return (
    <section className="bg-black w-full xl:h-[1000px] py-12 px-4 md:px-8 ">
      <div className="relative z-10  pb-8 text-center">
        <div
          className="font-tamil  bg-[linear-gradient(90deg,_#95774B_29.17%,_#B89E76_50.03%,_#95774B_70.9%)] 
        bg-clip-text text-transparent text-center text-[20px] md:text-[20px] mb-[20px] font-bold"
        >
          <h1 className="pt-[100px]">Your vision, reimagined</h1>
        </div>
        <div className=" mx-auto mt-5 ">
          <p className="font-avenir xl:w-[1075px] xl:mx-auto text-center font-extrabold text-[16px] md:text-[40px] leading-[28px] md:leading-[34px] text-[#B4B4B4]">#Arqai Studio</p>
        </div>
      </div>

      {/* xl part */}
      <div className="container">
        <div className=" relative hidden xl:block">
          <div className="absolute top-0 left-[-110px]">
            <Image src="/gallerypic1.png" alt="gallery1" width={78} height={382} />
          </div>
          <div className="absolute top-[70px] -left-4">
            <Image src="/gallerypic2.png" alt="gallery1" width={451} height={312} />
          </div>
          <div className="absolute top-[135px] left-[453px]">
            <Image src="/gallerypic3.png" alt="gallery1" width={295} height={392} />
          </div>
          <div className="absolute top-[70px] left-[765px]">
            <Image src="/gallerypic4.png" alt="gallery1" width={290} height={348} />
          </div>
          <div className="absolute -top-4 right-[-94px]  ">
            <Image src="/gallerypic5.png" alt="gallery1" width={262} height={433} />
          </div>
          <div className="absolute top-[399px] left-[-110px]">
            <Image src="/gallerypic6.png" alt="gallery1" width={185} height={323} />
          </div>
          <div className="absolute top-[400px] left-[94px]">
            <Image src="/gallerypic7.png" alt="gallery1" width={344} height={242} />
          </div>
          <div className="absolute top-[436px] left-[765px]">
            <Image src="/gallerypic8.svg" alt="gallery1" width={178} height={242} />
          </div>
          <div className="absolute top-[436px] left-[960px]">
            <Image src="/gallerypic9.png" alt="gallery1" width={258} height={196} />
          </div>
        </div>
      </div>

      {/* Mobile part */}

      <div className="block xl:hidden px-4 pt-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {["gallerypic5.png", "gallerypic2.png", "gallerypic3.png", "gallerypic4.png", "gallerypic5.png", "gallerypic6.png", "gallerypic7.png", "gallerypic8.svg", "gallerypic9.png"].map(
            (img, index) => (
         <div
  key={index}
  className={`w-full max-w-[360px] sm:max-w-[280px] md:max-w-[240px] ${
    index === 8 ? 'sm:mt-[-210px] md:mt-0' : ''
  } ${
    index === 6 ? 'sm:mt-[-28px] md:mt-[-46px] lg:mt-[-55px] xl:mt-0' : ''
  } ${
    index === 7 ? 'md:mt-[-146px] lg:mt-[-173px] xl:mt-0' : ''
  }${
    index === 4 ? 'md:mt-[-193px] lg:mt-[-225px] xl:mt-0' : ''
  }${
    index === 5 ? 'md:mt-[-68px] lg:mt-[-73px] xl:mt-0' : ''
  }${
    index === 3 ? 'sm:mt-[35px] md:mt-[-2px] lg:mt-[2px] xl:mt-0' : ''
  }`}
>
                <Image src={`/${img}`} alt={`gallery${index + 1}`} width={400} height={300} className="w-full h-auto rounded-xl object-cover" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default studio;
