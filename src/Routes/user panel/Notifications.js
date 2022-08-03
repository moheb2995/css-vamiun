import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import iconFilled from '../../img/Reports/fluent_info-16-filled.png'
import iconGroup from '../../img/Reports/Group.png'

const Notifications = () => {
  const [period,setperiod] = useState('امروز')
  const data = useSelector((state) => state.user.NUser)
  const [numGreen,setnumGreen] = useState(null)
  const [numRed,setnumRed] = useState(null)
  const [numYellow,setnumYellow] = useState(null)
  const red = <div className="w-1 h-[22px] -mb-[6px] bg-[#F58634] inline-block rounded-full "></div>
  const green = <div className="w-1 h-[22px] -mb-[6px] bg-[#00AF63] inline-block rounded-full "></div>
  const yellow = <div className="w-1 h-[22px] -mb-[6px] bg-[#FFCC29] inline-block rounded-full "></div>

  useEffect(()=>{
    const g = data.filter(i => i.N === 'پرداخت قسط')
    const r = data.filter(i => i.N === 'درخواست وام')
    const y = data.filter(i => i.N === 'درخواست عضویت')
    setnumGreen(g.length)
    setnumRed(r.length)
    setnumYellow(y.length)
  },[])
return (
<div c> 
<header className='between text-sm'>
    <div className="between ">
      <h1 className="title">اعلان های امروز</h1>
      <div className="mx-4">
        <img src={iconFilled} alt="" className="img" />
        <p className="inline-block text-xs">اعلانات پس از 30 روز پاک می شوند.</p>
      </div>
    </div>
    <div className="between">
      <div className="">
        <img src={iconGroup} alt="" className="img" />
        <p className="ml-4 inline-block">فیلتر اعلان ها</p>
      </div>
      <select value={period} onChange={e => setperiod(e.target.value)}>
        <option value="روز">امروز</option>
        <option value="هفنه">این هفته</option>
        <option value="ماه"> این ماه </option>
      </select>
    </div>
  </header>

  <div className="border1 min-h-[82vh] mt-3 ">
  <table className='mt-4 text-[13px] font-bold text-right h-20 '>
        <thead>
          <tr className="">
            <th></th>
            <th className="cell6">اعلان</th>
            <th className="cell6">تاریخ</th>
            <th className="cell6">ساعت</th>
            <th className="cell6 w-[45vw] ">توضیحات</th>
            <th className="cell6"></th>
          </tr>
        </thead>
        {data.map((i,inx)=>{
        return(
          <tbody key={inx} className=''>
            <tr>
              <td className='pl-1 rounded-full '>{i.N === 'یادآوری موعد پرداخت' ? yellow : i.N === 'وضعیت حساب کاربری' ? red : green}</td>
              <td className="cell6 pr-0 ">{i.N}</td>
              <td className="cell6">{i.date}</td>
              <td className="cell6">{i.h}</td>
              <td className="cell6">{i.explanation}</td>
              <td className="cell6">
                {
                  i.N == 'یادآوری موعد پرداخت' 
                  ? 
                  <p className="text-[#DD792F]">پرداخت قسط {'>'}</p> 
                  : 
                  <p className="text-[#006FB8] ">پرداخت قسط {'>'}</p>
                  }
              </td>
            </tr>
          </tbody>
        )}
        )}
      </table>
  </div>
</div>
)}
export default Notifications