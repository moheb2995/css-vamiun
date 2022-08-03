import React from 'react'
import img from '../../img/Vector-1 1.png'
import icon from '../../img/fluent_grid-16-filled.png'

const Slide2 = () => {

return (
<div className='flex justify-around'>
  <div className="glow-img">
    <img className=" " src={img} />
  </div>
  
  <div className="w-[41vw] mt-20" >
  <h2 className="font-bold text-xl mb-10">
    اعضای صندوقت رو مدیریت کن 
  </h2>
  <p className="">
    با کمک پنل مدیریتی که برات طراحی کردیم میتونی به راحتی اعضای صندوق خودتو مدیریت کنی و اعضای جدیدی به صندوقت اضافه کنی 
  </p>
  <div className="mt-10">
    <img className="inline-block p-2 m-1 rounded-xl bg-[#FCDBC2] " src={icon}/>
    <h4 className="inline-block">
      پنل مدیریتی کاربردی و در عین حال ساده      
    </h4>
  </div>
  </div>
</div>
)}
export default Slide2