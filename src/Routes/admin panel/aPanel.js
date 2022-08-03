import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import iconCommunity from '../../img/panel/fluent_people-community-16-filled.png'
import iconBank from '../../img/panel/fluent_building-bank-16-filled.png'
import iconMail from '../../img/panel/fluent_mail-inbox-dismiss-16-filled.png'
import iconEdit from '../../img/panel/fluent_edit-16-filled.png'
import iconLogoCard from '../../img/panel/Logo.png'
import iconCopy from '../../img/panel/fluent_copy-16-filled.png'
import iconPayment from '../../img/panel/fluent_payment-16-filled.png'
import iconSend from '../../img/panel/fluent_send-16-filled.png'
import modalCopied from '../../img/modals/Copied.png'
import modalpersonG from '../../img/modals/fluent_person-16-filled.png'
import modalpayment from '../../img/modals/fluent_payment-16-filled.png'
import modaledit from '../../img/modals/fluent_edit-16-filled.png'
import modalRectangle from '../../img/modals/Rectangle.png'

const Panel = () => {
  const [copy,setcopy] = useState(false)
  const [account,setaccount] = useState(0)
  const [accountshow,setaccountshow] = useState(false)
  const [close,setclose] = useState(false)
  const [select,setselect] = useState(1)

  const [name,setname] = useState('')
  const [acc,setacc] = useState('')
  const [shaba,setshaba] = useState('')
  const [card,setcard] = useState('')
  const data = useSelector((state) => state.user.data)
  let row = 1
  const accountNumber = 'IR 020560611828025112147801'

return (
<>
<div className='grid grid-cols-2 text-sm'>
  <div className="border1 ml-3 mb-3">
    <img className='inline-block' src={iconCommunity} alt="" />
    <h2 className='title'>اعضا صندوق</h2>
    <div className="">
      <table className='text-sm mt-4 text-right '>
        <thead>
          <tr className="">
            <th className="cell">ردیف</th>
            <th className="cell">نام و نام خانوادگی</th>
            <th className="cell">کدملی</th>
            <th className="cell">تعداد سهم</th>
            <th className="cell">مبلغ سهم</th>
          </tr>
        </thead>
          {data.map((i,inx)=>
            <tbody key={inx} className=''>
              <tr className="bg-[#eae6e6] border-white border-y-8  ">
                <td className="cell text-center">{row++}</td>
                <td className="cell">{i.name}</td>
                <td className="cell">{i.IDcode}</td>
                <td className="cell px-4">{i.share} سهم</td>
                <td className="cell">{i.price}</td>
              </tr>
            </tbody>
          )}
        </table>
    </div>
  </div>
{/* col 2 */}
  <div className=''>
    <div className="border1">
      <div className="">
        <img className="inline-block" src={iconBank} />
        <h2 className='title mb-4'>صندوق شما</h2>
      </div>
      <div className="between">
        <div className="between bg-[#F2F2F2] rounded-xl w-[49%] my-1.5 px-3 py-2 ">
            <h3 className="">نام صندوق</h3>
            <h3 className="">همکاران شرکت</h3>
        </div>
        <div className="between bg-[#F2F2F2] rounded-xl w-[49%] my-1.5 px-3 py-2 ">
          <h3 className="">تاریخ تاسیس</h3>
          <h3 className="">2 خرداد 1400</h3>
        </div>
      </div>
      <div className="between bg-[#F2F2F2] rounded-xl my-1.5 px-3 py-2" >
        <h3 className="">مدیر / مدیران صندوق</h3>
        <h3 className="">مهناز اخلاقی</h3>
      </div>
      <div className="between ">
        <div className="between bg-[#F2F2F2] rounded-xl w-[49%] my-1.5 px-3 py-2 ">
            <h3 className="">تعداد اعضای صندوق</h3>
            <h3 className="">8</h3>
        </div>
        <div className="between bg-[#F2F2F2] rounded-xl w-[49%] my-1.5 px-3 py-2 ">
          <h3 className="">موجودی صندوق</h3>
          <h3 className="">50000000</h3>
        </div>
      </div>
      <div className='bg-[#F2F2F2] rounded-xl my-1.5 p-3 ' >
        <div className="between ">
          <h4 className="">قوانین صندوق</h4>
          <div className='bg-gray-400 btn'>
            <img className="inline-block w-6 -mb-2" src={iconSend} />
            <p className='inline-block text-sm '>ارسال به اعضا صندوق</p>
          </div>
        </div>
        <p className='py-2'>هر عضو صندوق اجازه ی 1 بار وام گرفتن در یک دوره ی 6 ماهه را دارد.</p>
      </div>
      <hr className='my-4'/>
      <div className="between text-[13px] ">
        <button onClick={()=> setclose(true)} className="bg-[#FCDBC2] btn1">
          <img className='inline-block ml-1 ' src={iconMail} />بستن صندوق
        </button>
        <div className="between">
          <button onClick={()=>{setaccountshow(true); setaccount(1)}} className="bg-[#CCEFE0] btn1 ml-2"><b className=''>+</b><span className=''>افزودن حساب جدید</span></button>
          <button onClick={()=>{setaccountshow(true); setaccount(2)}} className="bg-[#FFE694] btn1">
            <img src={iconEdit} className="inline-block mx-1" />ویرایش حساب
          </button>
        </div>
      </div>
    </div>
{/* row 2 */}
    <div className="border1 my-3">
      <img className="inline-block w-5" src={iconPayment}/>
      <h2 className="title">حساب شما</h2>

      <div className="between relative mt-2  ">
        <div className="p-3 bg-img w-[46%]">
          <p className="my-2">مهناز اخلاقی</p>
          <span className="mr-5 ml-3">6124</span>
          <span className="mr-5">4627</span>
          <span className="mr-5">9913</span>
          <span className="mr-1">0996</span>
          <div className="between mt-2">
            <p className="text-xs mt-1">{accountNumber}</p>
            <img className="" src={iconLogoCard} />
          </div>
        </div>
        <div className="w-[52%] ">
          <div className="bg-[#F2F2F2] p-2 rounded-xl">
            <div className="between ">
              <div className="text-sm">شماره حساب</div>
              <div className="text-sm">611828005112147521</div>
            </div>
            <div onClick={()=>{setcopy(true); setTimeout(()=>setcopy(false),2.5 * 1000); navigator.clipboard.writeText(accountNumber);}} 
              className="text-sm text-center my-2 bg-gray-400 h-8 rounded-lg p-1">
              <img className='inline-block w-3 ml-1' src={iconCopy} alt="" />
              <p className="inline-block">کپی کردن</p>
              {copy ? <img src={modalCopied} alt="" className="w-32 m-auto" /> : ''}
            </div>
          </div>
          <hr className='my-3'/>
          <div className="between text-[13px] ">
            <button onClick={()=>{setaccountshow(true); setaccount(1)}} className="bg-[#CCEFE0] btn1 ml-2"><b className=''>+</b><span className=''>افزودن حساب جدید</span></button>
            <button onClick={()=>{setaccountshow(true); setaccount(2)}} className="bg-[#FFE694] btn1">
              <img src={iconEdit} className="inline-block mx-1" />ویرایش حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* modal */}

{
  accountshow ? 
  <>
    <div onClick={()=> setaccountshow(false)} className="backdrop"></div>
    <div dir='rtl' className=" flex justify-center">
      <div className="bg-white w-80 shadow-sm rounded-xl p-4 fixed z-20 top-12 ">
        <div className="between">
          <div className="mb-2">
            <img src={modaledit} alt="" className="img" />
            <p className="title">{account === 1 ? 'افزودن حساب جدید' : 'ویرایش حساب'}</p>
          </div>
          <p onClick={()=> setaccountshow(false)}>X</p>
        </div>

        <div onClick={()=>setselect(1)} className={select === 1 ? "card3 border-[#00693B]" : "card3" }>
          <img src={modalpersonG} alt="" className="img" />
          <p className="title text-[#00693B] ">نام و نام خانوادگی</p>
          <input type="number" className="block w-[100%] rounded-md mt-1 p-0.5 " value={name} onChange={e => setname(e.target.value)}/>
        </div>
        <div onClick={()=>setselect(3)} className={select === 3 ? "card3 border-[#00693B]" : "card3" }>
          <img src={modalpayment} alt="" className="img w-6" />
          <p className="title text-[#00693B] mr-0">شماره حساب</p>
          <input type="number" className="block w-[100%] rounded-md mt-1 p-0.5 " value={acc} onChange={e => setacc(e.target.value)}/>
        </div>
        <div onClick={()=>setselect(2)} className={select === 2 ? "card3 border-[#00693B]" : "card3" }>
          <img src={modalpayment} alt="" className="img w-6" />
          <p className="title text-[#00693B] ">شماره شبا</p>
          <input type="number" className="block w-[100%] rounded-md mt-1 p-0.5 " value={shaba} onChange={e => setshaba(e.target.value)}/>
        </div>
        <div onClick={()=>setselect(4)} className={select === 4 ? "card3 border-[#00693B]" : "card3" }>
          <img src={modalpayment} alt="" className="img w-6" />
          <p className="title text-[#00693B] ">شماره کارت</p>
          <input type="number" className="block w-[100%] rounded-md mt-1 p-0.5 " value={card} onChange={e => setcard(e.target.value)}/>
        </div>
        <div className="mt-3 flex justify-center">
          <button className='py-1.5 px-10 text-white bg-[#00693B] rounded-3xl '>{account === 1 ? 'افزودن حساب' : 'ذخیره تغییرات'}</button>
        </div>
      </div>
    </div>
  </>
  : close ? 
  <>
  <div onClick={()=> setclose(false)} className="backdrop"></div>
  <div dir='rtl' className="flex justify-center ">
    <div className="bg-white z-20 p-4 rounded-2xl fixed bottom-20">
      <img className='m-auto w-10' src={modalRectangle} alt="" />
      <p className="text-sm">آیا از بستن این صندوق مطمئنید؟</p>
      <div className="between mt-2">
        <button onClick={()=> setclose(false)} className="py-2 px-6 rounded-full mx-1 bg-[#C4C4C4] ">نه</button>
        <button onClick={()=> setclose(false)} className="py-2 px-6 rounded-full mx-1 bg-[#00693B] text-white ">بله</button>
      </div>
    </div>
  </div>
  </>
  :''
}
</>
)}
export default Panel