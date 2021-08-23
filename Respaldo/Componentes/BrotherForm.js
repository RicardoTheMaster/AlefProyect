import React from 'react'

export const BrotherForm = ({cantidad}) => {
    
    return (
        <>
        <div className="row  py-2">
            
             <div className="col-12">
                 <label className="form-label">Nombre Completo {cantidad}:</label>
                 <input className="col-12 list-group-item" placeholder="Luis" type="text"/>
            </div>
           
        </div>
        <div className="row  py-2">
            
            <div className="col-6">
                <label className="form-label">Edad:</label>
                <input className="col-12 list-group-item" placeholder="Edad" type="Number"/>
            </div>
            <div className="col-6">
                <label className="form-label" >Ocupacion:</label>
                <input className="col-12 list-group-item" placeholder="Ocupacion" type="text"/>
            </div>
        </div>

        </>
    )
}
