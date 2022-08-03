import React from 'react'
import img from '../../img/Vector 3.png'
import icon from '../../img/fluent_money-16-filled.png'

const Slide1 = () => {

return (
<div className='flex justify-around'>
  <div className="glow-img ">
    <img className="" src={img} />
  </div>
  
  <div className="w-[41vw] mt-20" >
    <h2 className="font-bold text-xl mb-10">
    صندوق قرض الحسنه ی خودتو داشته باش!
    </h2>
    <p className="">
    با وامیون میتونی صندوق قرض الحسنه ی خودتو بسازی و دوستان یا اقوام خودتو به عضویت صندوق در بیاری و اونها رو مدیریت کنی
    </p>
    <div className="mt-10">
      <img className="inline-block py-2.5 px-2 m-1 rounded-xl bg-[#B3DCD7] " src={icon}/>
      <h4 className="inline-block">
        امکان ایجاد یک یا چند صندوق قرض الحسنه و مدیریت آنها
      </h4>
    </div>
  </div>
</div>
)}
export default Slide1