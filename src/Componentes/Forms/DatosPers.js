import { Form, Formik } from 'formik'
import React, {  useState, useEffect } from 'react'
import { edad, formatoFecha } from '../../Hooks/useForm'
import { DivLaBtn } from '../Elementos/DivLaBtn'
import { Inp } from '../Elementos/Inp'
import { SEX, NAC } from '../Elementos/Opts'
import { Sel } from '../Elementos/Sel'
import * as Yup from "yup";
import { CalifJobModal } from './CalifJobModal'
import axios from 'axios'
import { TryRounded } from '@mui/icons-material'

export const DatosPers   = () => {
    
    const [enviado, setEnviado] = useState(false);

    

    const Personales=Yup.object().shape({
                    apellidoP:Yup.string("¡Solo letras!")
                        .min(2,'¡Muy corto!')
                        .max(20, '¡Muy largo!')
                        .required('¡Introduce un nombre!')
                        .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
                    apellidoM:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Apellido paterno!')
                                      .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
                    nombre:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Apellido materno!')
                                      .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
                    fechanac:Yup.date("¡Formato de fecha!").min("1950/01/01",'¡Muy corto!').max(new Date(), '¡¿Aún no naces?!').required('¡Ingresa una fecha!'),
                    edad:Yup.number("¡Epa un error!").min(18,'¡Muy joven!').max(80, '¡Contacte un ADM!').required('¡Ingresa una fecha!'),
                    sex:Yup.string().required("¡Escoge uno!"),
                    tel:Yup.number("¡Solo letras!").min(1000000000,'¡10 o 12 digitos!').max(999999999999, '¡Muy largo!').required('¡Telefono de casa!'),
                    cel:Yup.number("¡Solo letras!").min(1000000000,'¡10 o 12 digitos!').max(999999999999, '¡Muy largo!').required('¡Numero celular!'),
                    nacionalidad:Yup.string("¡Solo letras!").required("¡Escoge uno!"),
                    curp:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Introduce tu CURP!')
                                       .matches(/^[aA-zZ0-9]+$/,"¡Verifica!"),
                    rfc:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Introduce tu RFC!')
                                       .matches(/^[aA-zZ0-9]+$/,"¡Verifica!"), 
                    nss:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Introduce tu RFC!')
                                       .matches(/^[aA-zZ0-9]+$/,"¡Verifica!"),

                });
              
    const [consult, setconsult] = useState()
    const [flag, setflag] = useState(false)
    const id='61a4557dc917e8f80c770934';

    const consulta= async ()=>{
          try{
            const res=await fetch("http://localhost:4500/api/users/personales/"+id);
            const post=await res.json();
            if(!post.apellidoM){
                setflag(false)
                setconsult({
                    apellidoP:'',
                    apellidoM:'',
                    nombre:'',
                    fechanac:'',
                    sex:'',
                    edad:'',
                    tel:'',
                    cel:'',
                    nacionalidad:'',
                    curp:'',
                    rfc:'',
                    nss:'',
                    ID:id
                })
            }else{
                setflag(false)
                setconsult({
                    apellidoP:post.apellidoP,
                    apellidoM:post.apellidoM,
                    nombre:post.nombre,
                    fechanac:(post.fechanac).substring(0,10),
                    sex:post.sex,
                    edad:post.edad,
                    tel:post.tel,
                    cel:post.cel,
                    nacionalidad:post.nacionalidad,
                    curp:post.curp,
                    rfc:post.rfc,
                    nss:post.nss,
                    ID:id
                })
            }           
            setflag(post)
          }catch(e){
              console.log("Sin datos",e)
            setconsult({
                apellidoP:'',
                apellidoM:'',
                nombre:'',
                fechaNac:'',
                sex:'',
                edad:'',
                tel:'',
                cel:'',
                nacionalidad:'',
                curp:'',
                rfc:'',
                nss:'',
                ID:id
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
        if(enviando){
            setEnviado(true)
        }
        }catch(error){
            console.log(error)
        }
    }

    return(
        
        <>
        {consult &&
        <>
        
          <CalifJobModal />       
        <div className="pt-2 animate__animated animate__backInUp ">
                <hr />
            <h4 className="text">Datos personales</h4>
                <hr />          
              <Formik
                        initialValues={consult}

                        onSubmit={(valores, {resetForm})=>{
                            
                            insertinfo((valores))
                            
                        }}

                        
                        validationSchema={Personales}
                        validate={(e)=>{
                            if(e.fechanac){
                                e.edad=edad((formatoFecha(new Date(), "yyyy-mm-dd")),(e.fechanac));
                            }
                        }}
                        
                        >
                        {
                        ({errors, touched})=>(
                            <Form className='z'>
                               
                                <div className="row pt-4">
                                     <Inp errors={errors.apellidoP} touched={touched.apellidoP} col="-12 col-sm-4" label='Apellido paterno' name='apellidoP'  place='Rodriguez' />
                                     <Inp errors={errors.apellidoM} touched={touched.apellidoM} col="-12 col-sm-4" label='Apellido materno' name='apellidoM'  place='Velazquez' />
                                     <Inp errors={errors.nombre} touched={touched.nombre} col="-12 col-sm-4" label='Nombres(s)' name='nombre'  place='Ricardo' />
                                </div>
                                <div className="row ">
                                     <Inp errors={errors.fechanac} touched={touched.fechanac} col="-8 col-sm-5" label='Fecha de nacimiento' name='fechanac' type="date" />
                                     <Inp errors={errors.edad} touched={touched.fechanac}col="-3 col-sm-2" label='Edad' name='edad' type="number" disabled />
                                     <Sel errors={errors.sex} touched={touched.sex} col="-5 col-sm-5" label='Sexo' name='sex' Opts={SEX} />
                                 </div>
                                <div className="row ">
                                    <Inp errors={errors.tel} touched={touched.tel} col="-8 col-sm-4" label='Telefono (casa)' name='tel' place='10-12 Digitos' type="number" />
                                    <Inp errors={errors.cel} touched={touched.cel} col="-8 col-sm-4" label='Telefono (celular)' name='cel' place='10-12 Digitos' type="number" />
                                    <Sel errors={errors.nacionalidad} touched={touched.nacionalidad}col="-8 col-sm-4" label='Nacionalidad' name='nacionalidad' Opts={NAC}  />
                                </div>
                                <div className="row">
                                    <Inp errors={errors.curp} touched={touched.curp} col="-7" label='CURP' name='curp' place='Si tienes duda: CONSULTALA!' />
                                    <DivLaBtn col="-5 " label="¡CONSULTALA!" place="CONSULTAR" />         
                                </div>
                                <div className="row pb-4 ">
                                    <Inp errors={errors.rfc} touched={touched.rfc} col="-7" label='RFC' name='rfc'  place='Si tienes duda: CONSULTALA!'/>
                                    <DivLaBtn col="-5 " label="¡CONSULTALA!" place="CONSULTAR" />         
                                </div>
                                <div className="row pb-4 z">
                                    <Inp errors={errors.nss} touched={touched.nss} col="-7" label='NSS' name='nss'  place='Si tienes duda: CONSULTALA!' />
                                    <DivLaBtn col="-5 z " label="¡CONSULTALA!" place="CONSULTAR" />         
                                </div>



                                <div className="row justify-content-center pt-5">
                                    <div className="col-4 text-center">
                                        <button type="button" className="btn btn-secondary btn-lg"> Editar </button>
                                    </div>
                                    <div className="col-4 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg " > GUARDAR </button>
                                    </div>
                                </div>
                                <div className="row pt-1">
                                    <div className="col-6 text-start">
                                        <button type="button" className="btn btn-outline-info" > Anterior </button>
                                    </div>
                                    <div className="col-6 text-end">
                                        <button type="button" className="btn btn-outline-info"> Siguiente </button>
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

                   


        </div>
        </>
       }
        </>
    )
}

