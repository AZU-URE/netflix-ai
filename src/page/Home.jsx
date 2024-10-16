import React from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import { netflixBg } from "../constants/constant";

function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-black via-white to-black relative">
      <Header />
      <div className="h-full w-full opacity-70 absolute bg-gradient-to-b from-black via-black to-black"></div>
      <div className="flex flex-col items-center justify-center absolute w-full h-full ">
        <h1 className="font-sans font-black text-[3.5rem] text-white text-center">
          Unlimited movies,
          <br /> TV shows and more
        </h1>
        <Link to={"/login"}>
          <button className="bg-netflixRed hover:bg-opacity-80 rounded-md py-[0.5rem] px-[3rem] text-white m-[2rem] font-sans font-medium text-lg">
            Get Started
          </button>
        </Link>
      </div>
      <img
        src={netflixBg}
        alt="background"
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default Home;
