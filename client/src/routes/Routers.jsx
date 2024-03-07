import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Team from "../pages/Team";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team"element={<Team/>}/>
    </Routes>
  );
};

export default Routers;
