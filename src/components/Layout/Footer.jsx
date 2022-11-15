import React from "react";
import Footer1 from '../../assets/footer1.svg'
import Insta from "../../assets/insta.png"
import Twitter from "../../assets/twitter.png"
import Facebook from "../../assets/facebook.png"
import Copyright from "../../assets/copyright.png"
 
const Footer = () => {
  return (
    <section className="h-full py-[3rem] md:py-[5rem] mx-auto bg-[#1D1D1E]">
      <div className="w-full mx-auto px-8 md:px-12 max-w-[1220px]">
        <div className="mt-4 text-white flex flex-col gap-[3rem]  items-center md:items-stretch text-center md:text-start">
          <div className="flex flex-col md:flex-row md:text-start md:items-stretch justify-between gap-5">
            <div>
                <img src={Footer1} alt="footerLogo" />

                <div className="flex items-center justify-center md:justify-start gap-[4rem] mt-[5rem]">
                    <img src={Facebook} alt="faceboook" />
                    <img src={Insta} alt="instagram" />
                    <img src={Twitter} alt="twitter" />
                </div>
            </div>

            <div className="mt-7 md:mt-0">
                <ul>
                    <li className="font-bold text-[15px] md:text-[18px]"><a href="/">Community</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">NFT</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Token</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Landlord</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Discord</a></li>
                </ul>
            </div>
            <div className="mt-7 md:mt-0">
                <ul>
                    <li className="font-bold text-[15px] md:text-[18px]"><a href="/">Places</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Castles</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Farms</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Beach</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Learn More</a></li>
                </ul>
            </div>
            <div className="mt-7 md:mt-0">
                <ul>
                    <li className="font-bold text-[15px] md:text-[18px]"><a href="/">About us</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Road map</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Creators</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Career</a></li>
                </ul>
                <ul>
                    <li className="footlink"><a href="/">Contact us</a></li>
                </ul>
            </div>
          </div>
            <div>
                <img src={Copyright} alt="copyright" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
