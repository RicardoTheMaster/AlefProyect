import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Inp } from '../Elementos/Inp'
import * as Yup from "yup";
import { Sel } from '../Elementos/Sel';
import { Radio } from '../Elementos/Radio';
import "animate.css"


export const DatosEsc = () => {
    const Opts={
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
    const [nvl, setnvl] = useState('')
    const [year, setYear] = useState(0)

    const Personales=Yup.object().shape({
                    esc_nvlaca:Yup.string("¡HACKERMAN!").required('¡Escoge!'),
                    esc_avan:Yup.string("¡HACKERMAN!").required('¡Escoge!'),
                    esc_perIM:Yup.string("¡HACKERMAN!").required('¡Escoge!'),
                    esc_perIA:Yup.number("¡Solo numeros!").min(1970,'¡Eres muy mayor!').max(2030, '¡No dura tanto!').required('¡Año de ingreso!'),
                    esc_perTM:Yup.string("¡HACKERMAN!").required('¡Escoge!'),
                    esc_perTA:Yup.number("¡Solo numeros!").min(year+2,'¡Muy corto!').max(year+10, '¡No dura tanto!').required('¡Año de término!'),
                    esc_pos:Yup.string("¡HACKERMAN!"),
                    esc_posperIA:Yup.number("¡Solo numeros!").min(1970,'¡Eres muy mayor!').max(2030, '¡No dura tanto!'),
                    esc_posperTA:Yup.number("¡Solo numeros!").min(year+2,'¡Muy corto!').max(year+10, '¡No dura tanto!'),
                    esc_posNom:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!')
                    .matches(/^[aA-zZ\s0-9.]+$/,"¡Caracteres no permitidos!"),

                  });
    return (

        <div className="pt-2 animate__animated animate__backInUp  ">
                <hr />
            <h4 className="text">Datos Escolares</h4>
                <hr />          
              <Formik
                        initialValues={{
                            esc_pos:'',
                            esc_nvlaca:'',
                            esc_avan:'',
                            esc_perIM:'',
                            esc_perIA:'',
                            esc_perTM:'',
                            esc_perTA:'',
                            esc_Npos:'',
                            esc_nvlaca:'',
                            esc_nvlaca:'',
                            esc_nvlaca:'',
                            esc_nvlaca:'',

                        }}

                        onSubmit={(valores, {resetForm})=>{
                            setEnviado(true);
                            setTimeout(()=>setEnviado(false),5000);
                        }}

                        
                        validationSchema={Personales}

                        validate={(e)=>{
                            if( e.esc_nvlaca==="Posgrado"){
                                setnvl(e.esc_nvlaca)
                                if(e.esc_pos && e.esc_pos==='Si' ){
                                    setPos('Si')
                                }else if(e.esc_pos && e.esc_pos==='En proceso'){
                                    setPos('En Proceso')
                                }else{
                                    setPos('No')
                                }
                            }else{
                                setnvl(e.esc_nvlaca)
                                setPos('No')
                            }
                            
                            if(e.esc_perIA){
                                setYear(e.esc_perIA)
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
                                {
                                    nvl==='Posgrado' &&
                                    <div className="row pt-4 text-center animate__animated animate__backInUp ">
                                    <label className="col-4 form-label pt-2 fw-bold">¿Tienes 2 o mas posgrados?</label>
                                    <Radio col ="-1" name="esc_pos" label="Si" />
                                    <Radio col ="-1" name="esc_pos" label="No" errors={errors.esc_pos} touched={touched.esc_pos}/>
                                    <Radio col ="-2" name="esc_pos" label="En proceso" />
                                    </div>
                                }
                                
                                {
                                    (Pos==='Si' || Pos ==='En Proceso') &&(
                                        <div className="animate__animated animate__backInUp pt-4">
                                        <hr/>
                                        {(Pos==='Si') && (
                                            <div className="row pt-2 text-center">
                                                
                                                    <Sel errors={errors.esc_Npos} touched={touched.esc_Npos} col="-3" label='¿Cuantos?' name='esc_Npos' Opts={Opts5} />
                                                <div className="col-9">
                                                    <label className="form-label pt-2 col-6 align-bottom fw-bold animate__animated animate__flash animate__delay-2s " >Por favor, ingresa los datos del ultimo ó del que creas es mas importante.</label>
                                                </div>
                                            </div>
                                        )}
                                        <div className="row pt-2 ">
                                            <div className="col-12">
                                                <label className="form-label pt-2 col-6">Periodo inicio:</label>
                                                <label className="form-label pt-2 col-6">&nbsp;&nbsp;Periodo término:</label>
                                            </div>
                                            <div className="col-6">
                                                <div className="row">
                                                    <Sel errors={errors.esc_posperIM} touched={touched.esc_posperIM} col="-8 sm-5" label='Mes' name='esc_posperIM' Opts={Opts3} />
                                                    <Inp errors={errors.esc_posperIA} touched={touched.esc_posperIA} col="-4 sm-3" label="Año" name="esc_posperIA" place="2010" type="number"/>
                                                </div>
                                            </div>
                                            
                                            <div className="col-6">
                                                <div className="row">
                                                    <Sel errors={errors.esc_posperTM} touched={touched.esc_posperTM} col="-8 sm-5" label='Mes' name='esc_posperTM' Opts={Opts3} />
                                                    <Inp errors={errors.esc_posperTA} touched={touched.esc_posperTA} col="-4 sm-3" label="Año" name="esc_posperTA" place="2021" type="number"/>
                                                </div>
                                            </div>

                                            <div className="row pt-2 ">
                                                <Sel errors={errors.esc_posDM} touched={touched.esc_posDM} col="-12 col-sm-6" label='¿Cual es tu posgrado?' name='esc_posDM' Opts={Opts6} />
                                                <Inp errors={errors.esc_posNom} touched={touched.esc_posNom} col="-12 col-sm-6" label="Titulo" name="esc_posNom" place="En sistemas, En matematicas, etc."/>
                                            </div>
                                        </div>
                                        </div>

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
