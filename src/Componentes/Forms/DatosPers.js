import React, { useContext } from 'react'
import { UserContext } from '../../Hooks/UserContext'
import { DivLaBtn } from './Elementos/DivLaBtn'
import { DivLaIn } from './Elementos/DivLaIn'
import { DivLaSel } from './Elementos/DivLaSel'

export const DatosPers = ({handleInput}) => {
        const context = useContext(UserContext)
        const Opts={
            Seleccionar:'0',
            Masculino:'1',
            Femenino:'2',
        }
        const Opts2={
            Seleccionar:'0',
            Mexicana:'1',
            Estadounidense:'2',

        }
    return (
        <div>
                <hr />
            <h4 className="text">Datos personales</h4>
                <hr />          
                <div className="row ">
                    <DivLaIn col="-12 col-sm-4" label='Apellido paterno' name='datosPers_apP' handleInput={handleInput} place='Rodriguez'  />
                    <DivLaIn col="-12 col-sm-4" label='Apellido materno' name="datosPers_apM" handleInput={handleInput} place="Orozco" />
                    <DivLaIn col="-12 col-sm-4" label='Nombre (s)' name="datosPers_nom" handleInput={handleInput} place="Ricardo"/>
                 </div>
                <div className="row py-4 ">
                    <DivLaIn col="-8 col-sm-5" label="Fecha de nacimiento" name="datosPers_fechaNac" handleInput={handleInput} type="date"/>
                    <DivLaIn col="-3 col-sm-2" label="Edad" value={context} name="datosPers_edad" handleInput={handleInput} type="number" disabled />
                    <DivLaSel col="-5 col-md-5" label="Sexo" name="datosPers_sex" handleInput={handleInput} Opts={Opts}/>
                </div>
                <div className="row pt-2">
                    <DivLaIn col="-8 col-sm-4" label="Telefono (casa)" name="datosPers_tel" handleInput={handleInput} place="CON LADA: +52 10 DIGITOS" type="number" />
                    <DivLaIn col="-8 col-sm-4" label="Telefono (celular)" name="datosPers_cel" handleInput={handleInput} place="CON LADA: +52 10 DIGITOS" type="number" />
                    <DivLaSel col="-5 col-sm-4" label="Nacionalidad" name="datosPers_nacion" handleInput={handleInput} Opts={Opts2}/>

                </div>
                <div className="row pt-4 ">
                    <DivLaIn col="-7 " label="CURP" name="datosPers_curp" handleInput={handleInput} place="LAOX990903HDRGC02" type="text" />
                    <DivLaBtn col="-5 " label="¿No sabes tu CURP?" place="CONSULTAR" />
                </div>
                <div className="row pt-4 ">
                    <DivLaIn col="-7 " label="RFC" name="datosPers_rfc" handleInput={handleInput} place="LAOX990903KD4" type="text" />
                    <DivLaBtn col="-5 " label="¿No sabes tu RFC?" place="CONSULTAR" />         
                </div>
                        
        </div>
    )
}
