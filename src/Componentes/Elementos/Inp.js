import { Field } from 'formik'
import React from 'react'
import "animate.css"
export const Inp = ({col,t="col-12",name,label,place,type="text",value,errors, touched, disabled=false,change,as, ...rest}) => {
    return (
        <div className={'col'+col}>
        <label htmlFor={name} className="z form-label pt-2">{label}: </label>
            <Field 
             as={as}
             type={type}
             id={name}
             name={name}
             placeholder={place}
             disabled={disabled}
             autoComplete="off"
             className={" list-group-item text-center "+t}
             {...rest}
            />
            {errors && touched ? (
             <div className="ERROR animate__animated animate__wobble">{errors}</div>
           ) : null}
        </div>
    )
}
