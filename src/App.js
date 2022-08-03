import React from 'react'
import { Routes, Route } from "react-router-dom";

import Nav from './Routes/Nav/Nav';
import Home from './Routes/HomePage/Home';
import SupportPag from './Routes/SupportPag/SupportPag';
import FAQ from './Routes/FAQ/FAQ';

import Autorization from './Routes/Nav-login/Autorization';
import Login from './Routes/Nav-login/Login';
import NavLogin from './Routes/Nav-login/Nav-login'

import NavPanel from './Routes/user panel/Nav'
import Loans from './Routes/user panel/Loan';
import Panel from './Routes/user panel/Panel';
import Notifications from './Routes/user panel/Notifications';

import ALoans from './Routes/admin panel/aLoans'
import ANotifications from './Routes/admin panel/aNotifications'
import APanel from './Routes/admin panel/aPanel'
import AReports from './Routes/admin panel/aReports'

const App = () => {
return (
<div className='text-[#4D4D4D] '>
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

    <Route path='n-panel' element={<NavPanel/>}>
      <Route path='aPanel' element={<APanel/>}/>
      <Route path='aLoans' element={<ALoans/>}/>
      <Route path='aReports' element={<AReports/>}/>
      <Route path='aNotifications' element={<ANotifications/>}/>

      <Route path='Panel' element={<Panel/>}/>
      <Route path='Loans' element={<Loans/>}/>
      <Route path='Notifications' element={<Notifications/>}/>

    </Route>
  </Routes>
</div>
)}
export default App