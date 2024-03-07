import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Art from "../pages/Art";
import Adventure from "../pages/Adventure";
import Exhibitor from "../pages/Exhibitor";
import Volunteer from "../pages/Volunteer";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/activity/art" element={<Art />} />
      <Route path="/activity/adventure" element={<Adventure />} />
      <Route path="/exhibitor" element={<Exhibitor />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
