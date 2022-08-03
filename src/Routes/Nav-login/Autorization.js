import React, { useState } from 'react'
import Logo from '../../img/logo.png'
import icon from '../../img/Group-x.png'
import icon3 from '../../img/fluent_chevron-left-16-filled.png'
import icon4 from '../../img/fluent_clock-16-filled.png'
import icon2 from '../../img/fluent_headset-16-filled.png'
import msg from '../../img/modals/Send Another Code.png'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Autorization = () => {
  const [in1,setin1] = useState('1')
  const [in2,setin2] = useState('8')
  const [in3,setin3] = useState('6')
  const [in4,setin4] = useState('7')
  const [modal,setmodal] = useState(false)
  const usernum = useSelector((state) => state.user.phoneNumber)

return (
<>
<div className='text-[#4D4D4D]'>
  <div className="text-center">
    <img className="mx-auto w-20" src={Logo} />
    <h1 className="my-1.5">
      صندوق قرض الحسنه ی خودتو بساز!
    </h1>
  </div>

  <div className='text-center'>
    <div className="bg-white inline-block rounded-xl mt-5 px-8 py-4 ">
      <div className="flex justify-between mb-3">
        <div>
          <img className="inline-block ml-1" src={icon} />
          <h4 className='text-[#00693B] inline-block text-sm '>شماره موبایل شما</h4>
        </div>
        <h4 className='mx-5'>{usernum}</h4>
        <Link to={'/n-l/login'}><img className='mr-10' src={icon3} /></Link>
      </div>
      <hr />
      <h3 className='my-3 text-xs text-right'>کد ارسال شده به شماره همراه خود را وارد کنید</h3>
      <div className='mb-4'>
        <input className='input mr-0' type="number" value={in1} onChange={e => setin1(e.target.value)} maxLength={1} />-
        <input className='input' type="number" value={in2} onChange={e => setin2(e.target.value)} maxLength={1} />-
        <input className='input' type="number" value={in3} onChange={e => setin3(e.target.value)} maxLength={1} />-
        <input className='input ml-0' type="number" value={in4} onChange={e => setin4 (e.target.value)} maxLength={1} />
      </div>

      <div className='flex my-4 justify-between mb-6'>
        <h4 className="text-xs font-bold">کدی دریافت نکردید؟
          <span 
            className='text-[#00AF63] mr-1 '
            onClick={()=>{setmodal(true); setTimeout(()=> setmodal(false), 1000 * 3)
            }} 
            >ارسال مجدد کد
            </span>
        </h4>
        <div className='-mt-1.5'>
          <img className='inline-block mx-0.5 w-4' src={icon4} alt="" />
          <p className='inline-block font-bold'>02:36</p>
        </div>
      </div>

      {
        in1 && in2 && in3 && in4 ? 
        usernum == '09128458202' ?
        <Link to={'/n-panel/aPanel'}><button className='text-white p-4 bg-[#00693B] w-[75%] rounded-3xl ' >ارسال و ورود</button></Link>
        :
        <Link to={'/n-panel/Panel'}><button className='text-white p-4 bg-[#00693B] w-[75%] rounded-3xl ' >ارسال و ورود</button></Link>
        :
        <button className='text-white p-4 bg-[#00693B] w-[80%] rounded-3xl opacity-70 ' > ارسال و ورود</button>
      }
    </div>
  </div>
  <div className='text-center mt-1'>
    <img className='inline-block ml-1' src={icon2} />
    <p className='inline-block'>نیاز به راهنمایی دارید؟</p>
    <Link to={'/SupportPag'}><span className='text-[#00AF63] mr-1  '>تماس با پشتیبانی </span></Link>
  </div>

  {
    modal ?
    <>
      <div className='backdrop'></div>
      <div className='flex justify-center z-20'>
        <img className='w-44 inline-block z-20' src={msg} alt="" />
      </div>
    </>
    : ''
  }

</div>
<div className='w-[100vw] h-[100vh] fixed top-36 left-0 -z-10 flex justify-center '>
  <div className="glow w-[45vw] h-[60vh] "/>
</div>
</>
)}
export default Autorization