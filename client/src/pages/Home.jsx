import React from "react";
import Hero from "../component/Hero";
import Timer from "../component/Timer";
import About from "../assets/img/About.svg";
import Image from "../component/Image";



// import { SparklesCore } from "../component/ui/sparkles";

const Home = () => {
  return (
    <div className=" bg-white flex flex-col items-center ">
      <Hero />
      <Timer />
      <div className="flex items-center justify-center w-full ">
        <img src={About} alt="" />
      </div>
     <Image/>
    </div>
  );
};

export default Home;
