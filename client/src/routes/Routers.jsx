import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Team from "../pages/Team";
import Art from "../pages/Art";
import Adventure from "../pages/Adventure";
import Exhibitor from "../pages/Exhibitor";
import Volunteer from "../pages/Volunteer";
import Contact from "../pages/Contact";

import HomeM from "../pages/Mobile/HomeM";
import TeamM from "../pages/Mobile/TeamM";
import ArtM from "../pages/Mobile/ArtM";
import AdventureM from "../pages/Mobile/AdventureM";
import ExhibitorM from "../pages/Mobile/ExhibitorM";
import VolunteerM from "../pages/Mobile/VolunteerM";
import ContactM from "../pages/Mobile/ContactM";

const Routers = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <Routes>
      <Route path="/" element={isMobile ? <HomeM /> : <Home />} />
      <Route path="/team" element={isMobile ? <TeamM /> : <Team />} />
      <Route path="/activity/art" element={<Art />} />
      <Route
        path="/activity/adventure"
        element={<Adventure />}
      />
      <Route
        path="/exhibitor"
        element={<Exhibitor />}
      />
      <Route
        path="/volunteer"
        element={<Volunteer />}
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
