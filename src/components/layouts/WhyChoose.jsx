import React from "react";
import frame51 from "/src/assets/Frame 51.png";
import frame52 from "/src/assets/Frame 51 (1).png";
import frame53 from "/src/assets/Frame 51 (2).png";
import frame66 from "/src/assets/Frame 66.png";
import bitcoin from "/src/assets/Group 83.png";
import all from "/src/assets/All.png";
import litcoin from "/src/assets/Litecoin Icon 1.png";
import frame45 from "/src/assets/Frame 45.png";
import { FaArrowUpLong } from "react-icons/fa6";

const WhyChoose = () => {
  return (
    <section className="bg-primary py-[72px]">
      <div className="max-w-[1200px] m-auto">
        <div className="flex gap-x-6 relative">
          <div className="w-[588px]">
            <h4 className="font-dmSans text-[18px] text-white">
              Why choose <span className="text-btnC">crypgo</span>
            </h4>
            <h2 className="font-dmSans font-semibold text-[40px] text-white pb-10 leading-[120%] pt-3">
              Features of the crypto framer mobile application
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-0 gap-y-12 w-[510px]">
              <div className="flex gap-x-4 w-[210px]">
                <img
                  src={frame51}
                  alt={"Frame 51.png"}
                  className="h-10 w-10 object-cover"
                />
                <p className="font-dmSans font-medium text-base text-white leading-[140%]">
                  Designed for crypto trading platforms
                </p>
              </div>
              <div className="flex gap-x-4 w-[219px]">
                <img
                  src={frame52}
                  alt={"Frame 51 (1).png"}
                  className="h-10 w-10 object-cover"
                />
                <p className="font-dmSans font-medium text-base text-white leading-[140%]">
                  Kickstart your crypto website today
                </p>
              </div>
              <div className="flex gap-x-4 w-[239px]">
                <img
                  src={frame53}
                  alt={"Frame 51 (2).png"}
                  className="h-10 w-10 object-cover"
                />
                <p className="font-dmSans font-medium text-base text-white leading-[140%]">
                  Launch your blockchain platform today
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={frame66}
              alt={"Frame 66.png"}
              className="absolute top-0 right-0"
            />
            <div className="w-[371px] p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg mt-3 ml-[105px]">
              <h5 className="font-dmSans font-medium text-[20px] text-white pb-8">
                Your portfolio is up <span className="text-btnC">2.31%</span>
              </h5>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <img src={bitcoin} alt={"Group 83.png"} />
                  <div className="">
                    <h6 className="font-dmSans pb-0.5 text-white font-semibold text-base leading-[140%]">
                      Bitcoin
                    </h6>
                    <p className="font-dmSans text-white/80 text-sm leading-[140%]">
                      BTC/USD
                    </p>
                  </div>
                </div>
                <p className="font-dmSans font-medium text-base text-btnC flex items-center gap-x-1.5">
                  1.05%
                  <FaArrowUpLong className="text-[16px]" />
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-x-4">
                  <img src={all} alt={"All.png"} />
                  <div className="">
                    <h6 className="font-dmSans pb-0.5 text-white font-semibold text-base leading-[140%]">
                      Ethereum
                    </h6>
                    <p className="font-dmSans text-white/80 text-sm leading-[140%]">
                      BTC/USD
                    </p>
                  </div>
                </div>
                <p className="font-dmSans font-medium text-base text-btnC flex items-center gap-x-1.5">
                  1.05%
                  <FaArrowUpLong className="text-[16px]" />
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-x-4">
                  <img src={litcoin} alt={"Litecoin Icon 1.png"} />
                  <div className="">
                    <h6 className="font-dmSans pb-0.5 text-white font-semibold text-base leading-[140%]">
                      Litecoin
                    </h6>
                    <p className="font-dmSans text-white/80 text-sm leading-[140%]">
                      BTC/USD
                    </p>
                  </div>
                </div>
                <p className="font-dmSans font-medium text-base text-btnC flex items-center gap-x-1.5">
                  1.05%
                  <FaArrowUpLong className="text-[16px]" />
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-x-4">
                  <img src={frame45} alt={"Frame 45.png"} />
                  <div className="">
                    <h6 className="font-dmSans pb-0.5 text-white font-semibold text-base leading-[140%]">
                      Polkadot
                    </h6>
                    <p className="font-dmSans text-white/80 text-sm leading-[140%]">
                      BTC/USD
                    </p>
                  </div>
                </div>
                <p className="font-dmSans font-medium text-base text-btnC flex items-center gap-x-1.5">
                  1.05%
                  <FaArrowUpLong className="text-[16px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
