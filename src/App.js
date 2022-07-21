import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Routes/HomePage/Home';
import Autorization from './Routes/Nav-login/Autorization';
import Login from './Routes/Nav-login/Login';
import Nav from './Routes/Nav/Nav';
import NavLogin from './Routes/Nav-login/Nav-login'
import SupportPag from './Routes/SupportPag/SupportPag';
import FAQ from './Routes/FAQ/FAQ';


const App = () => {
return (
<>
  <Routes>
    <Route path='/' element={<Nav/>} >
      <Route path="Home" element={<Home />} />
      <Route path='SupportPag' element={<SupportPag/>} />
      <Route path='FAQ' element={<FAQ/>} />

    </Route>

    <Route path='/n-l' element={<NavLogin/>} >
      <Route path='login' element={<Login/>} />
      <Route path='Autorization' element={<Autorization/>} />

    </Route>
  </Routes>
</>
)}
export default App