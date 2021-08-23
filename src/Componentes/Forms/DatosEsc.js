import React from 'react'
import { DivLaIn } from './Elementos/DivLaIn'
import { DivLaRad } from './Elementos/DivLaRad'
import { DivLaSel } from './Elementos/DivLaSel'

export const DatosEsc = ({handleInput}) => {
    const Opts={
        Seleccionar:'0',
        Escuela:'1',
        Primaria:'2',
        Secundaria:'3',
        'Bachillerato / Preparatorio':'4',
        'Profesional (Ing. / Lic. / Etc.)':'5',
        Posgrado:'6',

    }
    const Opts2={
        Seleccionar:'0',
        'En Curso':'1',
        Concluido:'2'
    }
    return (
        <div className="pt-2">
             <hr/><h4 className="text">Escolaridad</h4><hr/>
            <h5 className=" fs-6">Ultimo grado cursado </h5>
                <div className="row pt-2 ">
                    <DivLaSel col="-6" label="Nivel Academico" name="escolares_nvlAca" handleInput={handleInput} Opts={Opts}/>
                    <DivLaSel col="-6" label="Concluido" name="escolares_nvlAcaConc" handleInput={handleInput} Opts={Opts2}/>
                </div>
                <div className="row pt-2 "> 
                    <DivLaIn col="-10 col-sm-6" label='Carrera' name='escolares_carrera' handleInput={handleInput} place='Carrera/Especialidad/Etc.'  />
                    <div className="col-8 col-sm-6">
                        <label className="col-10 form-label pt-2" >¿Tienes titulo?</label>
                        <div className="col-12 ">
                            <DivLaRad name="escolares_titulo" handleInput={handleInput} value="Si"/>
                            <DivLaRad name="escolares_titulo" handleInput={handleInput} value="No"/>
                            <DivLaRad name="escolares_titulo" handleInput={handleInput} value="En proceso"/>
                        </div>
                    </div>
                </div>
    
    </div>
    
    )
}
