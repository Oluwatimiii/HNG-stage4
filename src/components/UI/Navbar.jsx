import React, { useState } from "react";
import LogoImg from "../../assets/Group.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Navbar = ({ openModal }) => {
  const [openNav, setOpenNav] = useState(false);

  const navOpener = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <div className="relative z-[1000]">
      <div className="shadow-sm fixed top-0 left-0 nav w-full m-auto">
        <div className="bg-white py-5 flex items-center justify-between px-[2rem] md:px-[3rem]">
          <Link to="/">
            <div className="font-bold cursor-pointer">
              <span>
                <div className="max-h-[3rem] max-w-[9rem]">
                  <img src={LogoImg} alt="Logo" className="w-full h-full" />
                </div>
              </span>
            </div>
          </Link>
          <div
            onClick={navOpener}
            className="text-2xl p-2 absolute right-5 top-3 cursor-pointer md:hidden transition-all ease-in-out delay-150 duration-300"
          >
            {openNav ? <FaTimes /> : <FaBars />}
          </div>

          <ul
            className={`flex flex-col md:flex-row items-center z-[-1] transition-all delay-100 duration-600 ease-in-out 
            justify-center md:justify-between md:space-x-[2rem] lg:space-x-[10rem] text-center pb-20 md:pb-0 
            absolute top-0 left-0 md:static bg-black md:bg-white  md:text-black
             md:z-auto w-full md:w-auto h-screen md:h-auto ${
               openNav ? "top-[60px] opacity-100" : "top-[-700px] opacity-0"
             } md:opacity-100`}
          >
            <div className="flex flex-col md:flex-row items-center">
              <Link
                to="/"
                className="navlink"
                onClick={() => setOpenNav(!openNav)}
              >
                Home
              </Link>
              <Link
                to="/places"
                className="navlink"
                onClick={() => setOpenNav(!openNav)}
              >
                Place to stay
              </Link>
              <Link
                to="/"
                className="navlink"
                onClick={() => setOpenNav(!openNav)}
              >
                NFTs
              </Link>
              <Link
                to="/"
                className="navlink"
                onClick={() => setOpenNav(!openNav)}
              >
                Community
              </Link>
            </div>
            <div onClick={() => openModal(true)}>
              <button onClick={() => setOpenNav(!openNav)} className="bg-meta text-[#fff] text-sm rounded-[10px] py-1 md:py-2 px-3 lg:px-4 mt-3 md:mt-0">
                Connect wallet
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
