import React from 'react'

export const DivLaSel = ({handleInput,name,label,col,Opts=[1]}) => {

    return (
        <div className={'col'+col}>
            <label className="form-label pt-2">{label}: </label>
                <select name={name} onChange={handleInput} className="col-12 form-select list-group-item ">
                    {Object.keys(Opts).map((x,i)=>(<option defaultValue={i} key={i}>{x}</option>))}
                </select>
        </div>
    )
}