import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Questions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);
  const [isOpenFive, setIsOpenFive] = useState(false);
  const [isOpenSix, setIsOpenSix] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordionTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };
  const toggleAccordionThree = () => {
    setIsOpenThree(!isOpenThree);
  };
  const toggleAccordionFour = () => {
    setIsOpenFour(!isOpenFour);
  };
  const toggleAccordionFive = () => {
    setIsOpenFive(!isOpenFive);
  };
  const toggleAccordionSix = () => {
    setIsOpenSix(!isOpenSix);
  };

  return (
    <section className={"py-[72px] bg-primary"}>
      <div className={"max-w-[1200px] m-auto"}>
        <div className={"text-center"}>
          <h6 className={"font-dmSans text-[18px] text-white"}>
            Popular <span className={"text-btnC"}>questions</span>
          </h6>
          <h3
            className={"font-dmSans font-semibold text-[40px] text-white py-2"}>
            Learn more about Crypgo
          </h3>
          <p className={"font-dmSans text-base text-white/60"}>
            We accept 100+ cryptocurrencies around the world
          </p>
          <div className={"mt-10"}>
            <div
              className={
                "py-4 px-6 rounded-2xl mb-5 bg-white/5 w-[992px] m-auto cursor-pointer"
              }
              onClick={toggleAccordion}>
              <div className="flex justify-between items-center">
                <p className={"font-dmSans font-medium text-[20px] text-white"}>
                  What is Crypgo?
                </p>
                {isOpen ? (
                  <FaMinus className={"text-[20px] text-btnC"} />
                ) : (
                  <FaPlus className={"text-[20px] text-btnC"} />
                )}
              </div>
              <div
                className={`text-base text-white/60 font-dmSans text-left transition-all duration-300 ${
                  isOpen ? "opacity-100 py-4 h-16" : "opacity-0 h-0 py-0"
                }`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente reprehenderit voluptate ut? Sequi delectus obcaecati
                provident reprehenderit ad rerum temporibus?
              </div>
            </div>
            <div
              className={
                "py-4 px-6 rounded-2xl mb-5 bg-white/5 w-[992px] m-auto cursor-pointer"
              }
              onClick={toggleAccordionTwo}>
              <div className="flex justify-between items-center">
                <p className={"font-dmSans font-medium text-[20px] text-white"}>
                  Is Crypgo available worldwide?
                </p>
                {isOpenTwo ? (
                  <FaMinus className={"text-[20px] text-btnC"} />
                ) : (
                  <FaPlus className={"text-[20px] text-btnC"} />
                )}
              </div>
              <div
                className={`text-base text-white/60 font-dmSans text-left transition-all duration-300 ${
                  isOpenTwo ? "opacity-100 py-4 h-16" : "opacity-0 h-0 py-0"
                }`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente reprehenderit voluptate ut? Sequi delectus obcaecati
                provident reprehenderit ad rerum temporibus?
              </div>
            </div>
            <div
              className={
                "py-4 px-6 rounded-2xl mb-5 bg-white/5 w-[992px] m-auto cursor-pointer"
              }
              onClick={toggleAccordionThree}>
              <div className="flex justify-between items-center">
                <p className={"font-dmSans font-medium text-[20px] text-white"}>
                  Which cryptocurrencies are supported on Crypgo?
                </p>
                {isOpenThree ? (
                  <FaMinus className={"text-[20px] text-btnC"} />
                ) : (
                  <FaPlus className={"text-[20px] text-btnC"} />
                )}
              </div>
              <div
                className={`text-base text-white/60 font-dmSans text-left transition-all duration-300 ${
                  isOpenThree ? "opacity-100 py-4 h-16" : "opacity-0 h-0 py-0"
                }`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente reprehenderit voluptate ut? Sequi delectus obcaecati
                provident reprehenderit ad rerum temporibus?
              </div>
            </div>
            <div
              className={
                "py-4 px-6 rounded-2xl mb-5 bg-white/5 w-[992px] m-auto cursor-pointer"
              }
              onClick={toggleAccordionFour}>
              <div className="flex justify-between items-center">
                <p className={"font-dmSans font-medium text-[20px] text-white"}>
                  Is my personal information secure with Crypgo?
                </p>
                {isOpenFour ? (
                  <FaMinus className={"text-[20px] text-btnC"} />
                ) : (
                  <FaPlus className={"text-[20px] text-btnC"} />
                )}
              </div>
              <div
                className={`text-base text-white/60 font-dmSans text-left transition-all duration-300 ${
                  isOpenFour ? "opacity-100 py-4 h-16" : "opacity-0 h-0 py-0"
                }`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente reprehenderit voluptate ut? Sequi delectus obcaecati
                provident reprehenderit ad rerum temporibus?
              </div>
            </div>
            <div
              className={
                "py-4 px-6 rounded-2xl mb-5 bg-white/5 w-[992px] m-auto cursor-pointer"
              }
              onClick={toggleAccordionFive}>
              <div className="flex justify-between items-center">
                <p className={"font-dmSans font-medium text-[20px] text-white"}>
                  Are there any deposit or withdrawal fees?
                </p>
                {isOpenFive ? (
                  <FaMinus className={"text-[20px] text-btnC"} />
                ) : (
                  <FaPlus className={"text-[20px] text-btnC"} />
                )}
              </div>
              <div
                className={`text-base text-white/60 font-dmSans text-left transition-all duration-300 ${
                  isOpenFive ? "opacity-100 py-4 h-16" : "opacity-0 h-0 py-0"
                }`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente reprehenderit voluptate ut? Sequi delectus obcaecati
                provident reprehenderit ad rerum temporibus?
              </div>
            </div>
            <div
              className={
                "py-4 px-6 rounded-2xl mb-5 bg-white/5 w-[992px] m-auto cursor-pointer"
              }
              onClick={toggleAccordionSix}>
              <div className="flex justify-between items-center">
                <p className={"font-dmSans font-medium text-[20px] text-white"}>
                  Does Crypgo offer advanced trading tools?
                </p>
                {isOpenSix ? (
                  <FaMinus className={"text-[20px] text-btnC"} />
                ) : (
                  <FaPlus className={"text-[20px] text-btnC"} />
                )}
              </div>
              <div
                className={`text-base text-white/60 font-dmSans text-left transition-all duration-300 ${
                  isOpenSix ? "opacity-100 py-4 h-16" : "opacity-0 h-0 py-0"
                }`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente reprehenderit voluptate ut? Sequi delectus obcaecati
                provident reprehenderit ad rerum temporibus?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
