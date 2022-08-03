import React, { useEffect, useState } from 'react'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'


const Home = () => {
const [slide,setslide] = useState(1)

// useEffect(()=>{
//   setInterval(()=> setslide(slide + 1),5*1000)
// })
// if(slide === 5){
//   setslide(1)
// }

return (
<>
<div className="glow w-[350px] h-[280px] -mb-40 top-0 left-0 fixed"/>

<div className=''>
  <div className="grid fixed left-8 top-52">
    <button className={slide === 1 ? 'select': 'not-select'} onClick={()=> setslide(1)}></button>
    <button className={slide === 2 ? 'select': 'not-select'} onClick={()=> setslide(2)}></button>
    <button className={slide === 3 ? 'select': 'not-select'} onClick={()=> setslide(3)}></button>
    <button className={slide === 4 ? 'select': 'not-select'} onClick={()=> setslide(4)}></button>
  </div>

  <div className="min-h-[75vh]">
  {
    slide === 1 ? <Slide1/> : ''
  }
  {
    slide === 2 ? <Slide2/> : ''
  }
  {
    slide === 3 ? <Slide3/> : ''
  }
  {
    slide === 4 ? <Slide4/> : ''
  }
  </div>

  <footer className='flex justify-between text-xs  '>
    <div className="flex">
      <div className="mx-14">حریم خصوصی</div>
      <div className="">شرایط و ضوابط</div>
    </div>
    <div className="mr-20 ">{slide}از4</div>
    <div className="ml-14">تمامی حق و حقوق این وب سایت محفوظ می باشد</div>
  </footer>
  
</div>
</>
)}
export default Home