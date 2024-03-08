import React from "react";
import logo from "../../assets/Mobile/Home/1.svg";
import second from "../../assets/Mobile/Home/2.svg";
import third from "../../assets/Mobile/Home/3.svg";
import fourth from "../../assets/Mobile/Home/4.svg";
import Timer from "../../component/Timer";

function HomeM() {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className="">
        <img src={second} alt="" />
      </div>
      <div className="">
        <img src={third} alt="" />
      </div>
      <div className="">
        <Timer />
      </div>
      <div className=" p-2">
        <img src={fourth} alt="" />
      </div>
      <div className="bg-black w-full h-screen text-white">All Event</div>
    </div>
  );
}

export default HomeM;
