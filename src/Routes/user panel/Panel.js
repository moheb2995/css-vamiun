import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ColChart from '../admin panel/ColChart'
import iconEllipse from '../../img/loans/Ellipse 41.png'
import iconUrgent from '../../img/panel/fluent_alert-urgent-16-filled.png'
import iconGroup from '../../img/panel/Group.png'
import iconFluent from '../../img/Reports/fluent_info-16-filled.png'

const Panel = () => {
  const [month,setmonth] = useState(1)
  const data = useSelector((state) => state.user.userLoans)
  let row = 1

return (
<div className=''>
  <div className="flex justify-around">
    <div className="border1">
      <div className="">
        <img src={iconEllipse} alt="" className="img" />
        <p className="title">وام های فعال شما</p>
      </div>

      <table className='text-xs mt-3 text-right '>
        <thead>
          <tr className="">
            <th className="cell4">ردیف</th>
            <th className="cell4">مبلغ وام</th>
            <th className="cell4">تعداد اقساط</th>
            <th className="cell4">نوع وام</th>
            <th className="cell4">مبلغ هر قسط</th>
            <th className="cell4">اقساط باقیمانده</th>
            <th className="cell4">موعد پرداخت بعدی</th>
          </tr>
        </thead>
        {data.map((i,inx)=>
          <tbody key={inx} className=''>
            <tr className={i.paymentDue - i.Remaining ? '': 'hidden'}>
              <td className="cell4 text-center ">{row++}</td>
              <td className="cell4">{i.price}</td>
              <td className="cell4">{i.paymentDue} قسط</td>
              <td className="cell4 px-4">{i.type}</td>
              <td className="cell4">{Math.floor(i.price / i.paymentDue /10000) * 10000}</td>
              <td className="cell4">{i.Remaining} قسط</td>
              <td className="cell4">{i.date}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
    {/* col 2 */}
    <div className="border1 mr-3">
      <div className="">
        <img src={iconUrgent} alt="" className="img" />
        <p className="title">موعدهای پرداخت</p>
      </div>

      <table className='text-xs mt-3 text-right '>
        <thead>
          <tr className="">
            <th className="cell4"></th>
            <th className="cell4">مبلغ قسط</th>
            <th className="cell4">موعد پرداخت تا</th>
            <th className="cell4"></th>
          </tr>
        </thead>
        {data.map((i,inx)=>
          <tbody key={inx} className=''>
            <tr className={i.paymentDue - i.Remaining ? '': 'hidden'}>
              <td className="cell4 font-bold">پرداخت قسط</td>
              <td className="cell4">اول ماه</td>
              <td className="cell4">{Math.floor(i.price / i.paymentDue /10000) * 10000}</td>
              <td className="cell4 text-[#006FB8] font-bold ">پرداخت قسط {'>'}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  </div>
  {/* row 2 */}
  <div className="border1 my-3">
    <header className='between mb-3'>
      <div className="">
        <img src={iconGroup} alt="" className="img" />
        <p className="title">تراکنش های شما</p>
      </div>
      <div className="">
        <p className="inline-block mx-4">مدت زمان</p>
        <select value={month} onChange={e => setmonth(e.target.value)}>
          <option value="1">1 ماهه</option>
          <option value="3">3 ماهه</option>
          <option value="6">6 ماهه</option>
          <option value="12">12 ماهه</option>
        </select>
      </div>
    </header>
    <div className="between">
      <ColChart/>
      <div className="w-[35vw] ">
        <div className="card2 mb-3 between">
          <p className="">جمع مبلغ تراکنش ها</p>
          <p className="">14.500.000 تومان</p>
        </div>
        <div className="card2 mb-3 between">
          <p className="">میانگین تراکنش های انجام شده</p>
          <p className="">53%</p>
        </div>
        <div className="card2 mb-3 between">
          <p className="">بیشترین تراکنش های انجام شده در</p>
          <p className="">شهریور 1400</p>
        </div>
        <div className="">
          <img src={iconFluent} alt="" className="img" />
          <p className="title text-xs text-[#00AF63] ">اطلاعات این جدول به صورت اتوماتیک تولید می شوند.</p>
        </div>
      </div>
    </div>
  </div>
</div>
)}
export default Panel