import React from 'react'

export const DivLaIn = ({handleInput, place,name,label,col,type="text",disabled=false,value,htmlfor=''}) => {
    
    return (
        <div className={'col'+col}>
            <label className="form-label">{label}: </label>
            <input name={name} onChange={handleInput}
            className="col-12 list-group-item"placeholder={place} type={type} disabled={disabled} value={value}/>
        </div>
    )

}
