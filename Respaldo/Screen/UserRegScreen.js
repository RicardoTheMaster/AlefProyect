import React, { useState } from 'react'
import { BrotherForm } from '../Componentes/BrotherForm';

export const UserRegScreen = () => {


    const [valor, newvalor] = useState(0);
    const handleInputChange=({target})=>{
        newvalor(target.value);
    }

    let hermanos=[];
    for (let index = 0; index < valor; index++) {
        hermanos.push(index);
    }

    
  
    const [Datos, setDatos] = useState({

        datosPers_apP:'',
        datosPers_apM:'',
        datosPers_nom:'',
        datosPers_fechaNac:'',
        datosPers_edad:'',
        datosPers_sex:'',
        datosPers_curp:'',
        datosPers_tel:'',
        datosPers_cel:'',
        datosPers_rfc:'',
        domicilio_calle:'',
        domicilio_noExt:'',
        domicilio_fracc:'',
        domicilio_mun:'',
        domicilio_estado:'',
        domicilio_nacion:'',
        domicilio_estCiv:'',
        
        escolares_nvlAca:'',
        escolares_nvlAcaConc:'',
        escolares_carrera:'',
        escolares_titulo:'',
        
        familia_nomP:'',
        familia_nomM:'',
        familia_numH:'',
        familia_herm:valor,
        
        refP1_nombre:'',
        refP1_ocupacion:'',
        refP1_tel:'',
        refP1_dom:'',
        
        refP2_nombre:'',
        refP2_ocupacion:'',
        refP2_tel:'',
        refP2_dom:'',
        
        refV1_nombre:'',
        refV1_ocupacion:'',
        refV1_tel:'',
        refV1_dom:'',
        
        refV2_nombre:'',
        refV2_ocupacion:'',
        refV2_tel:'',
        refV2_dom:'',
        
        
        ultT_puesto:'',
        ultT_dpto:'',
        ultT_gfe:'',
        ultT_tel:'',
        ultT_motivo:'',
        ultT_durac:'',
        
        
        penultT_puesto:'',
        penultT_dpto:'',
        penultT_gfe:'',
        penultT_tel:'',
        penultT_motivo:'',
        penultT_durac:'',
        
        
        antpenultT_puesto:'',
        antpenultT_dpto:'',
        antpenultT_gfe:'',
        antpenultT_tel:'',
        antpenultT_motivo:'',
        antpenultT_durac:'',
        
        
        datosMedic_salud:'',
        datosMedic_dep:'',
        datosMedic_gpoSan:'',
        datosMedic_fum:'',
        datosMedic_detFuma:'',
        datosMedic_tom:'',
        datosMedic_detTom:'',
        datosMedic_cir:'',
        datosMedic_detCir:'',
        datosMedic_acc:'',
        datosMedic_detAcc:'',
        
        
        ultDatos_esp1:'',
        ultDatos_esp2:'',
        ultDatos_esp3:'',

    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(Datos);
    }
    const handleInput=({target})=>{

    
    setDatos({
            ...Datos,
            [target.name]:target.value
        })
            
    }
  /*
  
  */
    
    return (
<>
<div className="container background2">
    <h1 className="marL mb-4 text">Registro de usuario</h1>
    <p className="lh-sm text ">
        Aqui iran las intrucciones que leeran los usuarios para el correcto llenado del formulario
        donde se les recomienda hagan este registro con tiempo  y con calma, los datos solo seran guardados unavez
        finalice y se valide que la informacion ingresada es correcta. En caso de tener dudas o preguntas respecto al llenado
        consultar con alguien mas. De ser posible contactar directamente con el personal de Alef Global
    </p>
        <div className="row border p-4">
            <form className="" onSubmit={handleSubmit}>
                <h4 className="text">Datos basicos</h4>
                <hr />
                <div className="row">
                    <div className="col">
                        <label className="form-label">Apellido paterno:</label>
                        <input name="datosPers_apP" onChange={handleInput} className="col-12 list-group-item" placeholder="Lara" type="text"/>
                    </div>

                    <div className="col">
                        <label className="form-label">Apellido materno:</label>
                        <input name="datosPers_apM" onChange={handleInput}className="col-12 list-group-item" placeholder="Orozco" type="text"/>
                    </div>
                    <div className="col">
                        <label className="form-label" >Nombre:</label>
                        <input name="datosPers_nom" onChange={handleInput}className="col-12 list-group-item" placeholder="Ricardo" type="text"/>
                    </div>
                </div>
                <div className="row py-4 ">
                    <div className="col-6 col-md-4">
                        <label className="form-label">Fecha de nacimiento:</label>
                        <input name="datosPers_fechaNac" onChange={handleInput} className="col-12 list-group-item  " placeholder="Rodriguez" type="date"/>
                    </div>
                    <div className="col-2">
                        <label className="form-label" >Edad:</label>
                        <input name="datosPers_edad" onChange={handleInput}className="col-12 list-group-item "  type="number" disabled />
                    </div>
                    <div className="col-4 col-md-3">
                        <label className="form-label" >Sexo:</label>
                        <select name="datosPers_sex" onChange={handleInput} className="col-12 form-select list-group-item " >
                            <option defaultValue>Seleccionar</option>
                            <option defaultValue ="1">Masculino</option>
                            <option defaultValue ="2">Femenino</option>
                        </select>
                    </div>

                </div>
                <div className="row py-2 ">
                    <div className="col-7 col-md-8">
                        <label className="form-label">CURP:</label>
                        <input name="datosPers_curp" onChange={handleInput}className="col-12 list-group-item  " placeholder="CURP" type="text"/>
                    </div>
                    <div className="col-5 col-md-4">
                        <label className="col-10 form-label text-center" >¿No sabes tu CURP?</label>
                        <button className="col-10 btn btn-secondary ">Consultar</button> 
                        </div>
                </div>

                <div className="row pt-4">
                    <div className="col-5">
                        <label className="form-label">Calle:</label>
                        <input name="domicilio_calle" onChange={handleInput}className="col-12 list-group-item" placeholder="Rio colorado" type="text"/>
                    </div>
                    <div className="col-2">
                        <label className="form-label">No. Ext:</label>
                        <input name="domicilio_noExt"onChange={handleInput} className="col-12 list-group-item" placeholder="123" type="number"/>
                    </div>
                    <div className="col-5">
                        <label className="form-label" >Col/Fracc:</label>
                        <input name="domicilio_fracc"onChange={handleInput} className="col-12 list-group-item" placeholder="Artemisas" type="text"/>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-6">
                        <label className="form-label">Municipio:</label>
                        <input name="domicilio_mun" onChange={handleInput}className="col-12 list-group-item" placeholder="Victoria" type="text"/>
                    </div>
                    <div className="col-6">
                        <label className="form-label">Estado:</label>
                        <input name="domicilio_estado"onChange={handleInput} className="col-12 list-group-item" placeholder="Durango" type="text"/>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-6">
                        <label className="form-label">Nacionalidad:</label>
                        <input name="domicilio_nacion" onChange={handleInput} className="col-12 list-group-item" placeholder="Mexicano" type="text"/>
                    </div>
                    <div className="col-6">
                        <label className="form-label">Estado civil:</label>
                        <select name="domicilio_estCiv"onChange={handleInput} className="col-12 form-select list-group-item " >
                            <option defaultValue>Seleccionar</option>
                            <option defaultValue="1">Casad@</option>
                            <option defaultValue="2">Solter@</option>
                            <option defaultValue="3">Divorciad@</option>
                            <option defaultValue="4">Viud@</option>
                        </select>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-6">
                        <label className="form-label">Telefono (casa):</label>
                        <input name="datosPers_tel" onChange={handleInput} className="col-12 list-group-item" placeholder="10 digitos" type="number"/>
                    </div>
                    <div className="col-6">
                        <label className="form-label">Celular:</label>
                        <input name="datosPers_cel"onChange={handleInput} className="col-12 list-group-item" placeholder="10 digitos" type="number"/>
                    </div>
                </div>
                <div className="row pt-4 ">
                    <div className="col-7 col-md-8">
                        <label className="form-label">RFC:</label>
                        <input name="datosPers_rfc"onChange={handleInput} className="col-12 list-group-item  " placeholder="CURP" type="text"/>
                    </div>
                    <div className="col-5 col-md-4">
                        <label className="col-10 form-label text-center" >¿No sabes tu RFC?</label>
                        <button className="col-10 btn btn-secondary ">Consultar</button> 
                    </div>
                </div>
                <div className="pt-4">
                <hr />
                <h4 className="text">Escolaridad</h4>
                <hr />
                </div>
                <h5 className=" fs-6">Ultimo grado cursado </h5>
                <div className="row pt-2 ">
                    <div className="col-6">
                        <label className="form-label">Nivel Academico:</label>
                        <select name="escolares_nvlAca"onChange={handleInput} className="col-12 form-select list-group-item " >
                            <option defaultValue>Seleccionar</option>
                            <option defaultValue="1">Escuela</option>
                            <option defaultValue="2">Primaria</option>
                            <option defaultValue="3">Secundaria</option>
                            <option defaultValue="4">Bachillerato / Preparatoria</option>
                            <option defaultValue="4">Profesional (Ing. / Lic. / Etc.)</option>
                            <option defaultValue="4">Posgrado</option>
                        </select>                 
                     </div>
                    <div className="col-6">
                        <label className="form-label" >Concluido:</label>
                        <select name="escolares_nvlAcaConc"onChange={handleInput} className="col-12 form-select list-group-item " >
                            <option defaultValue>Seleccionar</option>
                            <option defaultValue="1">En curso</option>
                            <option defaultValue="2">Concluido</option>
                        </select>                
                    </div>
                </div>
                <div className="row pt-4 ">
                    <div className="col-6">
                        <label className="form-label">Carrera:</label>
                        <input name="escolares_carrera"onChange={handleInput} className="col-12 list-group-item  " placeholder="CURP" type="text"/>
                    </div>
                    <div className="col-6">
                        <label className="col-10 form-label pt-2" >¿Tienes titulo?</label>
                        <div className="col-12 ">
                            <div className="form-check form-check-inline">
                                <input name="escolares_titulo"onChange={handleInput} className="form-check-input" type="radio"  id="inlineRadioOptions1" defaultValue="Si"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Si</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input name="escolares_titulo"onChange={handleInput} className="form-check-input" type="radio" id="inlineRadioOptions2" defaultValue="No"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">No</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input name="escolares_titulo"onChange={handleInput} className="form-check-input" type="radio"  id="inlineRadioOptions3" defaultValue="En Proceso" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">En proceso</label>
                            </div>
                        </div>
                    </div>


                <div className="pt-4">
                <hr />
                <h4 className="text">Datos familiares</h4>
                <hr />
                </div>
                    <div className="row pt-4">
                        <div className="col-6">
                            <label className="form-label">Padre:</label>
                            <input name="familia_nomP"onChange={handleInput} className="col-12 list-group-item" placeholder="-Na- Si no tienes" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Madre:</label>
                            <input name="familia_nomM"onChange={handleInput}className="col-12 list-group-item" placeholder="-Na- Si no tienes" type="text"/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12">
                            <label className="form-label">¿Cuantos hermanos tienes?</label>
                            <input name="familia_herm" onChange={handleInput, handleInputChange}
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
                                        {hermanos.map((x, i) => <BrotherForm key={i} cantidad={i+1}/> )}
                                </> )
                        )
                    }
                <div className="pt-4">
                    <hr />
                    <h4 className="text">Datos de referencia</h4>
                    <hr />
                </div>
                <h5 className="pt-2 fs-6 ">2 referencias personales (amigos o ex-comapeñeros detrabajo)</h5> 
                    <div className="row pt-2">
                        <h5 className="py-2 fs-6 fw-normal">Primera referencia:</h5> 
                        <div className="col-6 ">
                            <label className="form-label">Nombre:</label>
                            <input name="refP1_nombre" onChange={handleInput}className="col-12 list-group-item" placeholder="Nombre completo" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Ocupacion:</label>
                            <input name="refP1_ocupacion" onChange={handleInput}className="col-12 list-group-item" placeholder="Especificar" type="text"/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-6">
                            <label className="form-label">Domicilio:</label>
                            <input name="refP1_dom"onChange={handleInput} className="col-12 list-group-item" placeholder="con codigo postal" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Telefono (celular o casa):</label>
                            <input name="refP1_tel"onChange={handleInput} className="col-12 list-group-item" placeholder="Con lada" type="number"/>
                        </div>
                        
                    </div>
                    <div className="row pt-4">
                        <h5 className="py-2 fs-6 fw-normal">Segunda referencia:</h5> 
                        <div className="col-6 ">
                            <label className="form-label">Nombre:</label>
                            <input name="refP2_nombre" onChange={handleInput}className="col-12 list-group-item" placeholder="Nombre completo" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Ocupacion:</label>
                            <input name="refP2_ocupacion" onChange={handleInput}className="col-12 list-group-item" placeholder="Especificar" type="text"/>
                        </div>
                        
                    </div>
                    <div className="row pt-4 pb-4">
                        <div className="col-6">
                            <label className="form-label">Domicilio:</label>
                            <input name="refP2_domicilio" onChange={handleInput}className="col-12 list-group-item" placeholder="con codigo postal" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Telefono (celular o casa):</label>
                            <input name="refP2_tel"onChange={handleInput} className="col-12 list-group-item" placeholder="Con lada" type="number"/>
                        </div>
                    </div>
                    <h5 className="pt-4 fs-6 ">2 referencias vecinales (Que vivan a maximo 1km a la redonda)</h5> 
                    <div className="row pt-2">
                        <h5 className="py-2 fs-6 fw-normal">Primera referencia:</h5> 
                        <div className="col-6 ">
                            <label className="form-label">Nombre:</label>
                            <input name="refV1_nombre"onChange={handleInput} className="col-12 list-group-item" placeholder="Nombre completo" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Ocupacion:</label>
                            <input name="refV1_ocupacion"onChange={handleInput} className="col-12 list-group-item" placeholder="Especificar" type="text"/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-6">
                            <label className="form-label">Domicilio:</label>
                            <input name="refV1_dom"onChange={handleInput} className="col-12 list-group-item" placeholder="con codigo postal" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Telefono (celular o casa):</label>
                            <input name="refV1_tel"onChange={handleInput} className="col-12 list-group-item" placeholder="Con lada" type="number"/>
                        </div>
                        
                    </div>
                    <div className="row pt-4">
                        <h5 className="py-2 fs-6 fw-normal">Segunda referencia:</h5> 
                        <div className="col-6 ">
                            <label className="form-label">Nombre:</label>
                            <input name="refV2_nombre"onChange={handleInput} className="col-12 list-group-item" placeholder="Nombre completo" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Ocupacion:</label>
                            <input name="refV2_ocupacion" onChange={handleInput}className="col-12 list-group-item" placeholder="Especificar" type="text"/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-6">
                            <label className="form-label">Domicilio:</label>
                            <input name="refV2_dom" onChange={handleInput}className="col-12 list-group-item" placeholder="con codigo postal" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Telefono (celular o casa):</label>
                            <input name="refV2_tel" onChange={handleInput}className="col-12 list-group-item" placeholder="Con lada" type="number"/>
                        </div>
                    </div>
                    <div className="pt-4">
                        <hr />
                            <h4 className="text">Ultimos 3 empleos</h4>
                        <hr />
                    </div>

                    <div className="row pt-4 ">
                        <div className="col-8 col-md-8">
                            <label className="form-label">Numero de Seguridad Social (NSS):</label>
                            <input name="datosPers_nss"onChange={handleInput} className="col-12 list-group-item  " placeholder="CURP" type="text"/>
                        </div>
                        <div className="col-4 col-md-4">
                            <label className="col-10 form-label text-center" >Consulta tu NSS</label>
                            <button className="col-10 btn btn-secondary ">Consultar</button> 
                        </div>

                    </div>

                    <h5 className="pt-4 fs-6 ">Ultimo trabajo o actual</h5> 
                    <div className="row pt-2">
                        <div className="col-6 ">
                            <label className="form-label">Puesto:</label>
                            <input name="ultT_puesto"onChange={handleInput} className="col-12 list-group-item" placeholder="Nombre completo" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Departamento:</label>
                            <input name="ultT_dpto" onChange={handleInput}className="col-12 list-group-item" placeholder="Especificar" type="text"/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-6">
                            <label className="form-label">Jefe inemdiato:</label>
                            <input name="ultT_gfe"onChange={handleInput} className="col-12 list-group-item" placeholder="con codigo postal" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Telefono RH/Empresa:</label>
                            <input name="ultT_tel"onChange={handleInput} className="col-12 list-group-item" placeholder="Con lada" type="number"/>
                        </div> 
                    </div>
                    <div className="row pt-4">
                         <div className="col-8">
                            <label className="form-label">Detala brevemente el motivo de tu separacion:</label>
                            <textarea  name="ultT_motivo"onChange={handleInput} className="col-12 list-group-item" placeholder="Desde tu punto vista / tu testimonio" />
                        </div> 
                        <div className="col-4">
                            <label className="form-label">Tiempo en la empresa:</label>
                            <div className="col-12 row">
                                <input name="ultT_durac" onChange={handleInput}className="col-5 list-group-item text-center " placeholder="36" type="number"/>
                                <span className="col-6 col-md-4 input-group-text" id="basic-addon2">Meses</span>
                            </div>
                        </div> 
                    </div>
                    <h5 className="pt-4 fs-6 ">Penultimo trabajo</h5> 
                    <div className="row pt-2">
                        <div className="col-6 ">
                            <label className="form-label">Puesto:</label>
                            <input name="penultT_puesto" onChange={handleInput}className="col-12 list-group-item" placeholder="Nombre completo" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Departamento:</label>
                            <input name="penultT_dpto"onChange={handleInput} className="col-12 list-group-item" placeholder="Especificar" type="text"/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-6">
                            <label className="form-label">Jefe inemdiato:</label>
                            <input name="penultT_gfe" onChange={handleInput}className="col-12 list-group-item" placeholder="con codigo postal" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Telefono RH/Empresa:</label>
                            <input name="penultT_tel"onChange={handleInput} className="col-12 list-group-item" placeholder="Con lada" type="number"/>
                        </div> 
                    </div>
                    <div className="row pt-4">
                        <div className="col-8">
                            <label className="form-label">Detala brevemente el motivo de tu separacion:</label>
                            <textarea  name="penultT_motivo" onChange={handleInput}className="col-12 list-group-item" placeholder="Desde tu punto vista / tu testimonio" />
                        </div> 
                        <div className="col-4">
                            <label className="form-label">Tiempo en la empresa:</label>
                            <div className="col-12 row">
                                <input name="penultT_durac"onChange={handleInput} className="col-5 list-group-item text-center " placeholder="36" type="number"/>
                                <span className="col-6 col-md-4 input-group-text" id="basic-addon2">Meses</span>
                            </div>
                        </div>  
                    </div>
                    <h5 className="pt-4 fs-6 ">Ante penultimo trabajo</h5> 
                    <div className="row pt-2">
                        <div className="col-6 ">
                            <label className="form-label">Puesto:</label>
                            <input name="antpenultT_puesto" onChange={handleInput}className="col-12 list-group-item" placeholder="Nombre completo" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Departamento:</label>
                            <input name="antpenultT_dpto"onChange={handleInput} className="col-12 list-group-item" placeholder="Especificar" type="text"/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-6">
                            <label className="form-label">Jefe inemdiato:</label>
                            <input name="antpenultT_gfe"onChange={handleInput} className="col-12 list-group-item" placeholder="con codigo postal" type="text"/>
                        </div>
                        <div className="col-6">
                            <label className="form-label">Telefono RH/Empresa:</label>
                            <input name="antpenultT_tel" onChange={handleInput}className="col-12 list-group-item" placeholder="Con lada" type="number"/>
                        </div> 
                    </div>
                    <div className="row pt-4">
                        <div className="col-8">
                            <label className="form-label">Detala brevemente el motivo de tu separacion:</label>
                            <textarea  name="antpenultT_motivo" onChange={handleInput}className="col-12 list-group-item" placeholder="Desde tu punto vista / tu testimonio" />
                        </div> 
                        <div className="col-4">
                            <label className="form-label">Tiempo en la empresa:</label>
                            <div className="col-12 row">
                                <input name="antpenultT_durac" onChange={handleInput}className="col-5 list-group-item text-center " placeholder="36" type="number"/>
                                <span className="col-6 col-md-4 input-group-text" id="basic-addon2">Meses</span>
                            </div>
                        </div> 
                    </div>

                    <div className="pt-4">
                        <hr />
                            <h4 className="text">Datos medicos:</h4>
                        <hr />
                    </div>

                    <div className="row pt-2 ">
                        <div className="col-6">
                            <label className="form-label">¿Cómo considera su saludo?</label>
                            <select name="datosMedic_salud"onChange={handleInput} className="col-12 form-select list-group-item " >
                                <option defaultValue>Seleccionar</option>
                                <option defaultValue="1">Buena</option>
                                <option defaultValue="2">Mala</option>
                                <option defaultValue="3">Promedio</option>
                            </select>                 
                        </div>
                        <div className="col-6 col-md-4">
                            <label className="form-label" >¿Practica algun deporte?:</label>
                            <select name="datosMedic_dep" onChange={handleInput}className="col-12 form-select list-group-item " >
                                <option defaultValue>Seleccionar</option>
                                <option defaultValue="1">Si</option>
                                <option defaultValue="2">No</option>
                            </select>                
                        </div>
                     </div>
                     <div className="row pt-4">
                        <div className="col-4">
                            <label className="form-label">Grupo sanguinio:</label>
                            <input  name="datosMedic_gpoSan" onChange={handleInput}className="col-12 list-group-item" placeholder="-Na- en caso de no saber" />
                        </div> 
                        <div className="col-8 col-md-7 row">
                             <div className="col-6">
                                 <label className="form-label">Fuma:</label>
                                 <select name="datosMedic_fum"onChange={handleInput} className="col-12 form-select list-group-item " >
                                    <option defaultValue>Seleccionar</option>
                                    <option defaultValue="1">Si</option>
                                    <option defaultValue="2">No</option>
                                </select>                       
                            </div>
                             <div className="col-6">
                                 <label className="form-label">Toma:</label>
                    
                                 <select name="datosMedic_tom" onChange={handleInput}className="col-12 form-select list-group-item " >
                                    <option defaultValue>Seleccionar</option>
                                    <option defaultValue="1">Si</option>
                                    <option defaultValue="2">No</option>
                                </select>            
                            </div>
                        </div> 
                    </div>

                    <div className="row pt-4">
                        <div className="col-12">
                            <label className="form-label">En caso de haber constestado SI a Fuma o Toma:</label>
                            <textarea  name="datosMedic_detFuma" onChange={handleInput}className="col-12 list-group-item" placeholder="Detalle cada cuando lo hace" />
                        </div> 
                    </div>
                    <div className="row pt-4">
                        <div className="col-12">
                            <label className="form-label">A continuacion detalle si tiene/tuvo alguna enfermedad cronica/degenerativa/heredada/etc:</label>
                            <textarea  name="datosMedic_detTom"onChange={handleInput} className="col-12 list-group-item" placeholder="Efermedad, molestias, malestares, etc." />
                        </div> 
                    </div>
                    <div className="row pt-4">
                        <div className="col-6">
                            <label className="form-label">Cirugías:</label>
                            <div className="col-8 col-md-6">
                                <select name="datosMedic_cir"onChange={handleInput} className="col-6 form-select list-group-item " >
                                    <option defaultValue>Seleccionar</option>
                                    <option defaultValue="1">Si</option>
                                    <option defaultValue="2">No</option>
                                </select> 
                            </div>   
                       </div> 
                       <div className="col-6 ">
                            <label className="form-label">Accidentes (Ultimo año):</label>
                            <div className="col-8 col-md-6">
                                <select name="datosMedic_acc" onChange={handleInput}className="col-6 form-select list-group-item " >
                                        <option defaultValue>Seleccionar</option>
                                        <option defaultValue="1">Si</option>
                                        <option defaultValue="2">No</option>
                                </select> 
                            </div>
                       </div> 
                    </div>
                    <div className="row pt-4">
                        <div className="col-6">
                            <label className="form-label">Detalle su(s) cirugia(s):</label>
                            <textarea name="datosMedic_detCir" onChange={handleInput} className="col-12 list-group-item" placeholder="Detalle la cirugia" />
                        </div> 
                        <div className="col-6">
                            <label className="form-label">Detalle su(s) accidentes(s):</label>
                            <textarea  name="datosMedic_detAcc" onChange={handleInput}className="col-12 list-group-item" placeholder="Detalle un poco" />
                        </div> 
                    </div>

                    <div className="pt-4">
                        <hr />
                            <h4 className="text">Ultimos datos adicionales: Pero IMPORTANTES</h4>
                        <hr />
                    </div>

                    <div className="row pt-4">
                            <label className="form-label">Selecciona 3 areas de espcialidad a las cuales te gustaria postular:</label>
                            <div className="col-4 ">
                                    <select name="ultDatos_esp1"onChange={handleInput} className="col- form-select list-group-item " >
                                            <option defaultValue>Seleccionar</option>
                                            <option defaultValue="1">Ganadería. </option>
                                            <option defaultValue="2">Software. </option>
                                            <option defaultValue="3">Minería.  </option>
                                            <option defaultValue="4">Metalurgia.</option>
                                            <option defaultValue="5">Pesca.</option>
                                            <option defaultValue="6">Bienes raíces.</option>
                                            <option defaultValue="7">Construcción.</option>
                                            <option defaultValue="8">Transporte aéreo.</option>
                                            <option defaultValue="9">Telecomunicaciones. </option>
                                            <option defaultValue="10">Turismo. </option>
                                            <option defaultValue="11">Cinematográfica. </option>
                                            <option defaultValue="12">Editorial. </option>
                                            <option defaultValue="13">Mercados mayoristas. </option>
                                            <option defaultValue="14">Productores agrícolas. </option>
                                            <option defaultValue="15">Empresas de diseño.  </option>
                                            <option defaultValue="16">Electricidad. </option>
                                            <option defaultValue="17">Cobranzas. </option>
                                            <option defaultValue="18">Vigilancia. </option>
                                            <option defaultValue="19">Derecho. </option>
                                            <option defaultValue="20">Ventas. </option>
                                    </select> 
                                    
                            </div>
                            <div className="col-4 ">
                            <select name="ultDatos_esp2" onChange={handleInput}className="col- form-select list-group-item " >
                                            <option defaultValue>Seleccionar</option>
                                            <option defaultValue="1">Ganadería. </option>
                                            <option defaultValue="2">Software. </option>
                                            <option defaultValue="3">Minería.  </option>
                                            <option defaultValue="4">Metalurgia.</option>
                                            <option defaultValue="5">Pesca.</option>
                                            <option defaultValue="6">Bienes raíces.</option>
                                            <option defaultValue="7">Construcción.</option>
                                            <option defaultValue="8">Transporte aéreo.</option>
                                            <option defaultValue="9">Telecomunicaciones. </option>
                                            <option defaultValue="10">Turismo. </option>
                                            <option defaultValue="11">Cinematográfica. </option>
                                            <option defaultValue="12">Editorial. </option>
                                            <option defaultValue="13">Mercados mayoristas. </option>
                                            <option defaultValue="14">Productores agrícolas. </option>
                                            <option defaultValue="15">Empresas de diseño.  </option>
                                            <option defaultValue="16">Electricidad. </option>
                                            <option defaultValue="17">Cobranzas. </option>
                                            <option defaultValue="18">Vigilancia. </option>
                                            <option defaultValue="19">Derecho. </option>
                                            <option defaultValue="20">Ventas. </option>
                                    </select>
                            </div>
                            <div className="col-4 ">
                            <select name="ultDatos_esp3" onChange={handleInput}className="col- form-select list-group-item " >
                                            <option defaultValue>Seleccionar</option>
                                            <option defaultValue="1">Ganadería. </option>
                                            <option defaultValue="2">Software. </option>
                                            <option defaultValue="3">Minería.  </option>
                                            <option defaultValue="4">Metalurgia.</option>
                                            <option defaultValue="5">Pesca.</option>
                                            <option defaultValue="6">Bienes raíces.</option>
                                            <option defaultValue="7">Construcción.</option>
                                            <option defaultValue="8">Transporte aéreo.</option>
                                            <option defaultValue="9">Telecomunicaciones. </option>
                                            <option defaultValue="10">Turismo. </option>
                                            <option defaultValue="11">Cinematográfica. </option>
                                            <option defaultValue="12">Editorial. </option>
                                            <option defaultValue="13">Mercados mayoristas. </option>
                                            <option defaultValue="14">Productores agrícolas. </option>
                                            <option defaultValue="15">Empresas de diseño.  </option>
                                            <option defaultValue="16">Electricidad. </option>
                                            <option defaultValue="17">Cobranzas. </option>
                                            <option defaultValue="18">Vigilancia. </option>
                                            <option defaultValue="19">Derecho. </option>
                                            <option defaultValue="20">Ventas. </option>
                                    </select> 
                            </div>
                            
                    
                    
                    </div>
                   
                </div>
                <div className="row col-12 pt-5">
                <button type="submit" className="btn btn-primary"> MANDAR DATOS</button>
                </div>
                <div className="row col-12 pt-5">
                <p className="col-6"> {

                    JSON.stringify(Datos,null,11)
                    
                                
                }</p>
                </div>
            </form>
        </div>
    </div>
</>
    )
}
