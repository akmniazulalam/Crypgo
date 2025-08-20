import React from "react";
import Banner from "../layouts/Banner";
import Platforms from "../layouts/Platforms";
import WhyChoose from "../layouts/WhyChoose";
import PoweredBy from "../layouts/PoweredBy";
import CryptoCurrency from "../layouts/CryptoCurrency";
import Questions from "../layouts/Questions";

const Home = () => {
  return (
    <>
      <Banner />
      <Platforms />
      <WhyChoose/>
      <PoweredBy/>
      <CryptoCurrency/>
      <Questions/>
    </>
  );
};

export default Home;
