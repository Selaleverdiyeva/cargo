import React,{useState} from 'react'
import {Formik} from "formik"
import * as Yup from "yup"
import './Registration.css'
const Registration = () => {
    // const [name,setName] = useState('tayfun')
    // const [description,setDescription] = useState('')
    // const [gender, setGender] = useState('1')
  return (
   <>
   <div className="container-registration">
<div className="magic form">
    <Formik 
    initialValues={{
         name: "",
        email:"",
        agree: false,
        favoriteColor:""
        }}
        validationSchema={
            Yup.object({
                name: Yup.string().required("Ad hissesi bos saxlanila bilmez"),
                email: Yup.string().email().required("Email bos saxlanila bilmez"),
                agree: Yup.boolean().required("qaydalari qebil etmek")

            })
        }
        onSubmit={(values, {resetForm, setSubmitting}) =>{
            console.log(values);
            setTimeout(()=>{
           resetForm();
            },2000)
        }}
        >
            { ({
            values, 
            errors, 
            handleChange, 
            handleSubmit,
             handleReset, 
             dirty, 
             isSubmitting
            }) => (
                    <form onSubmit={handleSubmit}>
                        <h3>Qeydiyyat</h3>
                        <label htmlFor="name">Ad</label>
                        <input id="name" 
                        type="text" placeholder='' 
                        className='input' 
                        value={values.name} 
                        onChange={handleChange}/>

<label htmlFor="name">Soyad</label>
                        <input id="soyad"
                         type="text" placeholder='' 
                        className='input'
                         value={values.soyad} 
                         onChange={handleChange}/>
                      {/* { errors.name && touched.name && (
                          <div className="input-feedback">
                           { errors.name}
                          </div>  
                        )
                      } */}
                        
                         {/* { errors.email && touched.email && (
                          <div className="input-feedback">
                           { errors.email}
                          </div>  
                        )
                      } */}
                         <label htmlFor="cins">Cinsinizi seçin</label>
                         <select
                         id='secin'
                         type="text" placeholder='Shelale'
                         className='input'
                         value={values.secin}
                         onChange={handleChange}
                         >
                            <option value="" label=""></option>
                            <option value="qadin" label="Qadin"></option>
                            <option value="kisi" label="Kisi"></option>
                         </select>
                           
                         <label htmlFor="telefon">Telefon</label>
                         <select
                         id='telefon'
                         
                         type="text" placeholder='Shelale' 
                         className='input'
                         value={values.telefon}
                         onChange={handleChange}
                         >
                            <option value="" label=""></option>
                            <option value="qadin" label="+99450"></option>
                            <option value="kisi" label="+99455"></option>
                            <option value="kisi" label="+99470"></option>
                         </select>

                         <label htmlFor="name">Email</label>
                        <input id="email"
                         type="text" placeholder='' 
                        className='input'
                         value={values.email} 
                         onChange={handleChange}/>
                         {/* { errors.cins && touched.cins && (
                          <div className="input-feedback">
                           { errors.cins}
                          </div>  
                        )
                      } */}
                         <div className="checkbox topMargin">
                            <input id="agree" 
                            type="checkbox" 
                            value={values.agree}
                             onChange={handleChange} />
                             <label htmlFor="agree" className='checkbox-label'>Qebul edirem</label>
                         </div>
                         <button className='form-btn' type="submit" disabled={!dirty || isSubmitting}>Davam et</button>
                    </form>
                )}
    </Formik>
    </div>
   </div>
   
   </>
   )
}

export default Registration