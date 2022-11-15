import React, { useState } from "react";
import Location from "../../assets/location.png";
import Adven1 from "../../assets/adven1.png";
import Adven2 from "../../assets/adven2.png";
import Adven3 from "../../assets/adven3.png";
import Adven4 from "../../assets/adven4.png";
import Adven5 from "../../assets/adven5.png";
import Adven6 from "../../assets/adven6.png";
import Adven7 from "../../assets/adven7.png";
import Adven8 from "../../assets/adven8.png";
import Adven9 from "../../assets/adven9.png";
import Adven10 from "../../assets/adven10.png";
import Adven11 from "../../assets/adven11.png";
import Adven12 from "../../assets/adven12.png";
import Adven13 from "../../assets/adven13.png";
import Adven14 from "../../assets/adven14.png";
import Adven15 from "../../assets/adven15.png";
import Adven16 from "../../assets/adven16.png";
import Star from "../../assets/star.png";

const Placestay = () => {
  const [openDown, setOpenDown] = useState(false);

  const DROP_DOWN = [
    { name: "Restaurant" },
    { name: "Cottage" },
    { name: "Castle" },
    { name: "fantast city" },
    { name: "beach" },
    { name: "Carbins" },
    { name: "Off-grid" },
    { name: "Farm" },
  ];

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
    {
      image: Adven9,
    },
    {
      image: Adven10,
    },
    {
      image: Adven11,
    },
    {
      image: Adven12,
    },
    {
      image: Adven13,
    },
    {
      image: Adven14,
    },
    {
      image: Adven15,
    },
    {
      image: Adven16,
    },
  ];

  return (
    <section className="h-full pt-[6rem] md:pt-[8rem] pb-[2rem] md:pb-[3.2rem] mx-auto">
      <div className="w-full mx-auto px-8 md:px-12 max-w-[1220px]">
        {/* FILTERS */}
        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="relative inline-block text-left md:hidden">
            <div>
              <button
                type="button"
                onClick={() => setOpenDown(true)}
                className="inline-flex w-full justify-center rounded-md transition-all duration-200 ease-in-out outline-none border border-gray-300 bg-white px-2 md:px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Options
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`absolute ${
                openDown
                  ? "transform opacity-100 scale-100"
                  : "transform opacity-0 scale-95 "
              } left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1 transition-all duration-200 ease-in-out" role="none">
                {DROP_DOWN.map((data, index) => (
                  <a
                   key={index}
                    href="#"
                    onClick={() => setOpenDown(false)}
                    className="text-meta block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    {data.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex flex-wrap gap-8 hidden items-center text-metaBlack text-xl">
            <ul>
              <li className="">
                <a href="/">Restaurant</a>
              </li>
            </ul>
            <ul>
              <li className="">
                <a href="/">Cottage</a>
              </li>
            </ul>
            <ul>
              <li className="">
                <a href="/">Castle</a>
              </li>
            </ul>
            <ul>
              <li className="">
                <a href="/">fantast city</a>
              </li>
            </ul>
            <ul>
              <li className="">
                <a href="/">Beach</a>
              </li>
            </ul>
            <ul>
              <li className="">
                <a href="/">Cabins</a>
              </li>
            </ul>
            <ul>
              <li className="">
                <a href="/">Off-grid</a>
              </li>
            </ul>
            <ul>
              <li className="">
                <a href="/">Farm</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between text-sm md:text-base gap-2 md:gap-[1rem] rounded-md px-1 md:px-3 py-2 border-[1px] border-[#B4B4B4]">
            <p>Location</p>
            <img src={Location} alt="setting" />
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-[2rem] md:mt-[3rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 content-center gap-3">
            {DATA_CARD.map((data, index) => (
              <div
                className="overflow-hidden rounded-[15px] border-[1px] border-[#D7D7D7] max-w-[292px] px-3 py-3 flex flex-col items-stretch justify-center mx-auto"
                key={index}
              >
                <img
                  src={data.image}
                  alt="Desert King"
                  className="rounded-[15px] pb-2"
                />
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
        </div>
      </div>
    </section>
  );
};

export default Placestay;
