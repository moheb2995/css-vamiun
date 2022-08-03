import React, { useState } from 'react'
import Ellipse from '../../img/support/Ellipse 24.png'
import iconTop from '../../img/FAQ/fluent_chevron-top-16-filled (2).png'
import iconbot from '../../img/FAQ/fluent_chevron-bottom-16-filled (1).png'
import iconEmailGreen from '../../img/support/fluent_mail-16-filled.png'
import iconQuestion from '../../img/support/fluent_person-question-mark-16-filled.png'

const FAQ = () => {
  const [select , setSelect] = useState(false)
  const [arr,setarr]=useState([
    {
      q: 'شفافیت در وامیون چجوریه؟',
      a: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
      isSelect: true,
      id:1,
    },
    {
      q: 'وامیون چقدر قابل اعتماده؟',
      a: 'این یه متن تسته !!!!!!!!!!!!',
      isSelect: true,
      id:2,
    },
    {
      q: 'امنیت پول من در وامیون چطوری تامین میشه؟',
      a: 'این یه متن تسته !!!!!!!!!!!!',
      isSelect: true,
      id:3,
    },
    {
      q: 'اگه کسی رو از صندوقم حذف کنم، متوجه میشه؟',
      a: 'این یه متن تسته !!!!!!!!!!!!',
      isSelect: true,
      id:4,
    },
    {
      q: 'آیا وامیون مجوزهای لازم رو داره؟',
      a: 'این یه متن تسته !!!!!!!!!!!!',
      isSelect: true,
      id:5,
    },
    {
      q: 'حداقل مبلغ برای وام چقدره؟',
      a: 'این یه متن تسته !!!!!!!!!!!!',
      isSelect: true,
      id:6,
    },
    {
      q: 'حداکثر تعداد افرادی که میتونم به یه صندوق اضافه کنم چند نفره؟',
      a: 'این یه متن تسته !!!!!!!!!!!!',
      isSelect: true,
      id:7,
    },
    {
      q: 'آیا می تونم به جز خودم مدیران دیگه ای هم برای صندوق انتخاب کنم؟',
      a: 'این یه متن تسته !!!!!!!!!!!!',
      isSelect: true,
      id:8,
    },
  ])

  console.log(arr)
  const getID = (id) => arr.findIndex((i) => i.id == id)
  function sItem(id) {
    const p = getID(id)
  
    if(arr[p].isSelect){
      arr[p].isSelect = false
    }
    else{
      arr[p].isSelect = true
    }
    setarr(arr);setSelect(!select)
  }

  const list = arr.map(i => 
  <div key={i.id} className='blocked figure '>
    <div className='flex justify-between h-2 mb-9'>
      <div className='inline-block '>
        <img className='inline-block ml-1 ' src={Ellipse} alt="" />
        <h3 className='inline-block'>{i.q}</h3>
      </div>
      <img 
        className='inline-block ' 
        onClick={() => sItem(i.id)}
        src={i.isSelect ? iconbot : iconTop} 
      />
    </div>
    <div className={i.isSelect ? 'block' : 'hidden'}>
      <hr className='mb-4' />
      <p className=''>{i.a}</p>
    </div> 
  </div>)
  
return (
<div className='px-10'>
  <header className='flex justify-between px-10'>
    <div className="">
      <img className='inline-block ml-1' src={iconQuestion} alt="" />
      <h1 className='inline-block'>سوالات متداول شما</h1>
    </div>
    <div className="flex">
      <h4 className='text-xs mt-2 ml-3 '>سوالات و پیشنهادای خودتونو با ما در میون بذارید</h4>
      <div className='border rounded-full py-1 px-3 '>
        <img className='inline-block ml-1 ' src={iconEmailGreen} alt="" />
        <h4 className='inline-block text-xs mb-1 text-[#00AF63]'>support@vamion.com</h4>
      </div>
    </div>
  </header>

  <div className='container'>{list}</div>
    
    <footer className='flex justify-between text-xs my-6 '>
      <div className="flex">
        <div className="mx-14">حریم خصوصی</div>
        <div className="">شرایط و ضوابط</div>
      </div>
      <div className="ml-14">تمامی حق و حقوق این وب سایت محفوظ می باشد</div>
    </footer>
</div>
)}
export default FAQ