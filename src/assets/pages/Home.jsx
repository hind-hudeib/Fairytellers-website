import React from "react";
import HeroSlider from "../pages/HeroSlider";
import Recommended from "../pages/Recommended";
import Partners from "../pages/Partners";
import { CarouselSlide } from "./CarouselSlide";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Recommended />
      <Partners />
    </>
  );
};

export default Home;
