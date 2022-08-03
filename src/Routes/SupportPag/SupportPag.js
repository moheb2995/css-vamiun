import React, { useState } from 'react'
import { Link } from "react-router-dom";
import iconCall from '../../img/support/fluent_call-16-filled.png'
import iconCallGreen from '../../img/support/Group (1).png'
import iconDrafts from '../../img/support/fluent_drafts-16-filled.png'
import iconEmail from '../../img/support/fluent_mail-16-filled (1).png'
import iconEmailGreen from '../../img/support/fluent_mail-16-filled.png'
import iconPersonGreen from '../../img/support/fluent_person-16-filled.png'
import iconPerson from '../../img/support/fluent_person-call-16-filled.png'
import Group from '../../img/support/Group.png'
import Ellipse from '../../img/support/Ellipse 24.png'
import Rectangle from '../../img/modals/Rectangle 123.png'
import map from '../../img/Simple-Location-Picker.webp'

const SupportPag = () => {
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [mg,setmg] = useState('')
  const [success,setsuccess] = useState(false)

console.log(success);
return (
<div>
<div className='flex justify-around p-16 py-0 relative '>
  <div className="w-[60vw] m-16 ">
    <div className='flex mb-10'>
      <img className='ml-1' src={iconPerson} alt="" />
      <h1 className=''>پشتیبانی</h1>
    </div>
    <div className='flex justify-between'>
      <div >
        <img className='inline-block ml-1 ' src={Ellipse} alt="nthftjh" />
        <h2 className='inline-block text-sm'>برای ارسال پیام به تیم پشتیبانی ما باید عضو وامیون باشی!</h2>
      </div>
      <Link to={'/n-l/login'}><h3 className='text-[#00AF63] '>ورود / عضویت</h3></Link>
    </div>
    <div className='flex justify-between my-4 '>
      <div className='card '>
        <img className='ml-1 inline-block' src={iconPersonGreen} alt="" />
        <h4 className='inline-block'>نام و نام خانوادگی</h4> <br />
        <input className='' value={name} onChange={e => setname(e.target.value)} type="text" />
      </div>

      <div className='card '>
        <img className='ml-1 inline-block' src={iconEmailGreen} alt="" />
        <h4 className='inline-block'>ایمیل آدرس</h4> <br />
        <input className='' value={email} onChange={e => setemail(e.target.value)} type="text" />
      </div>
    </div>
    <div className='border rounded-xl p-2 '>
      <img className='ml-1 inline-block' src={iconDrafts} alt="" />
      <h4 className='inline-block mb-2'>متن پیام شما</h4>
      {/* text */}
      <textarea className='w-[100%] rounded-xl p-2 ' name="" cols="30" rows="4"></textarea>
    </div>

    <div className='flex justify-center mt-8 '>
      <button className='text-[#00693B] font-bold border-2 border-[#00693B] rounded-full px-8 py-1  ' onClick={()=> setsuccess(true)}>ارسال پیام</button>
    </div>
  </div>

  <div className="w-[55vw] m-16 mx-0 ">
    <div className='flex justify-between '>
      <p className='text-xs mt-2 '>اگه سوالی دارین میتونین با این شماره تلفن با ما تماس بگیرین</p>
      <div className='p-2 py-1 border rounded-full shadow-md '>
        <img className='ml-1 inline-block' src={iconCallGreen} alt="" />
        <p className='text-[#00AF63] text-sm inline-block'>021 - 22123618</p>
      </div>
    </div>

    <h2 className='mt-8 mb-4 text-sm'>با ما در تماس باشین</h2>

    <div className='bg-[#F2F2F2] p-2.5  rounded-xl flex justify-between'>
      <div className='w-48'>
        <img className='ml-1 inline-block' src={Group} alt="" />
        <p className='inline-block mt-2.5 '>آدرس ما</p>
      </div>
      <p className=''>تهران، اتوبان نواب جنوب به شمال، بعد از خیابان آزادی، خیابان 43 شرقی، پلاک 748، طبقه دوم، واحد 4</p>
    </div>

    <div className='my-4 rounded-xl flex justify-between '>
      <div className='bg-[#F2F2F2] p-5 px-2.5 rounded-xl '>
        <img className='ml-1 inline-block' src={iconEmail} alt="" />
        <p className='inline-block'>ایمیل ما</p>
        <p className='inline-block mr-8 '>info@vamion.com</p>
      </div>
      <div className=' bg-[#F2F2F2] p-5 px-2.5 rounded-xl '>
        <img className='ml-1 inline-block' src={iconCall} alt="" />
        <p className='inline-block'>تلفن</p>
        <p className='inline-block mr-8'>021 - 22123618</p>        
      </div>
    </div>
    <div>
      <img className='h-40 w-[100%] rounded-xl' src={map} alt="" />
    </div>
  </div>

</div>
  {/* modal */}
  {
  success ?
  <>
    <div className='modals '>
      <div className='text-left' onClick={()=>setsuccess(false)} >X</div>
      <div className='flex justify-center'><img src={Rectangle} alt="" /></div>
      <h2 className=''>پیغام شما به دست ما رسید!</h2>
      <p className=''>خیلی زود جوابتونو میدیم</p>
    </div>
    <div className='backdrop' onClick={()=>setsuccess(false)} ></div>
  </>
  : ''
  }
</div>
)}
export default SupportPag