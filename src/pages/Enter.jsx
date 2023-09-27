import React from 'react'
import {Formik} from "formik"
import * as Yup from "yup"
import './Enter.css'
const Enter = () => {
  return (
   <div className="container-enter">
    <div className="enter-form">
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
                        <h3>Daxil ol</h3>
                        <label htmlFor="name">E-poçt</label>
                        <input id="email" 
                        type="text" placeholder='' 
                        className='input' 
                        value={values.email} 
                        onChange={handleChange}/>

<label htmlFor="name">Şifrə</label>
                        <input id="şifrə"
                         type="password" placeholder='' 
                        className='input'
                         value={values.şifrə} 
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
                             <label htmlFor="agree" className='checkbox-label'>Yadda saxla</label>
                         </div>
                         <button className='ent__btn' type="submit" disabled={!dirty || isSubmitting}>Daxil ol</button>
                    </form>
                   
                )}
    </Formik>
    </div>
  </div>
  )
}

export default Enter