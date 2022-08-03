import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import iconVersion from '../../img/nav-panel/Version.png'
import iconLoans from '../../img/nav-panel/Loans.png'
import iconDashboard from '../../img/nav-panel/Dashboard.png'
import iconLogOut from '../../img/nav-panel/Log Out.png'
import iconNotifications from '../../img/nav-panel/Notifications.png'
import iconUser from '../../img/nav-panel/User.png'
import iconSearch from '../../img/nav-panel/fluent_search-16-filled.png'
import iconCalendar from '../../img/nav-panel/fluent_calendar-ltr-16-filled.png'
import iconReports from '../../img/nav-panel/Reports.png'
import iconperson from '../../img/nav-panel/fluent_share-screen-person-16-filled.png'
import iconbox from '../../img/nav-panel/Box.png'
import iconbank from '../../img/nav-panel/fluent_building-bank-16-filled.png'

import iconGroup from '../../img/modals/Group.png'
import iconpersonG from '../../img/modals/fluent_person-16-filled.png'
import iconphone from '../../img/modals/fluent_phone-16-filled.png'
import iconscreen from '../../img/modals/fluent_share-screen-person-16-filled.png'
import iconmail from '../../img/modals/fluent_mail-16-filled.png'
import userimg from '../../img/nav-panel/Mask.png'
import Logo from '../../img/logo.png'
import { useSelector } from 'react-redux'

const Nav = () => {
  const [search, setsearch] = useState('')
  const [showProfile,setshowProfile] = useState(false)
  const [select,setselect] = useState(1)
  const usernum = useSelector((state) => state.user.phoneNumber)


return (
<>
<div dir='rtl' className='flex justify-between relative '>
  <nav className='shadow-lg p-6 min-h-[100vh] w-32 '>
    <div className='fixed top-4 right-6'>
      <Link to='/Home'><img className='w-20 my-4' src={Logo}/></Link>
      {
        usernum === '09128458202' ?
        <div>
          <Link to={'aPanel'}>
            <img className='nav' src={iconDashboard} alt="" />
          </Link>
          <Link to={'aLoans'}>
            <img className='nav' src={iconLoans} alt="" />
          </Link>
          <Link to={'aReports'}>
            <img className='nav' src={iconReports} alt="" />
          </Link>
          <Link to={'aNotifications'}>
            <img className='nav' src={iconNotifications} alt="" />
          </Link>
        </div>
        :
        <div>
          <Link to={'Panel'}>
            <img className='nav -mr-1' src={iconbox} alt="" />
          </Link>
          <Link to={'Loans'}>
            <img className='nav' src={iconLoans} alt="" />
          </Link>
          <Link to={'Notifications'}>
            <img className='nav' src={iconNotifications} alt="" />
          </Link>
        </div>
      }
    </div>
    <div className='fixed right-6 bottom-5'>
    <Link to={'/Home'}>
      <img className='my-4' src={iconLogOut} alt="" />
    </Link>
    <img className='' src={iconVersion} alt="" />
    </div>
  </nav>

  <div className='w-[90vw] px-6 '>
    <div className='flex justify-between py-2'>
      {
        usernum === '09128458202' ?
        <div className=''>
          <img className='inline-block mt-4' src={iconperson} alt="" />
          <h2 className='inline-block text-[#4D4D4D] '>پنل کاربری</h2>
        </div>
        :
        <div className="mt-1 text-xs font-bold">
          <div className='inline-block'>
            <img className='img w-[21px]' src={iconbank} alt="" />
            <h2 className='inline-block text-[#4D4D4D] text-[13px] '>صندوق همکاران شرکت</h2>
          </div>
          <div className="inline-block m-0 mx-6 card2 text-[#006FB8]">
            <p className="inline-block">سهم شما در صندوق</p>
            <p className="inline-block mr-6">3 سهم</p>
          </div>
        </div>
      }
      <div className='flex text-xs '>
        <img className='w-3 h-3 m-1.5 mt-4' src={iconCalendar} alt="" />
        <p className='text-[#026F61] ml-10 mt-3.5 '>امروز</p>
        <div className='text-[#026F61] mt-3.5'>
        چهارشنبه، 28 مهر 1400
        </div>

        <div className='bg-[#F2F2F2] h-[34px] rounded-lg mt-1 mx-6 p-0.5'>
          <img className='inline-block -mt-2 mx-1' src={iconSearch} alt="" />
          <input className='bg-[#F2F2F2] text-xl ' value={search} onChange={e => setsearch(e.target.value)} />
        </div>

        <div onClick={()=> setshowProfile(true)} >
          <img className='h-10' src={iconUser} alt="" />
        </div>
      </div>
    </div>

    <Outlet/>
  </div>
</div>

{/* modal  */}

{
  showProfile ? 
  <>
    <div onClick={()=> setshowProfile(false)} className="backdrop"></div>
    <div dir='rtl' className=" flex justify-center">
      <div className="bg-white shadow-sm rounded-xl p-4 fixed z-20 top-12 ">
        <div className="between">
          <div className="">
            <img src={iconGroup} alt="" className="img" />
            <p className="title">پروفایل شما</p>
          </div>
          <p onClick={()=> setshowProfile(false)}>X</p>
        </div>

        <div className="flex">
          <img src={userimg} alt="" className="inline-block w-16 m-2  " />
          <div className="mt-3">
            <p className="">تصویر پروفایل</p>
            <div className="text-sm mt-1">
              <p className="title text-[#00693B] pl-4 ">+ عکس جدید</p>
              <p className="title text-[#C46B2A] border-r-2 pr-4 ">x حذف عکس فعلی</p>
            </div>
          </div>
        </div>

        <div onClick={()=>setselect(1)} className={select === 1 ? "card3 border-[#00693B]" : "card3" }>
          <img src={iconpersonG} alt="" className="img" />
          <p className="title text-[#00693B] ">نام و نام خانوادگی</p>
          <p className="mt-1 mr-1">مهناز اخلاقی</p>
        </div>
        <div onClick={()=>setselect(3)} className={select === 3 ? "card3 border-[#00693B]" : "card3" }>
          <img src={iconphone} alt="" className="img w-6" />
          <p className="title text-[#00693B] mr-0">شماره موبایل</p>
          <p className="mt-1 mr-1">09395036772</p>
        </div>
        <div onClick={()=>setselect(2)} className={select === 2 ? "card3 border-[#00693B]" : "card3" }>
          <img src={iconscreen} alt="" className="img w-6" />
          <p className="title text-[#00693B] ">کد ملی</p>
          <p className="mt-1 mr-1">0023459672</p>
        </div>
        <div onClick={()=>setselect(4)} className={select === 4 ? "card3 border-[#00693B]" : "card3" }>
          <img src={iconmail} alt="" className="img w-6" />
          <p className="title text-[#00693B] ">ایمیل آدرس</p>
          <p className="mt-1 mr-1">mahnazakh43@gmail.com</p>
        </div>
      </div>
    </div>
  </>
  :''
}
</>
)}
export default Nav