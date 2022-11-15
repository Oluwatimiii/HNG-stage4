import React from "react";
import HeroImg from "../../assets/heroGrp.png";

const Hero = () => {
  return (
    <section className="h-full pt-[6rem] md:pt-[8rem] pb-[2rem] md:pb-[3.2rem] mx-auto">
      <div className="w-full mx-auto px-8 md:px-12 max-w-[1220px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[1rem]">
          <div className=" lg:max-w-[56%] flex flex-col gap-6">
            <h1 className="text-[2.3rem] px-2 md:px-0 md:text-[3.3rem] text-metaBlack md:leading-[78px]">
              Rent a <span className="text-meta font-bold">Place</span> away from{" "}
              <span className="text-meta font-bold">Home</span> in the{" "}
              <span className="text-meta font-bold">Metaverse</span>
            </h1>
            <p className="text-metaBlack px-2 md:px-0 text-[16px] md:text-2xl pr-10 md:pr-0 md:max-w-xl font-normal">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="mx-2 flex items-center justify-between w-full border-[1px] border-[#B8B8B8] rounded-md max-w-xl overflow-hidden">
              <input type="text" placeholder="Search for location" className=" max-w-[200px] md:max-w-full bg-transparent outline-none px-4 placeholder:text-sm placeholder:text-[#B8B8B8]" />
              <button type="button" className="bg-meta text-white px-3 py-3 w-[40%] outline-none border-0 text-[15px]">Search</button>
            </div>
          </div>
          <div className="max-w-[470px] mt-6 md:mt-9 lg:mt-0">
            <img src={HeroImg} alt="heroImg" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
