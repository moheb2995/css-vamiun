import React, { useState } from 'react'

const ColChart = () => {
  const [m1,setm1] = useState(4)
  const [m2,setm2] = useState(8)
  const [m3,setm3] = useState(6)
  const [m4,setm4] = useState(12)
  const [m5,setm5] = useState(7)
  const [m6,setm6] = useState(5)
  const [m7,setm7] = useState(13)
  const [m8,setm8] = useState(15)
  const [m9,setm9] = useState(2)
  const [m10,setm10] = useState(10)
  const [m11,setm11] = useState(11)
  const [m12,setm12] = useState(16)

return (
<div>
  <div className="grid-cols-12 grid text-xs -ml-10">
    <div className=''>
      <div className="col"></div>  
      <div className={`w-5 h-[120px] -mt-[120px] bg-[#00AF63] rounded-b-full `}></div>  
      <p className="">فروردین</p>
    </div>
    <div className=''>
      <div className="col "></div>  
      <div className="w-5 h-[80px] -mt-[80px] bg-[#038B79] rounded-b-full "></div>  
      <p className="">اردیبهشت</p>
    </div>
    <div className="">
      <div className="col "></div>  
      <div className="w-5 h-[90px] -mt-[90px] bg-[#F58634] rounded-b-full "></div>  
      <p className="">خرداد</p>
    </div>
    <div className="">
      <div className="col "></div>  
      <div className="w-5 h-[165px] -mt-[165px] bg-[#FFCC29] rounded-b-full "></div>  
      <p className="">تیر</p>
    </div>
    <div className="">
      <div className="col "></div>  
      <div className="w-5 h-[50px] -mt-[50px] bg-[#00AF63] rounded-b-full "></div>  
      <p className="">مرداد</p>
    </div>
    <div className="">
      <div className="col "></div>  
      <div className="w-5 h-[80px] -mt-[80px] bg-[#038B79] rounded-b-full "></div>  
      <p className="">شهریور</p>
    </div>
    <div className="">
      <div className="col "></div>  
      <div className="w-5 h-[30px] -mt-[30px] bg-[#F58634] rounded-b-full "></div>  
      <p className="">مهر</p>
    </div>
    <div className="">
      <div className="col "></div>  
      <div className="w-5 h-[150px] -mt-[150px] bg-[#FFCC29] rounded-b-full "></div>  
      <p className="">آبان</p>
    </div>
    <div className="">
      <div className="col "></div>  
      <div className="w-5 h-[130px] -mt-[130px] bg-[#00AF63] rounded-b-full "></div>  
      <p className="">آذر</p>
    </div>
    <div className="">
      <div className="col "></div>  
      <div className="w-5 h-[90px] -mt-[90px] bg-[#038B79] rounded-b-full "></div>  
      <p className="">دی</p>
    </div>
    <div className="">
      <div className="col "></div>  
      <div className="w-5 h-[140px] -mt-[140px] bg-[#F58634] rounded-b-full "></div>  
      <p className="">بهمن</p>
    </div>
    <div className="">
      <div className="col "></div>  
      <div className="w-5 h-[40px] -mt-[40px] bg-[#FFCC29] rounded-b-full "></div>  
      <p className="">اسفند</p>
    </div>
  </div>
</div>
)}
export default ColChart