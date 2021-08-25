import React from 'react'
import { useForm } from '../../Hooks/useForm';
import { DivLaIn } from './Elementos/DivLaIn';
import { DivLaSel } from './Elementos/DivLaSel';
import { DivLaTxt } from './Elementos/DivLaTxt';
import { BRM, SN } from './Elementos/Opts'

export const DatosMedic = () => {
    //                    <DivLaSel col="-5 col-md-5" label="Sexo" name="datosPers_sex" handleInput={handleInput} Opts={Opts}/>
    const {handleInputForm}=useForm();


    return (
        <div className="pt-2">
            <hr /><h4 className="text">Datos medicos:</h4><hr />
                <div className="row pt-2 ">     
                    <DivLaSel col="-8 col-sm-6" label="¿Como considera su salud?" name="datosMedic_salud" handleInput={handleInputForm} Opts={BRM}/>
                    <DivLaSel col="-8 col-sm-6" label="¿Practica algún deporte?" name="datosMedic_dep" handleInput={handleInputForm} Opts={SN}/>
                </div>
                <div className="row pt-4">
                    <DivLaIn col="-12 col-sm-6" label='Grupo sanguinio' name='datosMedic_gpoSan' handleInput={handleInputForm} place='NA si no sabes cual es'  />
                    <DivLaSel col="-6 col-sm-3" label="¿Fuma?" name="datosMedic_fum" handleInput={handleInputForm} Opts={SN}/>
                    <DivLaSel col="-6 col-sm-3" label="¿Toma?" name="datosMedic_tom" handleInput={handleInputForm} Opts={SN}/>
 
                </div>
                    <DivLaTxt col="-12 pt-4" label='En caso de haber constestado SI a FUMAR' name='datosMedic_detFuma' handleInput={handleInputForm} place='¿Cuando fumas? ¿Cuanto fumas? etc.'  />
                    <DivLaTxt col="-12 pt-4" label='En caso de haber constestado SI a TOMAR' name='datosMedic_detTom' handleInput={handleInputForm} place='¿Cuando tomas? ¿Cuanto tomas? etc.'  />

                    <div className="row pt-4">
                    <DivLaSel col="-12 col-sm-6" label="¿Ha tenido cirugías?" name="datosMedic_cir" handleInput={handleInputForm} Opts={SN}/>
                    <DivLaSel col="-12 col-sm-6" label="¿Ha tenido accidentes?" name="datosMedic_cir" handleInput={handleInputForm} Opts={SN}/>

                    </div>
                    <div className="row pt-4">
                    <DivLaTxt col="-12 pt-4" label='Detalle a profundidad si ha tenido cirugias' name='datosMedic_detCir' handleInput={handleInputForm} place='Hace cuando fue la ciruga, porque la cirugia, etc.'  />
                    <DivLaTxt col="-12 pt-4" label='Detalle a profundidad si ha tenido accidentes' name='datosMedic_detAcc' handleInput={handleInputForm} place='Hace cuando fue el acccidente, como y porque paso el accidente'  />

                    </div>
        </div>
    )
}
