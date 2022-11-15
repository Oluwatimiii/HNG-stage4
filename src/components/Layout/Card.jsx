import React from "react";
import Adven1 from "../../assets/adven1.png";
import Adven2 from "../../assets/adven2.png";
import Adven3 from "../../assets/adven3.png";
import Adven4 from "../../assets/adven4.png";
import Adven5 from "../../assets/adven5.png";
import Adven6 from "../../assets/adven6.png";
import Adven7 from "../../assets/adven7.png";
import Adven8 from "../../assets/adven8.png";
import Star from '../../assets/star.png'

const Card = () => {
  const DATA_CARD = [
    {
      image: Adven1,
    },
    {
      image: Adven2,
    },
    {
      image: Adven3,
    },
    {
      image: Adven4,
    },
    {
      image: Adven5,
    },
    {
      image: Adven6,
    },
    {
      image: Adven7,
    },
    {
      image: Adven8,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 content-center gap-3">
      {DATA_CARD.map((data, index) => (
        <div className="overflow-hidden rounded-[15px] border-[1px] border-[#D7D7D7] max-w-[292px] px-3 py-3 flex flex-col items-stretch justify-center mx-auto" key={index}>
          <img src={data.image} alt="Desert King" className="rounded-[15px] pb-2" />
          <div>
            <div className="flex items-center justify-between text-metaBlack text-[12px] pb-1">
                <p>Desert King</p>
                <p className="font-bold">1MBT per night</p>
            </div>
            <div className="flex items-center justify-between text-metaBlack text-[12px] pb-1">
                <p>2345Km away</p>
                <p>available for 2weeks stay</p>
            </div>
            <div>
                <img src={Star} alt="star" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
