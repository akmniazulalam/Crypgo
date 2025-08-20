import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import group from "/src/assets/Group 78 (1).png";
import { Link } from "react-router-dom";

const PoweredBy = () => {
  return (
    <section className="py-[72px] bg-primary">
      <div className="max-w-[1200px] m-auto">
        <div className="p-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg relative">
          <div className="flex justify-between">
            <div className="">
              <h3 className="font-dmSans text-[40px] font-semibold text-white">
                Crypgo powered by framer platform
              </h3>
              <p className="pt-3 w-[480px] text-base font-dmSans text-white/60 leading-[140%]">
                Our landing page empower framer developers to have free, safer
                and more trustworthy experiences
              </p>
            </div>
            <Link to={"/"}>
              <button className="py-[13px] px-6 bg-btnC rounded-[12px] font-dmSans font-semibold text-base text-primary cursor-pointer flex items-center gap-x-2 mt-10 h-12">
                Get template <FaArrowRightLong />
              </button>
            </Link>
          </div>
          <img
            src={group}
            alt={"Group 78 (1).png"}
            className="absolute top-0 right-0 rounded-r-2xl bottom-0 object-cover h-full -z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
