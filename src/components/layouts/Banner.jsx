import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerImg from "/src/assets/Frame 204 (1).png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-primary pt-[72px]">
      <div className="max-w-[1200px] m-auto">
        <div className="flex justify-between">
          <div className="w-[588px]">
            <button className="py-1.5 px-4 bg-btnC/10 text-base font-dmSans font-medium text-btnC rounded-full cursor-pointer">
              Future of crypto trading
            </button>
            <h1 className="font-dmSans font-medium text-7xl text-white leading-[120%] py-3">
              Fast and Secure Cryptocurrency Exchange
            </h1>
            <p className="font-dmSans text-base text-white/80 leading-[140%] w-[80%]">
              Trade cryptocurrencies with ease, security, and advanced features
              on our cutting-edge platform.
            </p>
            <Link to={"/"}>
              <button className="py-[13px] px-6 bg-btnC rounded-[12px] font-dmSans font-semibold text-base text-primary cursor-pointer flex items-center gap-x-2 mt-10">
                Explore more <FaArrowRightLong />
              </button>
            </Link>
          </div>
          <div className="relative">
            <img src={bannerImg} alt={"Frame 204 (1).png"} />
            <div className="absolute top-3 left-2">
              <svg
                width="135"
                height="135"
                viewBox="0 0 250 250"
                className="animate-spin-slow">
                <defs>
                  <path
                    id="circlePath"
                    d="
        M 125, 125
        m -100, 0
        a 100,100 0 1,1 200,0
        a 100,100 0 1,1 -200,0
      "
                  />
                </defs>

                {/* Rotating text */}
                <text className="font-medium text-[15px] font-dmMono fill-white tracking-[1.75px]">
                  <textPath
                    href="#circlePath"
                    startOffset="50%"
                    textAnchor="middle">
                    JOIN CRYPTO TRENDS EXPLORE • JOIN CRYPTO TRENDS EXPLORE •
                  </textPath>
                </text>

                {/* Center icon */}
                <svg
                  x={72} // center x - half width
                  y={82} // center y - half height
                  width="100"
                  height="100"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_133)">
                    <path
                      d="M5.87524 16.0797C10.2189 16.0797 18.2549 14.7543 18.5614 2.72102C18.5573 2.47155 18.5606 2.23175 18.5704 2.00332C18.5704 2.24669 18.5673 2.4859 18.5614 2.72102C18.6384 7.48664 21.3781 15.7802 32.1512 15.7802C27.9523 15.9739 19.6815 18.9462 19.1843 29.1762C19.1887 29.5204 19.1802 29.8484 19.1609 30.1562C19.1609 29.8223 19.1688 29.4957 19.1843 29.1762C19.1226 24.2732 16.4686 16.0797 5.87524 16.0797Z"
                      fill="url(#paint0_linear_1_133)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_133"
                      x="0.870317"
                      y="0.752087"
                      width="36.2859"
                      height="38.1627"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3.7537" />
                      <feGaussianBlur stdDeviation="2.50246" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_133"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_133"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_133"
                      x1="10.2546"
                      y1="8.25951"
                      x2="21.8285"
                      y2="21.3975"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="0.396817" stopColor="#EAEAEA" />
                      <stop offset="1" stopColor="#5F5F5F" />
                    </linearGradient>
                  </defs>
                </svg>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
