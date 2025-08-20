import React from "react";
import logo from "/src/assets/Frame 13.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import frame205 from "/src/assets/Frame 205.png"
import frame27 from "/src/assets/Frame 27.png"

const Footer = () => {
  return (
    <>
    <section className={"pt-[80px] bg-primary"}>
      <div className={"max-w-[1200px] m-auto border-b border-white/20 pb-[80px]"}>
        <div className={"flex justify-between"}>
          <div>
            <Link to={"/"}>
              <img src={logo} alt={"Frame 13.png"} />
            </Link>
            <p className={"py-6 font-dmSans text-base text-white/60"}>
              Transform your crypto business with Crypgo <br />
              Framer, a template for startups and blockchain services.
            </p>
            <div className={"flex items-center gap-x-2"}>
              <Link to={"https://www.instagram.com"}>
                <div
                  className={
                    "h-[38px] w-[38px] rounded-full bg-white/10 flex justify-center items-center"
                  }>
                  <FaInstagram className={"text-white text-[20px]"} />
                </div>
              </Link>
              <Link to={"https://www.facebook.com"}>
                <div
                  className={
                    "h-[38px] w-[38px] rounded-full bg-white/10 flex justify-center items-center"
                  }>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.08331 10.371C2.08331 6.63906 2.08331 4.77309 3.24268 3.61371C4.40205 2.45435 6.26803 2.45435 9.99998 2.45435C13.7319 2.45435 15.5979 2.45435 16.7573 3.61371C17.9166 4.77309 17.9166 6.63906 17.9166 10.371C17.9166 14.1029 17.9166 15.9689 16.7573 17.1283C15.5979 18.2877 13.7319 18.2877 9.99998 18.2877C6.26803 18.2877 4.40205 18.2877 3.24268 17.1283C2.08331 15.9689 2.08331 14.1029 2.08331 10.371Z"
                      stroke="white"
                      stroke-width="1.25"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.1054 7.05981H11.6513C10.7815 7.05981 10.0745 7.76156 10.0681 8.63141L9.99701 18.2268M8.40167 12.0393H12.4039"
                      stroke="white"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
              <Link to={"https://www.twitter.com"}>
                <div
                  className={
                    "h-[38px] w-[38px] rounded-full bg-white/10 flex justify-center items-center"
                  }>
                  <FaXTwitter className={"text-white text-[20px]"} />
                </div>
              </Link>
            </div>
          </div>
          <div className={"flex gap-x-[80px]"}>
            <div>
              <h5
                className={
                  "font-dmSans font-medium text-[18px] text-white pb-3"
                }>
                Links
              </h5>
              <ul>
                <Link to={"/"}>
                  <li className={"mb-2 font-dmSans text-base text-white/60"}>
                    Features
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className={"mb-2 font-dmSans text-base text-white/60"}>
                    Benefits
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className={"mb-2 font-dmSans text-base text-white/60"}>
                    Services
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className={"mb-2 font-dmSans text-base text-white/60"}>
                    Why Crypgo
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className={"mb-2 font-dmSans text-base text-white/60"}>
                    FAQs
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <h5
                className={
                  "font-dmSans font-medium text-[18px] text-white pb-3"
                }>
                Other Pages
              </h5>
              <ul>
                <Link to={"/"}>
                  <li className={"mb-2 font-dmSans text-base text-white/60"}>
                    Error 404
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className={"mb-2 font-dmSans text-base text-white/60"}>
                    Terms & Conditions
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className={"mb-2 font-dmSans text-base text-white/60"}>
                    Privacy Policy{" "}
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <h5
                className={
                  "font-dmSans font-medium text-[18px] text-white pb-4"
                }>
                Download app
              </h5>
              <Link to={"/"}>
              <div className={"p-3 rounded-[6.77px] bg-white/10 flex gap-x-2.5 mb-4"}>
                <svg
                  width="23"
                  height="25"
                  viewBox="0 0 23 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_ii_1_1074)">
                    <path
                      d="M1.25199 1.27156C0.981138 1.55824 0.821045 2.00314 0.821045 2.57929V23.1642C0.821045 23.7413 0.981138 24.1852 1.25199 24.4719L1.32087 24.5389L12.8522 13.0076V12.8717V12.7358L1.32087 1.20361L1.25199 1.27156Z"
                      fill="url(#paint0_linear_1_1074)"
                    />
                    <path
                      d="M16.6953 16.8527L12.8522 13.0077V12.8718V12.7359L16.6962 8.89185L16.7828 8.94118L21.3371 11.5287C22.6373 12.2677 22.6373 13.4768 21.3371 14.2168L16.7828 16.8043L16.6953 16.8527Z"
                      fill="url(#paint1_linear_1_1074)"
                    />
                    <g filter="url(#filter1_i_1_1074)">
                      <path
                        d="M16.7828 16.8034L12.8512 12.8718L1.25195 24.472C1.68011 24.9262 2.38842 24.9821 3.18609 24.5297L16.7828 16.8034Z"
                        fill="url(#paint2_linear_1_1074)"
                      />
                    </g>
                    <path
                      d="M16.7828 8.94029L3.18609 1.21491C2.38842 0.761623 1.68011 0.818401 1.25195 1.27262L12.8521 12.8728L16.7828 8.94029Z"
                      fill="url(#paint3_linear_1_1074)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_ii_1_1074"
                      x="0.821045"
                      y="0.9021"
                      width="21.4912"
                      height="23.9399"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-0.126923" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_1_1074"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.126923" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_1_1074"
                        result="effect2_innerShadow_1_1074"
                      />
                    </filter>
                    <filter
                      id="filter1_i_1_1074"
                      x="1.25195"
                      y="12.8718"
                      width="15.5308"
                      height="11.9702"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-0.126923" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_1_1074"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_1074"
                      x1="11.83"
                      y1="2.36149"
                      x2="-3.79017"
                      y2="17.9817"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00A0FF" />
                      <stop offset="0.0066" stop-color="#00A1FF" />
                      <stop offset="0.2601" stop-color="#00BEFF" />
                      <stop offset="0.5122" stop-color="#00D2FF" />
                      <stop offset="0.7604" stop-color="#00DFFF" />
                      <stop offset="1" stop-color="#00E3FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_1074"
                      x1="23.0297"
                      y1="12.8718"
                      x2="0.508871"
                      y2="12.8718"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFE000" />
                      <stop offset="0.4087" stop-color="#FFBD00" />
                      <stop offset="0.7754" stop-color="#FFA500" />
                      <stop offset="1" stop-color="#FF9C00" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_1074"
                      x1="14.6477"
                      y1="15.0069"
                      x2="-6.53523"
                      y2="36.1898"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FF3A44" />
                      <stop offset="1" stop-color="#C31162" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_1_1074"
                      x1="-1.66936"
                      y1="-5.57989"
                      x2="7.7894"
                      y2="3.87886"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#32A071" />
                      <stop offset="0.0685" stop-color="#2DA771" />
                      <stop offset="0.4762" stop-color="#15CF74" />
                      <stop offset="0.8009" stop-color="#06E775" />
                      <stop offset="1" stop-color="#00F076" />
                    </linearGradient>
                  </defs>
                </svg>
                <img src={frame205} />
              </div>
              </Link>
              <Link to={"/"}>
              <img src={frame27} className={"w-[137px]"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className={"pt-8 pb-10 bg-primary text-center"}>
      <p className={"font-dmSans text-sm text-white/40"}>Copyright ©2025 Crypgo. All rights reserved</p>
    </div>
    </>
  );
};

export default Footer;
