import React from 'react'
import img from '../../img/Vector-2 2.png'
import icon from '../../img/fluent_person-add-16-filled.png'

const Slide3 = () => {

return (
<div className='flex justify-around'>
  <div className="">
    <img className=" " src={img} />
  </div>
  
  <div className="w-[41vw] mt-20" >
    <h2 className="font-bold text-xl mb-10">
      بدون محدودیت وام بده!
    </h2>
    <p className="">
      وام دادن به اعضای صندوقت محدودیت نداره و می تونی به هر چند نفر که دوس داری وام بدی و اقساط پرداخت شده هر شخص رو ببینی و حتی پرداخت اقساطو بهشون یادآوری کنی
    </p>
    <div className="mt-10">
      <img className="inline-block  p-2 m-1 rounded-xl bg-[#FFF0BF] " src={icon}/>
      <h4 className="inline-block">
        امکان حذف و اضافه کردن اعضا بدون محدودیت
      </h4>
    </div>
  </div>
</div>
)}
export default Slide3