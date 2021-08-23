import React from 'react'
import { BrotherForm } from '../BrotherForm'

export const DatosFam = ({handleInput,handleInputChange,valor,newvalor,hermanos}) => {
    return (
        <div>
           <hr />
                <h4 className="text">Datos familiares</h4>
                <hr />
                
                    <div className="row pt-4">
                        <div className="col-10 col-sm-6">
                            <label className="form-label">Padre:</label>
                            <input name="familia_nomP"onChange={handleInput} className="col-12 list-group-item" placeholder="-Na- Si no tienes" type="text"/>
                        </div>
                        <div className="col-10 col-sm-10">
                            <label className="form-label">Madre:</label>
                            <input name="familia_nomM"onChange={handleInput}className="col-12 list-group-item" placeholder="-Na- Si no tienes" type="text"/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12">
                            <label className="form-label">¿Cuantos hermanos tienes?</label>
                            <input name="familia_herm" onChange={handleInputChange}
                            className="col-4 list-group-item" placeholder="-0- Si no tienes" type="number"/>
                        </div>
                    </div>
                    {
                        (valor>0)&&
                        (
                            ((valor>5))
                            ?   (<>
                                    {newvalor(5)}
                                </>)
                            :   (<>
                                    <h5 className="pt-4">Llena los datos de {valor} hermano(s)</h5>
                                    <h5 className="pt-2 fs-6 fw-lighter">Maximo 5. Pero se guarda el total de tus hermanos</h5> 
                                        {Object.keys(hermanos).map((x, i) => (<BrotherForm key={x}  cantidad={i+1}/>) )}
                                </> )
                        )
                    }
        </div>
    )
}
