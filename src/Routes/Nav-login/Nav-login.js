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
    </div>
  </nav>
  
  <div className='min-h-[75vh] text-[#4D4D4D]'>
    <Outlet/>
  </div>

  <footer className='flex justify-between text-xs my-6 '>
    <div className="flex">
      <div className="mx-14">حریم خصوصی</div>
      <div className="">شرایط و ضوابط</div>
    </div>
    <div className="ml-14">تمامی حق و حقوق این وب سایت محفوظ می باشد</div>
  </footer>
</div>
)}
export default Nav