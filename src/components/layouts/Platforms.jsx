import React from "react";
import logoOne from "/src/assets/Frame.png";
import logoTwo from "/src/assets/logo-55.png";
import logoThree from "/src/assets/logo-51.png";
import logoFour from "/src/assets/logo-7.png";
import logoFive from "/src/assets/logo-28.png";
import Slider from "react-slick";

const Platforms = () => {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <section className="bg-primary py-[72px]">
      <div className="max-w-[1200px] m-auto">
        <div className="text-center">
          <h3 className="font-dmSans text-[18px] text-white pb-10">
            Trusted by top <span className="text-btnC">crypto platforms</span>
          </h3>
          <div className="mx-[90px]">
            <Slider {...settings}>
            <div className="px-9">
              <img src={logoOne} alt={"Frame.png"} className="h-8 cursor-pointer" />
            </div>
            <div className="px-9">
              <img src={logoTwo} alt={"logo-55.png"} className="cursor-pointer" />
            </div>
            <div className="px-9">
              <img src={logoThree} alt={"logo-51.png"} className="cursor-pointer" />
            </div>
            <div className="px-9">
              <img src={logoFour} alt={"logo-7.png"} className="cursor-pointer" />
            </div>
            <div className="px-9">
              <img src={logoFive} alt={"logo-28.png"} className="cursor-pointer" />
            </div>
            <div className="px-9">
              <img src={logoThree} alt={"logo-51.png"} className="cursor-pointer" />
            </div>
          </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
