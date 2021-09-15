import React from 'react'
import { useForm } from '../../Hooks/useForm'
import { DivLaBtn } from '../Elementos/DivLaBtn'
import { DivLaIn } from '../Elementos/DivLaIn'
import { DivLaTxt } from '../Elementos/DivLaTxt'

export const DatosJob = () => {
    const {handleInputForm}=useForm();

    return (
        <div className="pt-4">
            <hr /><h4 className="text">Ultimos 3 empleos</h4><hr />
            <div className="row pt-4 ">
                <DivLaIn col="-8 col-sm-8" label='No. de Seguridad Social' name='datosPers_nss' handleInput={handleInputForm} place='¡Pide ayuda si no lo tienes!'  />
                <DivLaBtn col="-4 col-md-4 " label="¿No sabes tu NSS?" place="CONSULTAR" />
            </div>
         <h5 className="pt-4 fs-6 ">Ultimo trabajo o actual</h5> 
            <div className="row pt-2">
                <DivLaIn col="-12 col-sm-6" label='Puesto' name='ultT_puesto' handleInput={handleInputForm} place='Agente/Chofer/Guardia/Barista/Etc.'/>
                <DivLaIn col="-12 col-sm-6" label='Departamento' name='ultT_dpto' handleInput={handleInputForm} place='RH/Sistemas/Mantenimiento/Limpieza/Etc.'/>
            </div>
            <div className="row pt-4">
                <DivLaIn col="-12 col-sm-6" label='Jefe inmediato' name='ultT_gfe' handleInput={handleInputForm} place='Nombre del jefe inmediato o encargado responsable'/>
                <DivLaIn col="-12 col-sm-6" label='Telefono de la empresa/RH' name='ultT_tel' handleInput={handleInputForm} place='CON LADA +10 DIGITOS'/>
            </div>
            <div className="row pt-4">
                <DivLaTxt col="-12 col-sm-6" label='Motivo(s) de separacion' name='ultT_motivo' handleInput={handleInputForm} place='Detalla segun tu punto de vista o tu testimonio'/>
                        
                <div className="col-12 col-sm-6">
                    <label className="form-label">Tiempo en la empresa:</label>
                        <div className="row">
                            <div className="input-group mb-3">
                                <input name="ultT_durac" onChange={handleInputForm} className="col-6 list-group-item text-center " placeholder="36" type="number"/>
                                <span className="col-2 col-sm-4 input-group-text">Meses</span>
                            </div>
                        </div>
                </div> 
            </div>
        <h5 className="pt-4 fs-6 ">Penultimo trabajo</h5> 
            <div className="row pt-2">
                <DivLaIn col="-12 col-sm-6" label='Puesto' name='penultT_puesto' handleInput={handleInputForm} place='Agente/Chofer/Guardia/Barista/Etc.'/>
                <DivLaIn col="-12 col-sm-6" label='Departamento' name='penultT_dpto' handleInput={handleInputForm} place='RH/Sistemas/Mantenimiento/Limpieza/Etc.'/>
            </div>
            <div className="row pt-4">
                <DivLaIn col="-12 col-sm-6" label='Jefe inmediato' name='penultT_gfe' handleInput={handleInputForm} place='Nombre del jefe inmediato o encargado responsable'/>
                <DivLaIn col="-12 col-sm-6" label='Telefono de la empresa/RH' name='penultT_tel' handleInput={handleInputForm} place='CON LADA +10 DIGITOS'/>
            </div>
            <div className="row pt-4">
                <DivLaTxt col="-12 col-sm-6" label='Motivo(s) de separacion' name='penultT_motivo' handleInput={handleInputForm} place='Detalla segun tu punto de vista o tu testimonio'/>
                <div className="col-12 col-sm-6">
                    <label className="form-label">Tiempo en la empresa:</label>
                        <div className="row">
                            <div className="input-group mb-3">
                                <input name="penultT_durac" onChange={handleInputForm} className="col-6 list-group-item text-center " placeholder="36" type="number"/>
                                <span className="col-2 col-sm-4 input-group-text">Meses</span>
                            </div>
                        </div>
                </div> 
            </div>


        <h5 className="pt-4 fs-6 ">Ante-penultimo trabajo</h5>       
            <div className="row pt-2">
                <DivLaIn col="-12 col-sm-6" label='Puesto' name='antpenultT_puesto' handleInput={handleInputForm} place='Agente/Chofer/Guardia/Barista/Etc.'/>
                <DivLaIn col="-12 col-sm-6" label='Departamento' name='antpenultT_dpto' handleInput={handleInputForm} place='RH/Sistemas/Mantenimiento/Limpieza/Etc.'/>
            </div>
            <div className="row pt-4">
                <DivLaIn col="-12 col-sm-6" label='Jefe inmediato' name='antpenultT_gfe' handleInput={handleInputForm} place='Nombre del jefe inmediato o encargado responsable'/>
                <DivLaIn col="-12 col-sm-6" label='Telefono de la empresa/RH' name='antpenultT_tel' handleInput={handleInputForm} place='CON LADA +10 DIGITOS'/>
            </div>
            <div className="row pt-4">
                <DivLaTxt col="-12 col-sm-6" label='Motivo(s) de separacion' name='antpenultT_motivo' handleInput={handleInputForm} place='Detalla segun tu punto de vista o tu testimonio'/>
                <div className="col-12 col-sm-6">
                    <label className="form-label">Tiempo en la empresa:</label>
                        <div className="row">
                            <div className="input-group mb-3">
                                <input name="antpenultT_durac" onChange={handleInputForm} className="col-6 list-group-item text-center " placeholder="36" type="number"/>
                                <span className="col-2 col-sm-4 input-group-text">Meses</span>
                            </div>
                        </div>
                </div> 
            </div>
        </div>
    )
}
