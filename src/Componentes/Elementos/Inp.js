import { Field } from 'formik'
import React from 'react'
import "animate.css"
export const Inp = ({col,name,label,place,type="text",value,errors, touched, disabled=false,change, ...rest}) => {
    return (
        <div className={'col'+col}>
        <label htmlFor={name} className="form-label pt-2">{label}: </label>
            <Field 
             type={type}
             id={name}
             name={name}
             placeholder={place}
             disabled={disabled}
             autoComplete="off"
             className="col-12 list-group-item"
             {...rest}
            />
            {errors && touched ? (
             <div className="ERROR animate__animated animate__wobble">{errors}</div>
           ) : null}
        </div>
    )
}
