import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import backgroundImage from "../assets/home-image.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title=" You got the travel plans, we got the travel vans."
        paragraph="Add adventure to your life by joining the #vanlife movement.Rent the perfect van to make your perfect road trip"
        backgroundImage={backgroundImage}
        buttonProp=" Find Your Van"
        containerHeight='100%'
      />
      <Footer />
    </>
  );
};

export default Home;
