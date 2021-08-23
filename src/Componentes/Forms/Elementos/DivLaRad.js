import React from 'react'

export const DivLaRad = ({handleInput,name,value}) => {
    return (
        <div className="form-check form-check-inline">
            <input name={name} onChange={handleInput} className="form-check-input" type="radio"   defaultValue={value}/>
            <label className="form-check-label" htmlFor={"inlineCheckbox1"+1}>{value}</label>
        </div>
    )

    /*
   */
}
