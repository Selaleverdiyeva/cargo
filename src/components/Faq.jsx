import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsQuestionOctagon } from "react-icons/bs";
import './Faq.css'
const Faq = () => {
  const dataCollection = [
    {
    
      "question": "Niye biz?",
      "answer": "Müştəri məmnuniyyəti əsas qayəmizdir Seçdiyiniz məhsulu “Sifariş Et” xidməti ilə əldə etmək imkanı Sifarişlə bağlı hərhansı problem yarandığı zaman operativ müdaxilə. Ən sürətli çatdırılma və kuryer xidməti"
    },
    {
      "question": "Necə sifariş edə bilərəm??",
      "answer": "Cəmi 3 addımda seçdiyiniz məhsulu dünyanın müxtəlif ölkələrindən qapınıza gətirə bilərsiz: 1) Vadi.az saytında qeydiyyat formunu doldurun. Bu zaman xarici ünvan əldə edəcəksiniz;    2) Sifarişinizi seçin və məhsulun çatdırılacağı ünvan bölməsinə həmin ölkədəki ofis ünvanımızı qeyd edin. Ödəniş edərək sifarişi tamamlayın; 3)Sifarişinizi tamamladıqdan sonra bağlama xarici anbara təhvil verilir. Biz isə 3-7 iş günü ərzində bağlamanızı yerli anbara çatdırırıq."
    },
    {
      "question": "Ölkədaxili karqo haqqında nələri bilməliyəm?",
      "answer": "Sifarişi etdiyiniz ölkə bağlamanızı kuryer şirkəti vasitəsi ilə bizim həmin ölkədəki anbarımıza çatdırır. Bu zaman kuryer şirkətinin tələb etdiyi xidmət haqqı sifarişi verdiyiniz saytda görünür. Məhsulunuzun qiyməti yüksək olduğu zaman bəzi hallarda karqo haqqı alınmaya bilir."
    },
    {
      "question": "Hansı ölkələrdən sifariş edə bilərəm?",
      "answer": "Hazırda Türkiyə anbarımız fəaliyyətdədir. Yaxın zamanda ABŞ,BƏƏ, Çin və digər ölkələrdən də sifariş edə biləcəksiz"
    },
    {
      "question": "Bağlama sifariş etdiyim mağazadan anbara necə çatdırılır?",
      "answer": "Sifariş etdiyiniz mağaza sifarişi təsdiqlədikdən sonra daxili karqo və ya poçt xidməti vasitəsi ilə sizin göstərdiyiniz ofis ünvanına müəyyən olunmuş iş günləri ərzində təhvil verir. Bağlamanı təhvil alan səlahiyyətli şəxs elektron imza ilə sifarişi qəbul edir və proses başa çatır."
    }
  ]

  const [accordion, setActiveAccordion] = useState(-1)
  function toogleAccordion(index) {
    if(index === accordion){
      setActiveAccordion(-1)
      return;
    }
    setActiveAccordion(index);
  }
  return (
    <div className="container">
      <div>
        <h1 className='accordion__title text-center'>Ən çox verilen suallar</h1>
       
      </div>
      <div className="accordion__faq">
        {dataCollection.map((item, index) =>
          <div className='div__vertical' key={index} onClick={() => toogleAccordion(index)}>
            <div className="accordion__faq-heading">
             
              <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
            
            </div>
            <div className='vertical__faq'>
              {accordion === index ? (
              <>
               <span className='verticle'>-</span> 
              </>
              ) : (
              <>
              <span className='horizental'>+</span>
              </>
              )}
              
            </div>
            
            <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
           
          </div>
        )}
      </div>
    </div>
  )
}
{/* <div className='faq-section'>
<h1>Tez-Tez Verilən Suallar</h1>
<div className='Faq'ref={ accordionDivi}>
  <div className="question">
    <div className="accordion-header">
     
      <span> <BsQuestionOctagon /> Niyə biz?</span>
     <AiOutlineArrowRight />
     
    </div>
    <div className="accordion-content">
      <span>Müştəri məmnuniyyəti əsas qayəmizdir.

A-dan Z-ə ölkəmizin istənilən bölgəsinə poçtla çatdırılma.

Seçdiyiniz məhsulu “Sifariş Et” xidməti ilə əldə etmək imkanı.

Sifarişlə bağlı hərhansı problem yarandığı zaman operativ müdaxilə.

Ən sürətli çatdırılma və kuryer xidməti.</span>
    </div>
  </div>
  <div className="question">
    <div className="accordion-header">
      
      <span><BsQuestionOctagon /> Niyə biz?</span>
      <AiOutlineArrowRight />
    </div>
    <div className="accordion-content">
      <span>Müştəri məmnuniyyəti əsas qayəmizdir.

A-dan Z-ə ölkəmizin istənilən bölgəsinə poçtla çatdırılma.

Seçdiyiniz məhsulu “Sifariş Et” xidməti ilə əldə etmək imkanı.

Sifarişlə bağlı hərhansı problem yarandığı zaman operativ müdaxilə.

Ən sürətli çatdırılma və kuryer xidməti.</span>
    </div>
  </div>
  <div className="question">
    <div className="accordion-header">
      
      <span><BsQuestionOctagon /> Niyə biz?</span>
      <AiOutlineArrowRight />
    </div>
    <div className="accordion-content">
      <span>Müştəri məmnuniyyəti əsas qayəmizdir.

A-dan Z-ə ölkəmizin istənilən bölgəsinə poçtla çatdırılma.

Seçdiyiniz məhsulu “Sifariş Et” xidməti ilə əldə etmək imkanı.

Sifarişlə bağlı hərhansı problem yarandığı zaman operativ müdaxilə.

Ən sürətli çatdırılma və kuryer xidməti.</span>
    </div>
  </div>
  <div className="question">
    <div className="accordion-header">
     
      <span><BsQuestionOctagon /> Niyə biz?</span>
      <AiOutlineArrowRight />
    </div>
    <div className="accordion-content">
      <span>Müştəri məmnuniyyəti əsas qayəmizdir.

A-dan Z-ə ölkəmizin istənilən bölgəsinə poçtla çatdırılma.

Seçdiyiniz məhsulu “Sifariş Et” xidməti ilə əldə etmək imkanı.

Sifarişlə bağlı hərhansı problem yarandığı zaman operativ müdaxilə.

Ən sürətli çatdırılma və kuryer xidməti.</span>
    </div>
  </div>
  <div className="question">
    <div className="accordion-header">
      
      <span><BsQuestionOctagon /> Niyə biz?</span>
      <AiOutlineArrowRight />
    </div>
    <div className="accordion-content">
      <span>Müştəri məmnuniyyəti əsas qayəmizdir.

A-dan Z-ə ölkəmizin istənilən bölgəsinə poçtla çatdırılma.

Seçdiyiniz məhsulu “Sifariş Et” xidməti ilə əldə etmək imkanı.

Sifarişlə bağlı hərhansı problem yarandığı zaman operativ müdaxilə.

Ən sürətli çatdırılma və kuryer xidməti.</span>
    </div>
  </div>
  </div>  
</div> */}
export default Faq