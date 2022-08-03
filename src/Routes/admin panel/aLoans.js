import React, { useState } from 'react'
import iconEllipse from '../../img/loans/Ellipse 41.png'
import iconAlert from '../../img/loans/fluent_alert-urgent-16-filled.png'
import iconCheckmark from '../../img/loans/fluent_checkmark-circle-16-filled.png'
import iconPage from '../../img/loans/fluent_page-fit-16-filled.png'
import iconPremium from '../../img/loans/fluent_premium-16-filled.png'
import { useSelector } from 'react-redux'
import modalpersonG from '../../img/modals/fluent_person-16-filled.png'
import modalpayment from '../../img/modals/fluent_payment-16-filled.png'
import modalalert from '../../img/modals/fluent_alert-urgent-16-filled.png'
import modalcard from '../../img/modals/fluent_gift-card-16-filled.png'
import modalcalendar from '../../img/modals/fluent_calendar-ltr-16-filled.png'
import modalpage from '../../img/modals/fluent_page-fit-16-filled.png'

const Loans = () => {
  const [showModal,setshowModal] = useState(false)
  const [modal,setmodal] = useState(0)
  const [select,setselect] = useState(1)
  
  const [name,setname] = useState('')
  const [num,setnum] = useState('')
  const [Installment,setInstallment] = useState(1)
  const [type,settype] = useState('')

  const data = useSelector((state) => state.user.data)
  let row = 1

return (
<>
<div dir='rtl'>
  <header className='between text-sm'>
    <div className="between mt-2">
      <div className="between w-56 ml-6 text-[#026155] ">
        <div className="">
          <img className='img bg-[#B3DCD7] ' src={iconPremium} alt="" />
          <span className='title'>تعداد وام های اعطا شده</span>
        </div>
        <p className="">5 وام</p>
      </div>

      <div className="between pr-6 border-r-[1.5px] text-[#997A19] ">
        <div className="between w-60">
          <div className="">
            <img className='img bg-[#FFE694] ' src={iconPage} alt="" />
            <span className='title'>مبلغ کل وام ها</span>
          </div>
          <p className="">47.800.000 تومان</p>
        </div>
      </div>
    </div>

    <div className="">
      <button 
        onClick={()=>{setshowModal(true); setmodal(1)}} 
        className="text-[#026155] inline-block px-4 border-l-[1.5px] mx-4 p-[6px] font-bold "
      >+ اعطای وام جدید</button>
      <div className="bg-[#FCDBC2] rounded-md p-2 inline-block ">
        <img className='img ' src={iconAlert} alt="" />
        <button onClick={()=>{setshowModal(true); setmodal(2)}}  className="inline-block mr-1 ">یادآوری موعد پرداخت</button>
      </div>
    </div>
  </header>

  <div className="grid grid-cols-2 mt-2 ">
    <div className="border1 px-[24px] ml-1 min-h-[81vh] ">
      <img className='img w-6' src={iconEllipse} alt="" />
      <h2 className="title">وام های فعال</h2>

      <table className='text-xs mt-4 text-right '>
        <thead>
          <tr className="">
            <th className="cell1">نام دریافت کننده وام</th>
            <th className="cell1">مبلغ وام</th>
            <th className="cell1">تعداد اقساط</th>
            <th className="cell1">موعد پرداخت</th>
            <th className="cell1">نوع وام</th>
          </tr>
        </thead>
        {data.map((i,inx)=>
          <tbody key={inx} className=''>
            <tr className="bg-[#eae6e6] border-white border-y-8  ">
              <td className="cell1">{i.name}</td>
              <td className="cell1">{i.loans}</td>
              <td className="cell1 px-4">{i.paymentDue} سهم</td>
              <td className="cell1"> اول هر ماه</td>
              <td className="cell1">{i.type}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
    {/* col 2 */}
    <div className="border1 px-[27.5px] mr-1 ">
      <img className='img w-6' src={iconCheckmark} alt="" />
      <h2 className="title">وام های تسویه شده</h2>

      <table className='text-xs mt-4 text-right '>
        <thead>
          <tr className="">
            <th className="cell1">نام دریافت کننده وام</th>
            <th className="cell1">مبلغ وام</th>
            <th className="cell1">تعداد اقساط</th>
            <th className="cell1">نوع وام</th>
            <th className="cell1">تاریخ تسویه</th>
          </tr>
        </thead>
        {data.map((i,inx)=>
          <tbody key={inx} className=''>
            <tr className={i.status == 'red' ? "hidden" : "bg-[#eae6e6] border-white border-y-8"}>
              <td className="cell1">{i.name}</td>
              <td className="cell1">{i.loans}</td>
              <td className="cell1 px-4">{i.paymentDue} سهم</td>
              <td className="cell1">{i.type}</td>
              <td className="cell1">{i.date}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  </div>
</div>
{/* modals */}
{
  showModal ? 
  <>
    <div onClick={()=> setshowModal(false)} className="backdrop"></div>
    <div dir='rtl' className=" flex justify-center">
      <div className="bg-white w-80 shadow-sm rounded-xl p-4 fixed z-20 top-12 ">
        <div className="between">
          <div className="mb-2">
            <img src={modal ? modalalert : modalcard} alt="" className="img" />
            <p className="title">{modal === 1 ? 'اعطای وام جدید' : 'یادآوری موعد پرداخت'}</p>
          </div>
          <p onClick={()=> setshowModal(false)}>X</p>
        </div>

        <div onClick={()=>setselect(1)} className={select === 1 ? "card3 border-[#00693B]" : "card3" }>
          <img src={modalpersonG} alt="" className="img" />
          <p className="title text-[#00693B] ">نام و نام خانوادگی</p>
          <input className="block w-[100%] rounded-md mt-1 p-0.5 " value={name} onChange={e => setname(e.target.value)}/>
        </div>
        <div onClick={()=>setselect(3)} className={select === 3 ? "card3 border-[#00693B]" : "card3" }>
          <img src={modalpayment} alt="" className="img w-6" />
          <p className="title text-[#00693B] mr-0">{modal === 1 ? 'مبلغ وام' : 'ارسال یادآوری به صورت'}</p>
          <p className={modal === 1 ? "title text-[#00693B] text-xs mr-2" : 'hidden'}>موجودی فعلی   26.780.000 تومان</p>          
          <input type="number" className={modal === 1 ? "block w-[100%] rounded-md mt-1 p-0.5 " : 'hidden'} value={num} onChange={e => setnum(e.target.value)}/>
          <p className={modal === 2 ? "" : 'hidden'}>ارسال پیامک به 09121234567</p>
        </div>
        <div onClick={()=>setselect(2)} className={select === 2 ? "card3 border-[#00693B]" : "card3" }>
          <img src={modalpayment} alt="" className="img w-6" />
          <p className="title text-[#00693B] ">{modal === 1 ? 'تعداد اقساط' : 'متن پیامک'}</p>
          <div className={modal === 1 ? 'between' : 'hidden'}>
            <button onClick={()=> setInstallment(Installment + 1)} className='btn2 '>+</button>
            <h3 className="font-bold mt-1.5 ">{Installment} قسط</h3>
            <button onClick={()=> setInstallment(Installment - 1)} className='btn2 '>-</button>
          </div>
          <textarea className={modal === 2 ? "block w-[100%] p-2 rounded max-h-20 " : 'hidden'}>فرزانه عزیز، لطفا قسط وام خودت رو فراموش نکن!</textarea>
        </div>
        <div className={modal === 1 ? "" : 'hidden'}>
          <div onClick={()=>setselect(4)} className={select === 4 ? "card3 border-[#00693B]" : "card3" }>
            <img src={modalpayment} alt="" className="img w-6" />
            <p className="title text-[#00693B] ">موعد پرداخت</p>
            <p className="">اول هر ماه</p>
          </div>
        </div>
        <div className={modal === 1 ? "" : 'hidden'}>
          <div onClick={()=>setselect(4)} className={select === 4 ? "card3 border-[#00693B]" : "card3" }>
            <img src={modalpayment} alt="" className="img w-6" />
            <p className="title text-[#00693B] ">نوع وام</p>
            <select className='mr-20' value={type} onChange={e => settype(e.target.value)} >
            <option value="کمک هزینه">کمک هزینه</option>
            <option value="خرید جهیزه">خرید جهیزه</option>
            </select>
          </div>
        </div>

        <div className={modal ? "mt-3 flex justify-center" : 'hidden'}>
          <button onClick={()=> setshowModal(false)} className='py-1.5 px-10 text-white bg-[#00693B] rounded-3xl '>ارسال یادآوری</button>
        </div>
      </div>
    </div>
  </>
  :''
}
</>
)}
export default Loans