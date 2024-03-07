import React from "react";
import Hero from "../component/Hero";
import Timer from "../component/Timer";
import About from "../assets/img/About.svg";

// import { SparklesCore } from "../component/ui/sparkles";

const Home = () => {
  return (
    <div className=" bg-white flex flex-col items-center ">
      <Hero />
      <Timer />
      <div className="flex items-center justify-center w-full ">
        <img src={About} alt="" />
      </div>
      <div className="h-screen bg-black w-full flex items-center justify-center">
        <h1 className="text-white text-3xl">All Events</h1>
      </div>
    </div>
  );
};

export default Home;
