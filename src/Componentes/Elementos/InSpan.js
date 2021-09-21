import { Field } from 'formik'
import React from 'react'

export const InSpan = ({col,name,label,place,type="text",span,errors, touched, disabled=false,change, ...rest}) => {
    return (
        <div className={'col'+col}>
            <label htmlFor={name} className="form-label pt-2">{label}: </label>
            <div className="row">
                <div className="input-group mb-3">
                    <Field 
                    type={type}
                    id={name}
                    name={name}
                    placeholder={place}
                    disabled={disabled}
                    autoComplete="off"
                    className="col-6 list-group-item text-center "
                    {...rest}
                    />
                    <span className="col-2 col-sm-4 input-group-text">{span}</span>
                    {errors && touched ? (
                    <div className="ERROR animate__animated animate__wobble">{errors}</div>
                    ) : null}
                </div>
            </div>
                       
                
                            
                        
        </div>
    )
   

}
