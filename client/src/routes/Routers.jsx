import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Upcoming_activites from '../pages/Upcoming_activites';
import Team from '../pages/Team';


const Routers = () => {
  return (
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/upcoming_activites"element={<Upcoming_activites/>}/>
    <Route path="/team"element={<Team/>}/>

</Routes>
  )
}

export default Routers