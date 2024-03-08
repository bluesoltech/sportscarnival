import React from "react";
import logo from "../../assets/Mobile/Home/1.svg";
import second from "../../assets/Mobile/Home/2.svg";
import third from "../../assets/Mobile/Home/3.svg";
import Timer from "../../component/Timer";

import person1 from "../../assets/Mobile/Team/1.svg";
import person2 from "../../assets/Mobile/Team/2.svg";
import person3 from "../../assets/Mobile/Team/3.svg";
import bhim from "../../assets/Mobile/Team/bhim.svg";
import kk from "../../assets/Mobile/Team/kk.svg";
import prateek from "../../assets/Mobile/Team/prateek.svg";
import vk from "../../assets/Mobile/Team/vk.svg";

function TeamM() {
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
      <div className="flex flex-col gap-2">
        <h1 className="text-xl text-center">Our Team</h1>
        <div className="flex flex-col items-center p-5">
          <img src={bhim} alt="" />
          <p className="text-center text-xl uppercase">Bhimdevsinh Sagar</p>
          <p>Concept Creator</p>
        </div>
        <div className="flex flex-col items-center p-5">
          <img src={vk} alt="" />
          <p className="text-center text-xl uppercase">Vishnu kamaliya</p>
          <p>Concept Designer</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center p-5">
          <img src={prateek} alt="" />
          <p className="text-center text-lg uppercase">Prateek Chavda</p>
          <p className="text-center text-sm text-gray-500">Marketing Head</p>
        </div>
        <div className="flex flex-col items-center p-5">
          <img src={kk} alt="" />
          <p className="text-center text-lg uppercase">Krushnkant</p>
          <p className="text-center text-sm text-gray-500">Designer</p>
        </div>
        <div className="flex flex-col items-center p-5">
          <img src={person1} alt="" />
          <p className="text-center text-lg uppercase">Bina</p>
          <p className="text-center text-sm text-gray-500">
            Chief Instructor-Female
          </p>
        </div>
        <div className="flex flex-col items-center p-5">
          <img src={person2} alt="" />
          <p className="text-center text-lg uppercase">Sarita</p>
          <p className="text-center text-sm text-gray-500">
            Art & Craft Manager
          </p>
        </div>
        <div className="flex flex-col items-center p-5">
          <img src={person3} alt="" />
          <p className="text-center text-lg uppercase">Ramesh Alika</p>
          <p className="text-center text-sm text-gray-500">
            Chief Instructor-Male
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamM;
