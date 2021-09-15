import React from 'react'

export const DivLaTxt = ({handleInput,col,place,name,label}) => {
    return (
        <div className={'col'+col}>
            <label className="form-label">{label}</label>
            <textarea  name={name} onChange={handleInput} className="col-12 list-group-item" placeholder={place} />
        </div> 
    )
}
