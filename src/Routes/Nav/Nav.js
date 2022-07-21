import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Logo from '../../img/logo.png'
import Home from '../../img/home.png'
import Support from '../../img/Support.png'
import instagram from '../../img/instagram.png'
import FAQ from '../../img/FAQ.png'


const Nav = () => {

return (
<div className='' dir='rtl'>
  <nav className="flex justify-between m-4 ">
    <div className="flex right-0">
      <Link to={'/Home'}>
        <img className='nav-but' src={Logo} alt="Logo-vamion" /> 
      </Link>

      <Link to={'/Home'}>
        <img className="nav-but" src={Home} alt=''/>
      </Link>

      <Link to={'/SupportPag'}>
        <img className="nav-but" src={Support} alt=''/>
      </Link>
      <Link to={'/FAQ'}>
        <img className="nav-but" src={FAQ} alt=''/>
      </Link>

    </div>
    <div className="flex ml-4">
      <img className="nav-but" src={instagram} alt=''/>
      <Link to={'/n-l/login'}>
        <button className='bg-[#00693B] px-4 mt-2 font-bold text-[12px] h-8 text-white rounded-[20px] '>ورود به وامیون</button>
      </Link>
    </div>
  </nav>

  <div className='text-[#4D4D4D]'>
    <Outlet/>
  </div>
  
</div>
)}
export default Nav