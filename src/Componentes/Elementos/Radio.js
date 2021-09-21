import { Field } from 'formik'
import React from 'react'
import "animate.css"
export const Radio = ({col,name,label,errors, touched, ...rest}) => {
    return (
        <div className={'col'+col}>
        <label htmlFor={name} className="form-label pt-2"> 
        {label}&nbsp;&nbsp;
            <Field 
             type="radio"
             id={name}
             name={name}
             className="ml-4"
             value={label}
             {...rest}
            />
            
        </label>
            {errors && touched ? (
             <div className="ERROR animate__animated animate__wobble">{errors}</div>
           ) : null}
        </div>
    )
}