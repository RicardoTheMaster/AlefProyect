import React from 'react'
import { useForm } from '../../Hooks/useForm';
import { DivLaIn } from '../Elementos/DivLaIn'

export const DatosRefV = () => {
    const {handleInputForm}=useForm();

    return (
        <div className="pt-2 animate__animated animate__backInUp ">
                <h5 className="pt-2 fs-6 fw-bold ">2 referencias vecinales (Que vivan a MAXIMO 1km a la redonda)</h5> 
                    <div className="row pt-2">
                        <h5 className="py-2 fs-6 ">Primera referencia:</h5> 
                        <DivLaIn col="-12 col-sm-6 " label="Nombre completo" name="refV1_nombre" handleInput={handleInputForm} place="Nombre Apellido Apellido"/>
                        <DivLaIn col="-12 col-sm-6 " label="Ocupacion " name="refV1_ocupacion" handleInput={handleInputForm} place="Estudiante/Trabajador/Agricultor/Etc."/>
                    </div>
                    <div className="row pt-4">
                        <DivLaIn col="-12 col-sm-6 " label="Domicilio " name="refV1_dom" handleInput={handleInputForm} place="Calle ## Fracc/Col CP Estado"/>
                        <DivLaIn col="-12 col-sm-6 " label="Telefono (celular o casa) " name="refV1_tel" handleInput={handleInputForm} place="CON LADA +10 DIGITOS" type="number"/>
                    </div>
                    <div className="row pt-2">
                        <h5 className="py-2 fs-6 ">Segunda referencia:</h5> 
                        <DivLaIn col="-12 col-sm-6 " label="Nombre completo" name="refP2_nombre" handleInput={handleInputForm} place="Nombre Apellido Apellido"/>
                        <DivLaIn col="-12 col-sm-6 " label="Ocupacion " name="refV2_ocupacion" handleInput={handleInputForm} place="Estudiante/Trabajador/Agricultor/Etc."/>
                    </div>
                    <div className="row pt-4">
                        <DivLaIn col="-12 col-sm-6 " label="Domicilio " name="refV2_dom" handleInput={handleInputForm} place="Calle ## Fracc/Col CP Estado"/>
                        <DivLaIn col="-12 col-sm-6 " label="Telefono (celular o casa) " name="refV2_tel" handleInput={handleInputForm} place="CON LADA +10 DIGITOS" type="number"/>
                    </div>
        
        </div>
    )
}
