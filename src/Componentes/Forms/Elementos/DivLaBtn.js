import React from 'react'

export const DivLaBtn = ({place,label,col,}) => {

    return (
        <div className={'col'+col}>
            <label className="form-label">{label}: </label>
            <button className="col-10 btn btn-secondary ">{place}</button> 
        </div>
      

        
    )
}