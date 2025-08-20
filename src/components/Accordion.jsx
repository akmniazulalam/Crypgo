import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({accordionTitle}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        "py-4 px-6 rounded-2xl mb-5 bg-white/5 w-[992px] m-auto cursor-pointer"
      }
      onClick={toggleAccordion}>
      <div className="flex justify-between items-center">
        <p className={"font-dmSans font-medium text-[20px] text-white"}>{accordionTitle}</p>
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
        reprehenderit voluptate ut? Sequi delectus obcaecati provident
        reprehenderit ad rerum temporibus?
      </div>
    </div>
  );
};

export default Accordion;
