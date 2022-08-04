import React, { useState } from 'react'
import Logo from '../../img/logo.png'
import icon from '../../img/Group-x.png'
import icon1 from '../../img/fluent_warning-16-filled.png'
import icon2 from '../../img/fluent_headset-16-filled.png'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {setnum} from '../../Redux/UserSlice' 

const Login = () => {
  const [number,setnumber] = useState('')
  const [checkbox,setcheckbox] = useState(true)
  const dispatch = useDispatch()

  const handleNumChange = e => {
    const limit = 11;
    setnumber(e.target.value.slice(0, limit));
  }

return (
<>
<div className=''>
  <div className="text-center">
    <img className="mx-auto w-20" src={Logo} />
    <h1 className="my-1.5">
      صندوق قرض الحسنه ی خودتو بساز!
    </h1>
  </div>

  <div className='text-center'>
    <div className="bg-white inline-block rounded-xl mt-5 px-6 py-4 text-xs ">
      <h4 className="text-right font-bold ">
        برای ورود / عضویت شماره موبایل خود را وارد کنید
      </h4>

      <div className='border-[#00693B] my-3 p-3 border-2 rounded-xl '>
        <div className="text-right">
          <img className='inline-block' src={icon} />
          <h5 className='inline-block mx-2 '>شماره موبایل</h5>
        </div>
        <input className='w-[100%] mt-2 text-base' 
          value={number} maxLength={11}  
          onChange={handleNumChange} 
          type="number" 
          />
      </div>
      {
        checkbox && number.length === 11  ? '' :
      <div className='bg-[#FBCFAE] text-right p-2 rounded-lg '>
        <img className='inline-block ml-2' src={icon1} alt="" />
        <h3 className='inline-block font-bold text-[#AC5E24]'>
          لطفا شماره موبایل را به صورت کامل وارد کنید.
        </h3>
      </div>
      }

      <div className='my-3'>
        <input className='inline-block' type="checkbox"  checked={checkbox} onChange={() => setcheckbox(!checkbox)} />
        <p className='inline-block font-bold'>استفاده از خدمات وامیون به منزله قبول  
          <span className='text-[#00AF63] '> شرایط و ضوابط </span> 
          می باشد
        </p>
      </div>

      {
        checkbox && number.length === 11  ? 
        <Link to={'/n-l/Autorization'}>
          <button 
            className='text-white p-4 bg-[#00693B] w-[80%] rounded-3xl '
            onClick={()=>dispatch(setnum(number))}
            >دریافت کد</button>
        </Link>
        :
        <button className='text-white p-4 bg-[#00693B] w-[80%] rounded-3xl opacity-70 ' >دریافت کد</button>
      }
    </div>
  </div>
  <div className='text-center mt-1'>
    <img className='inline-block ml-1' src={icon2} />
    <p className='inline-block'>نیاز به راهنمایی دارید؟</p>
    <Link to={'/SupportPag'}><span className='text-[#00AF63] mr-1  '>تماس با پشتیبانی </span></Link>
  </div>
</div>

<div className='w-[100vw] h-[100vh] fixed top-36 left-0 -z-10 flex justify-center '>
  <div className="glow w-[45vw] h-[60vh] "/>
</div>
</>
)}
export default Login