import { Field } from 'formik'
import React from 'react'

export const Btn = ({name,label,col,Opts=[1], ...rest}) => {
    return (
        <div className={'col'+col}>
            <label htmlFor={name} className="form-label pt-2">{label}: </label>
                <Field as="button" name={name} className="col-12 form-select list-group-item " {...rest} >
                    {Object.keys(Opts).map((x,i)=>(<option defaultValue={i} key={i}>{x}</option>))}
                </Field>

                
        </div>
       
    )
}