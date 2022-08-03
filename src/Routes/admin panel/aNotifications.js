import React, { useEffect, useState } from 'react'
import iconFilled from '../../img/Reports/fluent_info-16-filled.png'
import iconGroup from '../../img/Reports/Group.png'
import { useSelector } from 'react-redux'

const Notifications = () => {
  const [period,setperiod] = useState('امروز')
  const [numGreen,setnumGreen] = useState(null)
  const [numRed,setnumRed] = useState(null)
  const [numYellow,setnumYellow] = useState(null)
  const [showModal,setshowModal] = useState(false)
  const [modal,setmodal] = useState(0)

  const data = useSelector((state) => state.user.data)
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

  
  function showModals(n,name,price,loans,h,date){
    console.log('iuggku');
    console.log(name);
  return(
  <>
    <div onClick={()=> setshowModal(false)} className="backdrop"></div>
    <div dir='rtl' className="flex justify-center">
      <div className="bg-white w-80 shadow-sm rounded-xl p-4 fixed z-20 top-12">
        yufuygfku
      </div>
    </div>
  </>
  )
  }

return (
<div className='text-sm'>
  <header className='between '>
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
  <div className="justify-around flex font-bold">
    <div className="w-56 ml-4 mt-[53px] ">
      <h3 className="card2">🟢 پرداخت قسط ({numGreen})</h3>
      <h3 className="card2">🟡 درخواست عضویت ({numYellow})</h3>
      <h3 className="card2">🟠 درخواست وام ({numRed})</h3>
    </div>
    <div className="w-[100%]">
    <table className='mt-4 text-right h-20 '>
        <thead>
          <tr className="">
            <th></th>
            <th className="cell3">اعلان</th>
            <th className="cell3">کاربر</th>
            <th className="cell3">تاریخ</th>
            <th className="cell3">ساعت</th>
            <th className="cell3">توضیحات</th>
            <th className="cell3"></th>
          </tr>
        </thead>
        {data.map((i,inx)=>{
        return(
          <tbody key={inx} className=''>
            <tr className="bg-[#F2F2F2] border-white border-y-8 rounded-[50px] ">
              <td className='pl-1 rounded-r-3xl'>{i.N === 'پرداخت قسط' ? green : i.N === 'درخواست وام' ? red : yellow}</td>
              <td className={i.N.length < 12 ? "cell3 pr-0 " : "cell3 pr-0 text-[10px] font-bold "}>{i.N}</td>
              <td className="cell3 text-right pr-0">{i.name}</td>
              <td className="cell3">{i.date}</td>
              <td className="cell3">{i.h}</td>
              <td className="cell3 ">
                {i.N == 'پرداخت قسط' ? 'پرداخت قسط' : 'درخواست وام'} توسط {i.name}
              </td>
              <td className="cell3 text-[#026F61] rounded-l-2xl ">
                <button onClick={showModals(i.N,i.name,i.price,i.loans,i.h,i.date)}> مشاهده ی جزییات {'>'}</button>
              </td>
            </tr>
          </tbody>
        )}
        )}
      </table>
    </div>
  </div>
</div>
)}
export default Notifications