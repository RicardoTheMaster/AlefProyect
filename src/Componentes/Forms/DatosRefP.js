import React from 'react'
import { useForm } from '../../Hooks/useForm';
import { DivLaIn } from './Elementos/DivLaIn'

export const DatosRefP = () => {
    const {handleInputForm}=useForm();
    return (
        <div className="pt-2">  
             <hr/><h4 className="text">Datos de referencia</h4><hr/>

                <h5 className="pt-2 fs-6 fw-bold ">2 referencias personales (amigos o ex-comapeñeros de trabajo)</h5> 
                    <div className="row pt-2">
                        <h5 className="py-2 fs-6 ">Primera referencia:</h5> 
                        <DivLaIn col="-12 col-sm-6 " label="Nombre completo" name="refP1_nombre" handleInput={handleInputForm} place="Nombre Apellido Apellido"/>
                        <DivLaIn col="-12 col-sm-6 " label="Ocupacion " name="refP1_ocupacion" handleInput={handleInputForm} place="Estudiante/Trabajador/Agricultor/Etc."/>
                    </div>
                    <div className="row pt-4">
                        <DivLaIn col="-12 col-sm-6 " label="Domicilio " name="refP1_dom" handleInput={handleInputForm} place="Calle ## Fracc/Col CP Estado"/>
                        <DivLaIn col="-12 col-sm-6 " label="Telefono (celular o casa) " name="refP1_tel" handleInput={handleInputForm} place="CON LADA +10 DIGITOS" type="number"/>
                    </div>
                    <div className="row pt-2">
                        <h5 className="py-2 fs-6 ">Segunda referencia:</h5> 
                        <DivLaIn col="-12 col-sm-6 " label="Nombre completo" name="refP2_nombre" handleInput={handleInputForm} place="Nombre Apellido Apellido"/>
                        <DivLaIn col="-12 col-sm-6 " label="Ocupacion " name="refP2_ocupacion" handleInput={handleInputForm} place="Estudiante/Trabajador/Agricultor/Etc."/>
                    </div>
                    <div className="row pt-4">
                        <DivLaIn col="-12 col-sm-6 " label="Domicilio " name="refP2_dom" handleInput={handleInputForm} place="Calle ## Fracc/Col CP Estado"/>
                        <DivLaIn col="-12 col-sm-6 " label="Telefono (celular o casa) " name="refP2_tel" handleInput={handleInputForm} place="CON LADA +10 DIGITOS" type="number"/>
                    </div>
        </div>
    )
  
}
