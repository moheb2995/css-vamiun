import React from 'react'
import img from '../../img/Vector-3 1.png'
import icon from '../../img/Group.png' 

const Slide4 = () => {
return (
<div className='flex justify-around'>
  <div className="glow-img">
    <img className=" " src={img} />
  </div>
  
  <div className="w-[41vw] mt-20" >
    <h2 className="font-bold text-xl mb-10">
      گزارشهای مالی رو ببین
    </h2>
    <p className="">
      به کمک پنل وامیون میتونی خیلی راحت گزارش مالی بگیری و پرداختی هر ماه اعضا رو براحتی ببینی و حتی گزارش ها رو دانلود کنی!
    </p>
    <div className="mt-10">
      <img className="inline-block p-2 m-1 rounded-xl bg-[#CCEFE0] " src={icon}/>
      <h4 className="inline-block">
        امکان خروجی گرفتن از گزارش ها
      </h4>
    </div>
  </div>
</div>
)}
export default Slide4