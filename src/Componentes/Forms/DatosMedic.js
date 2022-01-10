import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { blood, BRM, SN } from '../Elementos/Opts'
import { Inp } from '../Elementos/Inp'
import * as Yup from "yup";
import { Sel } from '../Elementos/Sel';
import axios from 'axios';


export const DatosMedic = () => {
    
    const [enviado, setEnviado] = useState(false);


    const Personales=Yup.object().shape({
                            medic_salud:Yup.string().required("¡Escoge uno!"),
                            medic_dep:Yup.string().required("¡Escoge uno!"),
                            medic_san:Yup.string().required("¡Escoge uno!"),
                            medic_tom:Yup.string().required("¡Escoge uno!"),
                            medic_fum:Yup.string().required("¡Escoge uno!"),
                            medic_dettom:Yup.string("¡Solo letras!").min(3,'¡Muy corto!').max(100, '¡Muy largo!').required('¡Registra tus motivos!')
                                       .matches(/^[aA-zZ0-9\s.,]+$/,"¡Caracteres no validos!").required("¡Detalla tus motivos!"),
                            medic_detfum:Yup.string("¡Solo letras!").min(3,'¡Muy corto!').max(100, '¡Muy largo!').required('¡Registra tus motivos!')
                                       .matches(/^[aA-zZ0-9\s.,]+$/,"¡Caracteres no validos!").required("¡Detalla tus motivos!"),
                            medic_cir:Yup.string().required("¡Escoge uno!"),
                            medic_acc:Yup.string().required("¡Escoge uno!"),
                            medic_detcir:Yup.string("¡Solo letras!").min(3,'¡Muy corto!').max(100, '¡Muy largo!').required('¡Registra tus motivos!')
                                       .matches(/^[aA-zZ0-9\s.,]+$/,"¡Caracteres no validos!").required("¡Detalla tus motivos!"),
                            medic_detacc:Yup.string("¡Solo letras!").min(3,'¡Muy corto!').max(100, '¡Muy largo!').required('¡Registra tus motivos!')
                                       .matches(/^[aA-zZ0-9\s.,]+$/,"¡Caracteres no validos!").required("¡Detalla tus motivos!"),

                });

                const [consult, setconsult] = useState()
                const [flag, setflag] = useState(false)
                const id='61a4557dc917e8f80c770934';
            
                const consulta= async ()=>{
                      try{
                        const res=await fetch("http://localhost:4500/api/users/medicos/"+id);
                        const post=await res.json();
                        if(!post.medic_dep){
                            setflag(false)
                            setconsult({
                                medic_salud:'',
                                medic_dep:'',
                                medic_san:'',
                                medic_tom:'',
                                medic_fum:'',
                                medic_detfum:'',
                                medic_dettom:'',
                                medic_detcir:'',
                                medic_cir:'',
                                medic_acc:'',
                                medic_detacc:'',
                            })
                        }else{
                            setflag(false)
                            setconsult({
                                medic_salud:post.medic_salud,
                            medic_dep:post.medic_dep,
                            medic_san:post.medic_san,
                            medic_tom:post.medic_tom,
                            medic_fum:post.medic_fum,
                            medic_detfum:post.medic_detfum,
                            medic_dettom:post.medic_dettom,
                            medic_detcir:post.medic_detcir,
                            medic_cir:post.medic_cir,
                            medic_acc:post.medic_acc,
                            medic_detacc:post.medic_detacc,
                            })
                        }           
                        setflag(post)
                      }catch(e){
                          console.log("Sin datos",e)
                        setconsult({
                            medic_salud:'',
                            medic_dep:'',
                            medic_san:'',
                            medic_tom:'',
                            medic_fum:'',
                            medic_detfum:'',
                            medic_dettom:'',
                            medic_detcir:'',
                            medic_cir:'',
                            medic_acc:'',
                            medic_detacc:'',
                        })
                        setflag(false)
                              }
                    }
                    useEffect(() => {
                    consulta()
                    }, [])
            
            
                const insertinfo=async(datos)=>{        
                    try{
                    const enviando= await axios.post('http://localhost:4500/api/users/medicos/'+id,datos)
                    if(enviando){
                        setEnviado(true)
                    }
                    }catch(error){
                        console.log(error)
                    }
                }
            




    return (
        <>
        {consult &&
        <>
        <div className="pt-2 animate__animated animate__backInUp ">
        
              <Formik
                        initialValues={{
                            medic_salud:'',
                            medic_dep:'',
                            medic_san:'',
                            medic_tom:'',
                            medic_fum:'',
                            medic_detfum:'',
                            medic_dettom:'',
                            medic_detcir:'',
                            medic_cir:'',
                            medic_acc:'',
                            medic_detacc:'',
                        }}

                        onSubmit={(valores, {resetForm})=>{
                            console.log(valores)
                            setEnviado(true);
                            setTimeout(()=>setEnviado(false),5000);
                            insertinfo(valores)
                        }}

                        
                        validationSchema={Personales}
                        validate={(e)=>{
                           

                        }}
                        
                        >
                        {
                        ({errors, touched})=>(
                            <Form>
                             <div className="pt-2">  
                                <hr /><h4 className="text">Datos medicos:</h4><hr />

                                <div className="row ">
                                    <Sel errors={errors.medic_salud} touched={touched.medic_salud}col="-8 col-sm-6" label='¿Como considera su salud?' name='medic_salud' Opts={BRM}  />
                                    <Sel errors={errors.medic_dep} touched={touched.medic_dep}col="-8 col-sm-6" label='¿Practica algún deporte?' name='medic_dep' Opts={SN}  />
                                </div>
                                <div className="row ">
                                    <Sel errors={errors.medic_san} touched={touched.medic_san}col="-12 col-sm-6" label='Grupo sanguinio' name='medic_san' Opts={blood}  />

                                    <Sel errors={errors.medic_tom} touched={touched.medic_tom}col="-6 col-sm-2" label='¿Fuma?' name='medic_fum' Opts={SN}  />
                                    <Sel errors={errors.medic_fum} touched={touched.medic_fum}col="-6 col-sm-2" label='¿Toma?' name='medic_tom' Opts={SN}  />
                                </div>
                                <div className="row pt-4">
                                    <Inp errors={errors.medic_detfum} touched={touched.medic_detfum} col="-12 col-sm-6" label='Detalle sus motivos de fumar' name='medic_detfum' place="Detalla libremente: Cuanto fumas, cada cuando, etc." as="textarea" />
                                    <Inp errors={errors.medic_dettom} touched={touched.medic_dettom} col="-12 col-sm-6" label='Detalle sus motivos de tomar' name='medic_dettom' place="Detalla libremente: Cuanto tomas, cada cuando, etc." as="textarea" />

                                </div>
                                <div className="row ">
                                <Sel errors={errors.medic_cir} touched={touched.medic_cir}col="-12 col-sm-6" label='¿Haz tenido corigías?'name='medic_cir' Opts={SN}  />
                                <Sel errors={errors.medic_acc} touched={touched.medic_acc}col="-12 col-sm-6" label='¿Haz tenido accidentes "graves"?'name='medic_acc' Opts={SN}  />
                                </div>
                                <div className="row pt-4">
                                    <Inp errors={errors.medic_detcir} touched={touched.medic_detcir} col="-12 col-sm-6" label='Detalle sus cirugias' name='medic_detcir' place="Detalla libremente: Cuando fue, porque, secuelas, etc." as="textarea" />
                                    <Inp errors={errors.medic_detacc} touched={touched.medic_detacc} col="-12 col-sm-6" label='Detalle sus accidentes' name='medic_detacc' place="Detalla libremente: Cuanto fue, porque, secuelas, etc." as="textarea" />

                                </div>
                                
                                
                              
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
                                    (enviado&&(
                                    <div className="row pt-4">
                                     <p className="enviado fw-bold text-center"> ¡DATOS ENVIADOS CON EXITO! Puedes continuar a la siguiente sección.</p>   
                                    </div>
                                    ))
                                }
                             </div>   
                            </Form>
                        ) 
                        }
                    </Formik> 
                        
        </div>
        </>
       }
        </>
    )
}

    /*
                    
                    <
        </div>
    
    */

