import { Field } from 'formik'
import React from 'react'

export const Sel = ({name,errors,touched,label,col,Opts=[1], ...rest}) => {

    return (
        <div className={'col'+col}>
            <label htmlFor={name} className="form-label pt-2">{label}: </label>
                <Field as="select" name={name} className="col-12 form-select list-group-item " {...rest} >
                <option defaultValue="" label="Seleccionar"/>
                    {Object.keys(Opts).map((x,i)=>(<option defaultValue={i} key={i}>{x}</option>))}
                </Field>
                {errors && touched ? (
             <div className="ERROR animate__animated animate__wobble">{errors}</div>
           ) : null}
        </div>
       
    )
}