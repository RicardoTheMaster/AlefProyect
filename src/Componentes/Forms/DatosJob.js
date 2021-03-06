import React, { useState,useEffect } from 'react'
import * as Yup from "yup";
import {  Form, Formik } from 'formik'
import { Inp } from '../Elementos/Inp'
import { InSpan } from '../Elementos/InSpan'
import { CalifJobModal } from './CalifJobModal';
import axios from 'axios';




export const DatosJob = () => {
    const [enviado, setEnviado] = useState(false);

    const Personales=Yup.object().shape({

        ultT_puesto:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Escribe el puesto!')
            .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
        ultT_dpto:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Departamento!')
            .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
        ultT_gfe:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Escribe el nombre!')
            .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
        ultT_tel:Yup.number("¡Solo letras!").min(1000000000,'¡10 o 12 digitos!').max(999999999999, '¡Muy largo!').required('¡Numero celular!'),
        ultT_motivo:Yup.string("¡Solo letras!").min(20,'¡Muy corto!').max(500, '¡Muy largo!').required('¡Escribe el motivo!')
        .matches(/^[aA-zZ\s.0-9]+$/,"¡Solo letras y numeros!"),
        ultT_durac:Yup.number("¡Solo letras!").min(1,'¡10 o 12 digitos!').max(50, '¡Muy largo!').required('¡Escribe tu duración!'),

        penultT_puesto:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Escribe el puesto!')
            .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
        penultT_dpto:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Departamento!')
            .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
        penultT_gfe:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('Escribe el nombre!')
            .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
        penultT_tel:Yup.number("¡Solo letras!").min(1000000000,'¡10 o 12 digitos!').max(999999999999, '¡Muy largo!').required('¡Numero celular!'),
        penultT_motivo:Yup.string("¡Solo letras!").min(20,'¡Muy corto!').max(500, '¡Muy largo!').required('¡¡Escribe el motivo!!')
        .matches(/^[aA-zZ\s.0-9]+$/,"¡Solo letras y numeros!"),
        penultT_durac:Yup.number("¡Solo letras!").min(1,'¡10 o 12 digitos!').max(50, '¡Muy largo!').required('¡Escribe tu duración!'),


        antpenultT_puesto:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Apellido paterno!')
            .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
        antpenultT_dpto:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Apellido paterno!')
            .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
        antpenultT_gfe:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Apellido paterno!')
            .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
        antpenultT_tel:Yup.number("¡Solo letras!").min(1000000000,'¡10 o 12 digitos!').max(999999999999, '¡Muy largo!').required('¡Numero celular!'),
        antpenultT_motivo:Yup.string("¡Solo letras!").min(20,'¡Muy corto!').max(500, '¡Muy largo!').required('¡Apellido paterno!')
        .matches(/^[aA-zZ\s.0-9]+$/,"¡Solo letras y numeros!"),
        antpenultT_durac:Yup.number("¡Solo letras!").min(1,'¡10 o 12 digitos!').max(50, '¡Muy largo!').required('¡Numero celular!'),

                });





    const [consult, setconsult] = useState()
    const [flag, setflag] = useState(false)
    const id='61a4557dc917e8f80c770934';

    const consulta= async ()=>{
          try{
            const res=await fetch("http://localhost:4500/api/users/laborales/"+id);
            const post=await res.json();

            if(Object.keys(post).length<=2){

                setconsult({
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
                    IDuser:1
                })
            }else{
                setconsult({
                    ultT_puesto:post.ultT_puesto,
                    ultT_dpto:post.ultT_dpto,
                    ultT_gfe:post.ultT_gfe,
                    ultT_tel:post.ultT_tel,
                    ultT_motivo:post.ultT_motivo,
                    ultT_durac:post.ultT_durac,
                    penultT_puesto:post.penultT_puesto,
                    penultT_dpto:post.penultT_dpto,
                    penultT_gfe:post.penultT_gfe,
                    penultT_tel:post.penultT_tel,
                    penultT_motivo:post.penultT_motivo,
                    penultT_durac:post.penultT_durac,
                    antpenultT_puesto:post.antpenultT_puesto,
                    antpenultT_dpto:post.antpenultT_dpto,
                    antpenultT_gfe:post.antpenultT_gfe,
                    antpenultT_tel:post.antpenultT_tel,
                    antpenultT_motivo:post.antpenultT_motivo,
                    antpenultT_durac:post.antpenultT_durac,
                    IDuser:1
                })
            }            
            
            setflag(post)
          }catch(e){
              console.log("Sin datos",e)
            setconsult({
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
                IDuser:1
            })
            setflag(false)
                  }
        }
    
        useEffect(() => {
        consulta()
        
    }, [])
        

    const insertinfo=async(datos)=>{
        try{
            const enviando= await axios.post('http://localhost:4500/api/users/personales/'+id,datos)
    
            }catch(error){
                console.log(error)
            }
    }
 


    return (
        <>
        {consult &&<>
        <Formik

                        initialValues={ consult }

                        onSubmit={(valores, {resetForm})=>{
                            insertinfo(valores)
                            console.log(valores)
                            setEnviado(true);
                            setTimeout(()=>setEnviado(false),5000);
                            let Modal=document.getElementById('but')
                            Modal.click();
                            
                            
                            
                        }}

                        
                        validationSchema={Personales}
                        validate={(e)=>{
                           

                        }}
                        
                        >
                        {
                        ({errors, touched})=>( 

                            <Form>
                                <div className="pt-4 animate__animated animate__backInUp ">
                                        <hr /><h4 className="text">Ultimos 3 empleos</h4><hr />
                                    <h5 className="pt-4 fs-6 ">Ultimo trabajo o actual</h5> 
                                        <div className="row pt-2">
                                            <Inp errors={errors.ultT_puesto} touched={touched.ultT_puesto} col="-12 col-sm-6" label='Puesto' name='ultT_puesto' place='Agente/Chofer/Guardia/Barista/Etc.' />
                                            <Inp errors={errors.ultT_dpto} touched={touched.ultT_dpto} col="-12 col-sm-6" label='Departamento' name='ultT_dpto' place='RH/Sistemas/Mantenimiento/Limpieza/Etc.' />
                                        </div>
                                        <div className="row pt-4">
                                            <Inp errors={errors.ultT_gfe} touched={touched.ultT_gfe} col="-12 col-sm-6" label='Jefe inmediato' name='ultT_gfe' place='Nombre del jefe inmediato o encargado responsable' />
                                            <Inp errors={errors.ultT_tel} touched={touched.ultT_tel} col="-12 col-sm-6" label='Telefono de la empresa/RH' name='ultT_tel' place='6752571634' type="number"/>
                                        </div>
                                        <div className="row pt-4">
                                            <Inp errors={errors.ultT_motivo} touched={touched.ultT_motivo} col="-12 col-sm-6" label='Motivo(s) de separacion. 500 caracteres maximo' name='ultT_motivo' place='Detalla segun tu punto de vista o tu testimonio' as="textarea"/>
                                            <InSpan errors={errors.ultT_durac} touched={touched.ultT_durac} col="-12 col-sm-6" label="Tiempo en la empresa" name='ultT_durac' place='9' type="number" span="Meses" />
                                            
                                        </div>
                                        
                                    <h5 className="pt-4 fs-6 ">Penultimo trabajo</h5> 
                                        <div className="row pt-2">
                                            <Inp errors={errors.penultT_puesto} touched={touched.penultT_puesto} col="-12 col-sm-6" label='Puesto' name='penultT_puesto' place='Agente/Chofer/Guardia/Barista/Etc.' />
                                            <Inp errors={errors.penultT_dpto} touched={touched.penultT_dpto} col="-12 col-sm-6" label='Departamento' name='penultT_dpto' place='RH/Sistemas/Mantenimiento/Limpieza/Etc.' />
                                        </div>
                                        <div className="row pt-4">
                                            <Inp errors={errors.penultT_gfe} touched={touched.penultT_gfe} col="-12 col-sm-6" label='Jefe inmediato' name='penultT_gfe' place='Nombre del jefe inmediato o encargado responsable' />
                                            <Inp errors={errors.penultT_tel} touched={touched.penultT_tel} col="-12 col-sm-6" label='Telefono de la empresa/RH' name='penultT_tel' place='6752571634' type="number"/>
                                        </div>
                                        <div className="row pt-4">
                                            <Inp errors={errors.penultT_motivo} touched={touched.penultT_motivo} col="-12 col-sm-6" label='Motivo(s) de separacion. 500 caracteres maximo' name='penultT_motivo' place='Detalla segun tu punto de vista o tu testimonio' as="textarea"/>
                                            <InSpan errors={errors.penultT_durac} touched={touched.penultT_durac} col="-12 col-sm-6" label="Tiempo en la empresa" name='penultT_durac' place='9' type="number" span="Meses" />
                                            
                                        </div>


                                    <h5 className="pt-4 fs-6 ">Ante-penultimo trabajo</h5>       
                                        <div className="row pt-2">
                                            <Inp errors={errors.antpenultT_puesto} touched={touched.antpenultT_puesto} col="-12 col-sm-6" label='Puesto' name='antpenultT_puesto' place='Agente/Chofer/Guardia/Barista/Etc.' />
                                            <Inp errors={errors.antpenultT_dpto} touched={touched.antpenultT_dpto} col="-12 col-sm-6" label='Departamento' name='antpenultT_dpto' place='RH/Sistemas/Mantenimiento/Limpieza/Etc.' />
                                        </div>
                                        <div className="row pt-4">
                                            <Inp errors={errors.antpenultT_gfe} touched={touched.antpenultT_gfe} col="-12 col-sm-6" label='Jefe inmediato' name='antpenultT_gfe' place='Nombre del jefe inmediato o encargado responsable' />
                                            <Inp errors={errors.antpenultT_tel} touched={touched.antpenultT_tel} col="-12 col-sm-6" label='Telefono de la empresa/RH' name='antpenultT_tel' place='6752571634' type="number"/>
                                        </div>
                                        <div className="row pt-4">
                                            <Inp errors={errors.antpenultT_motivo} touched={touched.antpenultT_motivo} col="-12 col-sm-6" label='Motivo(s) de separacion. 500 caracteres maximo' name='antpenultT_motivo' place='Detalla segun tu punto de vista o tu testimonio' as="textarea"/>
                                            <InSpan errors={errors.antpenultT_durac} touched={touched.antpenultT_durac} col="-12 col-sm-6" label="Tiempo en la empresa" name='antpenultT_durac' place='9' type="number" span="Meses" />
                                            
                                        </div>
                                </div>


                                <div className="row justify-content-center pt-5">
                                    <div className="col-4 text-center">
                                        <button  className="btn btn-secondary btn-lg"> Editar </button>
                                    </div>
                                    <div className="col-4 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg"> GUARDAR </button>
                                    </div>
                                </div>
                                <div className="row pt-1">
                                    <div className="col-6 text-start">
                                        <button  className="btn btn-outline-info" > Anterior </button>
                                    </div>
                                    <div className="col-6 text-end">
                                        <button  className="btn btn-outline-info"> Siguiente </button>
                                    </div>
                                </div>
                              
                                {
                                    (enviado&&(
                                    <div className="row pt-4">
                                     <p className="enviado fw-bold text-center"> ¡DATOS ENVIADOS CON EXITO! Puedes continuar a la siguiente sección.</p>   
                                    </div>
                                    ))
                                }

                                
            </Form>
                        ) 
                        }
                        
        </Formik> 
        <button type="button" id="but" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
       
        <CalifJobModal />
        </>}
        </>
    )
}
