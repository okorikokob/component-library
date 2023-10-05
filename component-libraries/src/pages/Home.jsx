import React from "react";

import HeroSection from "../components/HeroSection";

import backgroundImage from "../assets/home-image.png";

const Home = () => {
  return (
    <>
     
      <HeroSection
        title=" You got the travel plans, we got the travel vans."
        paragraph="Add adventure to your life by joining the #vanlife movement.Rent the perfect van to make your perfect road trip"
        backgroundImage={backgroundImage}
        buttonProp=" Find Your Van"
        containerHeight='100%'
      />
   
    </>
  );
};

export default Home;
