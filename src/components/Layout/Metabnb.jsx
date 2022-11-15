import React from "react";
import Metabnbs from '../../assets/metabnb.png'


const Metabnb = () => {
  return (
    <section className="h-full py-[3rem] md:py-[5rem] mx-auto bg-meta">
      <div className="w-full mx-auto px-8 md:px-12 max-w-[1220px]">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-[5rem]">
            <section className="flex flex-col gap-5">
               <h2 className="font-bold text-white text-2xl md:text-3xl lg:text-5xl">Metabnb NFTs</h2>
               <p className="text-white font-normal text-[15px] md:text-[18px] max-w-[415px] leading-[35px]">Discover our NFT gift cards collection. Loyal customers gets amazing
                 gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
               </p>
               <button className="w-auto bg-white text-meta rounded-md py-2 px-5 text-[15px] self-start">
                Learn more
               </button>
            </section>

            <div>
                <img src={Metabnbs} alt="metabnb" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Metabnb;
