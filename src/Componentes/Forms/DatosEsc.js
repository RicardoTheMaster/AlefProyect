import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Inp } from '../Elementos/Inp'
import * as Yup from "yup";
import { Sel } from '../Elementos/Sel';
import { Radio } from '../Elementos/Radio';

export const DatosEsc = () => {
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
        'En Curso':'1',
        Concluido:'2',
        Trunco:'3',
    }
    const Opts3={
        'Enero-Junio':'1',
        'Julio-Diciembre':'2',

    }
    const Opts4={
        'Titulo y cedula':'1',
        'Pasante':'2',
        'Certificado':'2',
        

    }
    const Opts5={
        '1':'1',
        '2':'2',
        '3':'2',
        'Mas de 3':'2',
        

    }
    const Opts6={
        'Maestria':'1',
        'Doctorado':'2',
        

    }
    const [enviado, setEnviado] = useState(false);
    const [Pos, setPos] = useState('No')

    const Personales=Yup.object().shape({
                    refP1_nom:Yup.string("¡Solo letras!").
                        min(2,'¡Muy corto!')
                        .max(50, '¡Muy largo!')
                        .required('¡Introduce un nombre!')
                        .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
                    refP1_ocup:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Ocupación!')
                                      .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
                    refP1_dom:Yup.string().min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Domicilio!')
                                      .matches(/^[aA-zZ\s0-9#.]+$/,"¡Unico signo permitido #!"),
                    refP1_tel:Yup.number("¡Solo numeros!").min(1000000000,'¡10 o 12 digitos!').max(999999999999, '¡Muy largo!').required('¡Telefono/Celular!'),
                    refP2_nom:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(50, '¡Muy largo!').required('¡Introduce un nombre!').matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
                    refP2_ocup:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Ocupación!')
                                  .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
                    refP2_dom:Yup.string().min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Domicilio!')
                                  .matches(/^[aA-zZ\s0-9#.]+$/,"¡Unico signo permitido #!"),
                    refP2_tel:Yup.number("¡Solo numeros!").min(1000000000,'¡10 o 12 digitos!').max(999999999999, '¡Muy largo!').required('¡Telefono/Celular!'),
                });
    return (

        <div className="pt-2">
                <hr />
            <h4 className="text">Datos Escolares</h4>
                <hr />          
              <Formik
                        initialValues={{
                            rad:'1',
                            refP1_nom:'',
                            refP1_ocup:'',
                            refP1_dom:'',
                            refP1_tel:'',
                            refP2_nom:'',
                            refP2_ocup:'',
                            refP2_dom:'',
                            refP2_tel:'',

                        }}

                        onSubmit={(valores, {resetForm})=>{
                            console.log(valores)
                            setEnviado(true);
                            setTimeout(()=>setEnviado(false),5000);
                        }}

                        
                        validationSchema={Personales}

                        validate={(e)=>{
                           if(e.rad && e.rad==='Si'){
                               setPos('Si')
                           }else if(e.rad && e.rad==='En proceso'){
                            setPos('En Proceso')
                           }
                        }}
                        
                        >
                        {
                        ({errors, touched})=>(
                            <Form>
                               
                                
                                <div className="row pt-2 ">
                                <Sel errors={errors.esc_nvlaca} touched={touched.esc_nvlaca} col="-6" label='Nivel Academico' name='esc_nvlaca' Opts={Opts} />
                                <Sel errors={errors.esc_avan} touched={touched.esc_avan} col="-6" label='Avance' name='esc_avan' Opts={Opts2} />

                                </div>
                                <div className="row pt-2 ">
                                    <div className="col-12">
                                        <label className="form-label pt-2 col-6">Periodo inicio:</label>
                                        <label className="form-label pt-2 col-6">&nbsp;&nbsp;Periodo término:</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <Sel errors={errors.esc_perIM} touched={touched.esc_perIM} col="-8 sm-5" label='Mes' name='esc_perIM' Opts={Opts3} />
                                            <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-4 sm-3" label="Año" name="esc_perIA" place="2010" type="number"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-6">
                                        <div className="row">
                                            <Sel errors={errors.esc_perTM} touched={touched.esc_perTM} col="-8 sm-5" label='Mes' name='esc_perTM' Opts={Opts3} />
                                            <Inp errors={errors.esc_perTA} touched={touched.esc_perTA} col="-4 sm-3" label="Año" name="esc_perTA" place="2021" type="number"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row pt-4 text-center">
                                    <label className="col-4 form-label pt-2 fw-bold">¿Tienes posgrado?</label>
                                    <Radio col ="-1" name="rad" label="Si" />
                                    <Radio col ="-1" name="rad" label="No" />
                                    <Radio col ="-2" name="rad" label="En proceso" />
                                </div>
                                {
                                    (Pos==='Si' || Pos ==='En Proceso') &&(
                                        <>
                                        {(Pos==='Si') && (
                                            <div className="text-center">
                                            <Sel errors={errors.esc_perTM} touched={touched.esc_perTM} col="-3" label='¿Cuantos?' name='esc_perTM' Opts={Opts5} />
                                            </div>
                                        )}
                                        <div className="row pt-2 ">
                                            <div className="col-12">
                                                <label className="form-label pt-2 col-6">Periodo inicio:</label>
                                                <label className="form-label pt-2 col-6">&nbsp;&nbsp;Periodo término:</label>
                                            </div>
                                            <div className="col-6">
                                                <div className="row">
                                                    <Sel errors={errors.esc_perIM} touched={touched.esc_perIM} col="-8 sm-5" label='Mes' name='esc_perIM' Opts={Opts3} />
                                                    <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-4 sm-3" label="Año" name="esc_perIA" place="2010" type="number"/>
                                                </div>
                                            </div>
                                            
                                            <div className="col-6">
                                                <div className="row">
                                                    <Sel errors={errors.esc_perTM} touched={touched.esc_perTM} col="-8 sm-5" label='Mes' name='esc_perTM' Opts={Opts3} />
                                                    <Inp errors={errors.esc_perTA} touched={touched.esc_perTA} col="-4 sm-3" label="Año" name="esc_perTA" place="2021" type="number"/>
                                                </div>
                                            </div>

                                            <div className="row pt-2 ">
                                                <Sel errors={errors.esc_perIM} touched={touched.esc_perIM} col="-12 col-sm-6" label='¿Cual es tu posgrado?' name='esc_perIM' Opts={Opts6} />

                                                <Inp errors={errors.refP2_dom} touched={touched.refP2_dom} col="-12 col-sm-6" label="Titulo" name="refP2_dom" place="En sistemas, En matematicas, etc."/>
                                            </div>
                                        </div>
                                        </>

                                    )
                                }

                                      <div className="row justify-content-center pt-5">
                                    <div className="col-4 text-center">
                                        <button type="" className="btn btn-secondary btn-lg"> Editar </button>
                                    </div>
                                    <div className="col-4 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg"> GUARDAR </button>
                                    </div>
                                </div>
                                <div className="row pt-1">
                                    <div className="col-6 text-start">
                                        <button type="" className="btn btn-outline-info" > Anterior </button>
                                    </div>
                                    <div className="col-6 text-end">
                                        <button type="" className="btn btn-outline-info"> Siguiente </button>
                                    </div>
                                </div>
                              
                                {
                                    (enviado &&(
                                    <div className="row pt-4">
                                     <p className="enviado fw-bold text-center"> ¡DATOS ENVIADOS CON EXITO! Puedes continuar a la siguiente sección.</p>   
                                    </div>
                                    
                                    )
                                    
                                    )
                                }
                               {
                                    console.log(errors)
                               }
                            </Form>
                        ) 
                        }
                    </Formik> 
                        
        </div>
    )
}
/*
  <div className="pt-2">
             <hr/><h4 className="text">Escolaridad</h4><hr/>
            <h5 className=" fs-6">Ultimo grado cursado </h5>
                <div className="row pt-2 ">
                    <DivLaSel col="-6" label="Nivel Academico" name="escolares_nvlAca" handleInput={handleInputForm} Opts={Opts}/>
                    <DivLaSel col="-6" label="Avance" name="escolares_nvlAcaConc" handleInput={handleInputForm} Opts={Opts2}/>
                </div>
                <div className="row pt-2 "> 
                    <DivLaIn col="-10 col-sm-6" label='Carrera' name='escolares_carrera' handleInput={handleInputForm} place='Carrera/Especialidad/Etc.'  />
                    <div className="col-8 col-sm-6">
                        <label className="col-10 form-label pt-2" >¿Tienes titulo?</label>
                        <div className="col-12 ">
                            <DivLaRad name="escolares_titulo" handleInput={handleInputForm} value="Si"/>
                            <DivLaRad name="escolares_titulo" handleInput={handleInputForm} value="No"/>
                            <DivLaRad name="escolares_titulo" handleInput={handleInputForm} value="En proceso"/>
                        </div>
                    </div>
                </div>
    
    </div>

*/
