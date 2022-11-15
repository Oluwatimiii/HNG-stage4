import React from "react";
import X from "../../assets/x.png";
import Arrow from "../../assets/arrow.png";
import Wconnect from "../../assets/wconnect.png";
import Mask from "../../assets/metamask.png";

const Modal = ({ closeModal }) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto fixed top-0 left-0 w-screen h-screen z-[1] bg-[#4040404D]">
        <div className="flex flex-col rounded-lg bg-white shadow-sm min-w-[290px] md:w-[40%] py-2">
          <div className="flex items-center justify-between p-2 px-4">
            <h1 className="text-[13px] md:text-[15px] font-bold text-xl md:text-2xl text-[#333333]">
              Connect Wallet
            </h1>
            <div onClick={() => closeModal(false)}>
              <img src={X} alt="cancel" />
            </div>
          </div>
          <hr className="text-[#F8F9FA]" />
          <div className="px-4 pt-2">
            <p className="text-[15px]">
              Choose your preferred wallet:
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-between p-4">
            <div
              onClick={() => closeModal(false)}
              className="flex items-center justify-between w-full rounded-md p-2 bg-[#F8F9FA] border-[1px] border-[#CFD8DC]"
            >
              <div className="flex items-center gap-2">
                <img src={Mask} alt="metamask" />
                <h2 className="font-semibold text-black text-[18px]">
                  Metamask
                </h2>
              </div>
              <div>
                <img src={Arrow} alt="arrow" />
              </div>
            </div>

            <div
              onClick={() => closeModal(false)}
              className="flex items-center justify-between w-full rounded-md p-2 bg-white border-[1px] border-[#CFD8DC]"
            >
              <div className="flex items-center gap-2">
                <img src={Wconnect} alt="metamask" />
                <h2 className="font-semibold text-black text-[18px]">
                  WalletConnect
                </h2>
              </div>
              <div>
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
