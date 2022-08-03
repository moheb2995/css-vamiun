import React, { useState } from 'react'
import ColChart from './ColChart'
import { useSelector } from 'react-redux'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import iconTrending from '../../img/Reports/fluent_arrow-trending-16-filled.png'
import iconRightGreen from '../../img/Reports/fluent_arrow-up-right-16-filled (1).png'
import iconRightRed from '../../img/Reports/fluent_arrow-up-right-16-filled.png'
import iconSavings from '../../img/Reports/fluent_savings-16-filled.png'

const Reports = () => {
  const [rmonth,setrmonth] = useState('شهریور')
  const [tmonth,settmonth] = useState('شهریور')
  const [chart,setchart] = useState({
    Labels: ['orenge','green','yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [35,45,20],
        backgroundColor: [
          'rgba(245,134,52,1)',
          'rgba(0,175,99,1)',
          'rgba(255,204,41,1)',
        ]
      }
    ]
  })
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = useSelector((state) => state.user.data)

return (
<div className='flex justify-around text-sm ] '>
  <div className="w-[58vw] border1 px-8 min-h-[90vh]">
    <div className='my-4'>
      <img src={iconTrending} alt="" className="img w-6" />
      <p className="title">تراکنش های شما</p>
    </div>
    <ColChart/>
    <div className="between mt-4">
      <p className="">تراکنش های {tmonth} ماه</p>
      <div className="">
        <p className="inline-block">ماه</p>
        <select value={tmonth} onChange={e => settmonth(e.target.value)}>
          <option value="فروردین">فروردین</option>
          <option value="اردیبهشت">اردیبهشت</option>
          <option value="خرداد">خرداد</option>
          <option value="تیر">تیر</option>
          <option value="مرداد">مرداد</option>
          <option value="شهریور">شهریور</option>
          <option value="مهر">مهر</option>
          <option value="آبان">آبان</option>
          <option value="آذر">آذر</option>
          <option value="دی">دی</option>
          <option value="بهمن">بهمن</option>
          <option value="اسفند">اسفند</option>
        </select>
      </div>
    </div>
    <hr className='my-2'/>
    <table className='mt-4 text-right h-20 text-sm '>
      <thead>
        <tr className="">
          <th className="cell2">موضوع تراکنش</th>
          <th className="cell2">کاربر</th>
          <th className="cell2">تاریخ</th>
          <th className="cell2">ساعت</th>
          <th className="cell2">مبلغ </th>
        </tr>
      </thead>
      {data.map((i,inx)=>
        <tbody key={inx} className=''>
          <tr className="bg-[#F2F2F2] border-white border-y-8  ">
            <td className="cell2 text-center">{i.title}</td>
            <td className="cell2">{i.name}</td>
            <td className="cell2">{i.date}</td>
            <td className="cell2">{i.h}</td>
            <td className="cell2">{i.loans} تومان</td>
          </tr>
        </tbody>
      )}
    </table>
  </div>
  {/* col 2 */}
  <div className="w-[25vw] border1">
    <div className='my-4'>
      <img src={iconSavings} alt="" className="img w-6" />
      <p className="title">موجودی صندوق</p>
    </div>

    <div className="p-7 pt-0 -mt-4"><Pie data={chart}/></div>

    <div className="between mt-4">
      <p className="">تراکنش های {rmonth} ماه</p>
      <div className="">
        <p className="inline-block mx-1">ماه</p>
        <select value={rmonth} onChange={e => setrmonth(e.target.value)}>
          <option value="فروردین">فروردین</option>
          <option value="اردیبهشت">اردیبهشت</option>
          <option value="خرداد">خرداد</option>
          <option value="تیر">تیر</option>
          <option value="مرداد">مرداد</option>
          <option value="شهریور">شهریور</option>
          <option value="مهر">مهر</option>
          <option value="آبان">آبان</option>
          <option value="آذر">آذر</option>
          <option value="دی">دی</option>
          <option value="بهمن">بهمن</option>
          <option value="اسفند">اسفند</option>
        </select>
      </div>
    </div>
    <hr className='my-3'/>
    <div className="text-[13px]">
      <div className="">
        <div className="between card2">
          <p className="font-bold">🟢 موجودی صندوق</p>
          <p className="">50.000.000 تومان</p>
        </div>
        <div className="between card2">
          <p className="font-bold">🟡 موجودی باقیمانده</p>
          <p className="">26.780.000 تومان</p>
        </div>
        <div className="between card2">
          <p className="font-bold">🟠 وام های صندوق</p>
          <p className="">12.000.020 تومان</p>
        </div>
        <div className="between card2">
          <div className=''>
            <img src={iconRightGreen} className="img" />
            <p className="title  ">جمع واریزی ها</p>
          </div>
          <p className="text-[#00AF63]">13.900.000 تومان +</p>
        </div>

        <div className="between card2">
          <div className=''>
            <img src={iconRightRed} className="img" />
            <p className="title ">جمع برداشتی ها</p>
          </div>
          <p className="text-[#DD792F]">10.050.000 تومان -</p>
        </div>
      </div>
    </div>
  </div>
</div>
)}
export default Reports