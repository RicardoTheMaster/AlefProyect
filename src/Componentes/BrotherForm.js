import React from 'react'
import { DivLaIn } from './Forms/Elementos/DivLaIn'

export const BrotherForm = ({cantidad,handleBro}) => {
    return (
        <>
        <div className="row  py-2">
            <DivLaIn col="-12 fw-bolder" label={"Nombre Completo "+cantidad} name={'Hermano'+(cantidad-1).toString()} handleInput={handleBro} place="Nombre Apellido Apellido"/>
        </div>
        <div className="row  py-2">
            <DivLaIn col="-2" label="Edad " name={'Edad'+(cantidad-1).toString()} handleInput={handleBro} place="Años" type="number"/>
            <DivLaIn col="-5" label="Ocupacion " name={'Ocupacion'+(cantidad-1).toString()} handleInput={handleBro} place="Trabajador/Estudiante/Desportista/Etc."/>
        </div>

        </>
    )  
}
