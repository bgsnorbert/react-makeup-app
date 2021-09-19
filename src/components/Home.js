import React from "react";
import MidBanner from "./Banners/MidBanner";
import Carousel from "./Carousel/Carousel";
import TopProducts from "./TopProducts/TopProducts";
import UniqueSelling from "./UniqueSelling/UniqueSelling";
import RecommendedProducts from "./RecommendedProducts";
import BottomDescription from "./BottomDescription";
import Benefits from "./Benefits/Benefits";

const Home = () => {
  return (
    <>
      <Carousel />
      <TopProducts />
      <MidBanner />
      <RecommendedProducts />
      <UniqueSelling />
      <BottomDescription />
      <Benefits />
    </>
  );
};

export default Home;
