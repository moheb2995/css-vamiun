import React, { useState } from 'react'
import Logo from '../../img/logo.png'
import icon from '../../img/Group-x.png'
import icon1 from '../../img/fluent_warning-16-filled.png'
import icon2 from '../../img/fluent_headset-16-filled.png'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {setnum} from '../../Redux/UserSlice' 

const Login = () => {
  const [num,setnum] = useState('')
  const [checkbox,setcheckbox] = useState(false)
  const dispatch = useDispatch()

return (
<div className='text-[#4D4D4D]'>
  <div className="text-center">
    <img className="mx-auto w-20" src={Logo} />
    <h1 className="my-1.5">
      صندوق قرض الحسنه ی خودتو بساز!
    </h1>
  </div>

  <div className='text-center'>
    <div className="bg-slate-400 inline-block rounded-xl mt-5 px-8 py-4 ">
      <h4 className="text-right my-4">
        برای ورود / عضویت شماره موبایل خود را وارد کنید
      </h4>

      <div className='border-[#00693B] my-6 p-3 border-2 rounded-xl '>
        <div className="text-right">
          <img className='inline-block' src={icon} />
          <h5 className='inline-block mx-2 '>شماره موبایل</h5>
        </div>
        <input className='w-[100%] mt-2  ' value={num} onChange={(e)=>setnum(e.target.value)} type="number" />
      </div>
      
      <div className='bg-[#FBCFAE] text-right p-2 rounded-lg '>
        <img className='inline-block ml-2' src={icon1} alt="" />
        <h3 className='inline-block font-bold text-[#AC5E24]'>
          لطفا شماره موبایل را به صورت کامل وارد کنید.
        </h3>
      </div>

      <div className='my-4'>
        <input className='inline-block' type="checkbox" checked={checkbox} onChange={e => setcheckbox(!checkbox)} />
        <p className='inline-block font-bold'>استفاده از خدمات وامیون به منزله قبول  
          <span className='text-[#00AF63] '> شرایط و ضوابط </span> 
          می باشد
        </p>
      </div>

      {
        checkbox && num.length === 11  ? 
        <Link to={'/n-l/Autorization'}>
          <button 
            className='text-white p-4 bg-[#00693B] w-[80%] rounded-3xl '
            onClick={()=>dispatch(setnum)}
            >دریافت کد</button>
        </Link>
        :
        <button className='text-white p-4 bg-[#00693B] w-[80%] rounded-3xl opacity-70 ' >دریافت کد</button>
      }
    </div>
  </div>
  <div className='text-center'>
    <img className='inline-block ml-1' src={icon2} />
    <p className='inline-block'>نیاز به راهنمایی دارید؟</p>
    <span className='text-[#00AF63] mr-1  '>تماس با پشتیبانی </span>
  </div>
</div>
)}
export default Login