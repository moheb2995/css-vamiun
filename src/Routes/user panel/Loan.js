import React from 'react'
import { useSelector } from 'react-redux'
import iconPage from '../../img/loans/fluent_page-fit-16-filled.png'
import iconEllipse from '../../img/loans/Ellipse 1.png'
import iconDismiss from '../../img/loans/fluent_dismiss-circle-16-filled.png'
import iconCheckmark from '../../img/loans/fluent_checkmark-circle-filled.png'
import iconPremium from '../../img/loans/fluent_premium-.png'

const Loan = () => {
  const data = useSelector((state) => state.user.userLoans)
  let row = 1

return (
<div className=''>
<header className='between text-sm'>
    <div className="between mt-2">
      <div className="between w-56 ml-6 text-[#026155] ">
        <div className="">
          <img className='img w-6 pb-0.5 bg-[#B3DCD7] ' src={iconEllipse} alt="" />
          <span className='title'>تعداد وام های اعطا شده</span>
        </div>
        <p className="">{data.length} وام</p>
      </div>

      <div className="between pr-6 border-r-[1.5px] text-[#997A19] ">
        <div className="between w-60">
          <div className="">
            <img className='img bg-[#FFE694] w-6' src={iconPage} alt="" />
            <span className='title'>مبلغ کل وام ها</span>
          </div>
          <p className="">47.800.000 تومان</p>
        </div>
      </div>
    </div>
    <p className="btn1 bg-[#CCEFE0] ">
      + درخواست وام جدید
    </p>
  </header>


  <div className="border1 mt-3 min-h-[80vh] "> 
    <div className="">
      <img src={iconPremium} alt="" className="img w-6" />
      <p className="title">وام های فعال شما</p>
    </div>

    <table className='text-[12px] mt-3 text-right font-bold '>
      <thead>
        <tr className="">
          <th className="cell5">ردیف</th>
          <th className="cell5">نوع وام</th>
          <th className="cell5">مبلغ وام</th>
          <th className="cell5">تعداد اقساط</th>
          <th className="cell5">اقساط پرداخت شده</th>
          <th className="cell5">اقساط باقیمانده</th>
          <th className="cell5">تاریخ اولین قسط</th>
          <th className="cell5">تاریخ آخرین قسط</th>
          <th className="cell5">مبلغ هر قسط</th>
          <th className="cell5">وضعیت وام</th>
        </tr>
      </thead>
      {data.map((i,inx)=>
        <tbody key={inx} className=''>
          <tr>
            <td className="cell5 text-center">{row++}</td>
            <td className="cell5 px-4">{i.type}</td>
            <td className="cell5">{i.price}</td>
            <td className="cell5">{i.paymentDue} قسط</td>
            <td className="cell5">{i.Remaining} قسط</td>
            <td className="cell5">{i.paymentDue - i.Remaining} قسط</td>
            <td className="cell5">{i.date}</td>
            <td className="cell5">{i.date}</td>
            <td className="cell5">{Math.floor(i.price / i.paymentDue /10000) * 10000}</td>
            <td className="cell5">
              {
                i.paymentDue - i.Remaining == 0 ? 
                <div className="">
                  <img src={iconCheckmark} alt="" className="img" />
                  <p className="inline-block text-[#00AF63] ">تسویه شده</p>
                </div>
                :
                <div className="">
                <img src={iconDismiss} alt="" className="img" />
                <p className="inline-block text-[#DD792F] ">تسویه نشده</p>
              </div>
              }
            </td>
          </tr>
        </tbody>
      )}
    </table>
  </div>
</div>
)}
export default Loan