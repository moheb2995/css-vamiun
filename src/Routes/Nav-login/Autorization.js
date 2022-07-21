import React, { useState } from 'react'
import Logo from '../../img/logo.png'
import icon from '../../img/Group-x.png'
import icon3 from '../../img/fluent_chevron-left-16-filled.png'
import icon4 from '../../img/fluent_clock-16-filled.png'
import icon2 from '../../img/fluent_headset-16-filled.png'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const Autorization = () => {
  const [in1,setin1] = useState('')
  const [in2,setin2] = useState('')
  const [in3,setin3] = useState('')
  const [in4,setin4] = useState('')
  // const [,set] = useState('')
  const usernum = useSelector((state) => state.user.phoneNumber)
  const dispatch = useDispatch()
  console.log(usernum);

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
      <div className="flex justify-between mb-4">
        <div>
          <img className="inline-block ml-1" src={icon} />
          <h4 className='text-[#00693B] inline-block '>شماره موبایل شما</h4>
        </div>
        <h4 className='-mr-5'>{usernum}</h4>
        <Link to={'/n-l/login'}><img className='' src={icon3} /></Link>
      </div>
      <hr />
      <h3 className='my-4 text-sm text-right'>کد ارسال شده به شماره همراه خود را وارد کنید</h3>
      <div className='mb-4'>
        <input className='input mr-0' type="number" value={in1} onChange={e => setin1(e.target.value)} maxLength={1} />-
        <input className='input' type="number" value={in2} onChange={e => setin2(e.target.value)} maxLength={1} />-
        <input className='input' type="number" value={in3} onChange={e => setin3(e.target.value)} maxLength={1} />-
        <input className='input ml-0' type="number" value={in4} onChange={e => setin4 (e.target.value)} maxLength={1} />
      </div>

      <div className='flex my-4 justify-between mb-8'>
        <h4 className="text-xs font-bold">کدی دریافت نکردید؟
          <span className='text-[#00AF63] mr-1 '>ارسال مجدد کد</span>
        </h4>
        <div className='-mt-1.5'>
          <img className='inline-block mx-0.5 w-4' src={icon4} alt="" />
          <p className='inline-block font-bold'>02:36</p>
        </div>
      </div>

      {
        in1 && in2 && in3 && in4 ? 
        <Link to={'/n-l/Autorization'}><button className='text-white p-4 bg-[#00693B] w-[80%] rounded-3xl ' >ارسال و ورود</button></Link>
        :
        <button className='text-white p-4 bg-[#00693B] w-[80%] rounded-3xl opacity-70 ' > ارسال و ورود</button>
      }
    </div>
  </div>
  <div className='text-center'>
    <img className='inline-block ml-1' src={icon2} />
    <p className='inline-block'>نیاز به راهنمایی دارید؟</p>
    <span className='text-[#00AF63] mr-1  '>تماس با پشتیبانی </span>
  </div>

  {/* <div className='w-[100vw] h-[100vh] bg-black opacity-20 z-40 '>
      <div className='bg-white '>

      </div>
  </div> */}

</div>  )
}

export default Autorization