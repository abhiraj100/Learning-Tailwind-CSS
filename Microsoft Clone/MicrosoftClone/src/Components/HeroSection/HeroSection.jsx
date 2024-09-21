import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto w-full">
      {/* Slider or image section  */}
      <div className="slider flex flex-col-reverse md:flex-row bg-[#f2f2f2] mx-2">
        <div className="left flex flex-col justify-center items-center md:items-baseline bg-[#f2f2f2] py-12 ml-32 space-y-5">
          <h1 className="text-2xl font-medium md:text-4xl mx-5 ">
            Surface Laptop 4
          </h1>
          <p className="w-3/4 mx-5 text-center md:text-left">
            Do it all with a perfect balance of sleek, ultra-thin design,
            multitasking speed and improved performance
          </p>
          <button className="text-white bg-black px-4 py-2 font-bold my-6 mx-5">
            Shop Now {">"}
          </button>
        </div>
        <div className="right bg-[#f2f2f2]">
          <img className="w-[60rem] md:w-[64rem]" src="/ms.webp" alt="" />
        </div>
      </div>

      {/* promo  */}
      <div className="promo space-y-2 mx-24  my-6 md:my-8">
        <div className="item flex flex-col items-baseline md:flex-row lg:flex-row lg:justify-center md:justify-center mx-4 my-4 md:my-8  space-x-4 md:space-x-0">
          <div className="flex  flex-row pt-4 md:pt-1 items-center md:flex-col md:justify-center">
            <img className="w-8 h-8 md:mx-24" src="/ic1.png" alt="" />
            <span className="font-medium  md:w-20 md:text-center text-sm mt-2 px-2 md:px-0">
              Choose your Microsoft 365
            </span>
          </div>

          <div className="flex flex-row pt-4 md:pt-1 items-center md:flex-col md:justify-center">
            <img className="w-8 h-8 md:mx-24" src="/ic2.webp" alt="" />
            <span className="font-medium md:w-20 md:text-center text-sm  mt-2 px-2 md:px-0">
              Explore Surface Devices
            </span>
          </div>

          <div className="flex flex-row pt-4 md:pt-1 items-center md:flex-col md:justify-center ">
            <img className="md:mb-4 w-8 h-8 md:mx-24" src="/ic3.webp" alt="" />
            <span className="font-medium md:w-20 md:text-center text-sm md:-mt-2 mt-2 px-2 md:px-0">
              Buy Xbox games
            </span>
          </div>

          <div className="flex flex-row pt-4 md:pt-1 items-center md:flex-col md:justify-center">
            <img className="w-8 h-8 md:mx-24" src="/ic4.png" alt="" />
            <span className="font-medium md:w-20 md:text-center text-sm mt-2 px-2 md:px-0">
              Get Windows 11
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
