import React from "react";
import crypto from "/src/assets/Group 86.png";
import bitcoin from "/src/assets/Group 83.png";
import all from "/src/assets/All.png";
import avalanche from "/src/assets/avalanche-avax-logo 1.png";
import frame45 from "/src/assets/Frame 45.png";
import frame3 from "/src/assets/Frame 51 (3).png";
import frame4 from "/src/assets/Frame 51 (4).png";
import frame5 from "/src/assets/Frame 51 (5).png";
import { FaArrowRightLong } from "react-icons/fa6";

const CryptoCurrency = () => {
  return (
    <section className=" bg-primary">
      <div className="max-w-[1200px] m-auto">
        <div className="flex justify-between items-center">
          <div className="relative">
            <img src={crypto} alt={"Group 86.png"}  />
            <div className="py-[42px] px-[21px] w-[194px] bg-white/5 border border-white/10 rounded-[14px] backdrop-blur-xl text-center absolute top-[222px] left-[135px]">
              <h6 className="font-dmSans font-semibold text-[21px] text-white pb-[7px]">
                Ethereum
              </h6>
              <p className="font-dmSans text-sm text-white uppercase pb-[21px]">
                Eth <span className="text-white/60">usd</span>
              </p>
              <p className="font-dmSans text-[28px] text-white leading-[120%] font-semibold pb-[5px]">
                ******
              </p>
              <p className="font-dmSans text-[12.35px] text-btnC font-medium">
                5.23% (***)
              </p>
              <div className="h-[63.51px] w-[63.51px] bg-[#627EEA]/40 rounded-full p-[11px] absolute -top-8 left-1/2 -translate-x-1/2">
                <img src={all} alt={"All.png"} />
              </div>
              <div className="h-[42.34px] w-[42.34px] bg-white rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2">
                <FaArrowRightLong />
              </div>
            </div>
            <div className="py-[42px] px-[21px] w-[194px] bg-white/5 border border-white/10 rounded-[14px] backdrop-blur-xl text-center absolute bottom-[200px] right-[100px]">
              <h6 className="font-dmSans font-semibold text-[21px] text-white pb-[7px]">
                Bitcoin
              </h6>
              <p className="font-dmSans text-sm text-white uppercase pb-[21px]">
                btc <span className="text-white/60">usd</span>
              </p>
              <p className="font-dmSans text-[28px] text-white leading-[120%] font-semibold pb-[5px]">
                ******
              </p>
              <p className="font-dmSans text-[12.35px] text-btnC font-medium">
                7.68% (***)
              </p>
              <div className="h-[63.51px] w-[63.51px] bg-[#F49B33]/40 rounded-full p-[11px] absolute -top-8 left-1/2 -translate-x-1/2">
                <img src={bitcoin} alt={"Group 83.png"} />
              </div>
              <div className="h-[42.34px] w-[42.34px] bg-white rounded-full flex justify-center items-center cursor-pointer absolute -bottom-5 left-1/2 -translate-x-1/2">
                <FaArrowRightLong />
              </div>
            </div>
            <div className="h-[105.84px] w-[105.84px] p-[21px] rounded-[14px] bg-[#E84142]/20 border border-[#E84142]/20 backdrop-blur-[2px] absolute top-[180px] right-[188px]">
              <img src={avalanche} className={"h-full w-full object-cover"} />
            </div>
            <div className="h-[105.84px] w-[105.84px] p-[21px] rounded-[14px] bg-[#E6007A]/20 border border-[#E6007A]/20 backdrop-blur-[2px] absolute bottom-[170px] left-[225px]">
              <img src={frame45} className={"h-full w-full object-cover"} />
            </div>
          </div>
          <div className={"w-[550px] pl-8"}>
            <p className={"font-dmSans text-[18px] text-white"}>
              Crypto landing page <span className={"text-btnC"}>template</span>
            </p>
            <h3
              className={
                "font-dmSans text-[40px] text-white font-semibold py-3 leading-[120%]"
              }>
              Create your cryptocurrency portfolio today
            </h3>
            <p className={"font-dmSans text-base text-white/60 leading-[140%] w-[85%]"}>
              Coinbase has a variety of features that make it the best place to
              start trading.
            </p>
            <div className="mt-10">
                <div className={"flex items-center gap-x-4 pb-5 border-b border-white/10"}>
                    <img src={frame3} />
                    <p className={"font-dmSans font-medium text-[20px] text-white"}>Manage your portfolio</p>
                </div>
                <div className={"flex items-center gap-x-4 py-5 border-b border-white/10"}>
                    <img src={frame4} />
                    <p className={"font-dmSans font-medium text-[20px] text-white"}>Vault protection</p>
                </div>
                <div className={"flex items-center gap-x-4 py-5"}>
                    <img src={frame5} />
                    <p className={"font-dmSans font-medium text-[20px] text-white"}>Mobile apps</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoCurrency;
