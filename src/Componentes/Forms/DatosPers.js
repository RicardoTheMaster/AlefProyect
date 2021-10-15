import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { edad, formatoFecha } from '../../Hooks/useForm'
import { DivLaBtn } from '../Elementos/DivLaBtn'
import { Inp } from '../Elementos/Inp'
import { SEX, NAC } from '../Elementos/Opts'
import { Sel } from '../Elementos/Sel'
import * as Yup from "yup";
export const DatosPers = () => {
    
    const [enviado, setEnviado] = useState(false);


    const Personales=Yup.object().shape({
                    datosPers_apP:Yup.string("¡Solo letras!").
                        min(2,'¡Muy corto!')
                        .max(20, '¡Muy largo!')
                        .required('¡Introduce un nombre!')
                        .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
                    datosPers_apM:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Apellido paterno!')
                                      .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
                    datosPers_nom:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Apellido materno!')
                                      .matches(/^[aA-zZ\s.]+$/,"¡Solo letras!"),
                    datosPers_fechaNac:Yup.date("¡Formato de fecha!").min("1950/01/01",'¡Muy corto!').max(new Date(), '¡¿Aún no naces?!').required('¡Ingresa una fecha!'),
                    datosPers_edad:Yup.number("¡Epa un error!").min(18,'¡Muy joven!').max(80, '¡Contacte un ADM!').required('¡Ingresa una fecha!'),
                    datosPers_sex:Yup.string().required("¡Escoge uno!"),
                    datosPers_tel:Yup.number("¡Solo letras!").min(1000000000,'¡10 o 12 digitos!').max(999999999999, '¡Muy largo!').required('¡Telefono de casa!'),
                    datosPers_cel:Yup.number("¡Solo letras!").min(1000000000,'¡10 o 12 digitos!').max(999999999999, '¡Muy largo!').required('¡Numero celular!'),
                    datosPers_nac:Yup.string("¡Solo letras!").required("¡Escoge uno!"),
                    datosPers_curp:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Introduce tu CURP!')
                                       .matches(/^[aA-zZ0-9]+$/,"¡Verifica!"),
                    datosPers_rfc:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Introduce tu RFC!')
                                       .matches(/^[aA-zZ0-9]+$/,"¡Verifica!"), 
                    datosPers_nss:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!').required('¡Introduce tu RFC!')
                                       .matches(/^[aA-zZ0-9]+$/,"¡Verifica!"),

                });
    return (

        <div className="pt-2 animate__animated animate__backInUp ">
                <hr />
            <h4 className="text">Datos personales</h4>
                <hr />          
              <Formik
                        initialValues={{
                            datosPers_apP:'',
                            datosPers_apM:'',
                            datosPers_nom:'',
                            datosPers_fechaNac:'',
                            datosPers_sex:'',
                            datosPers_edad:'',
                            datosPers_tel:'',
                            datosPers_cel:'',
                            datosPers_nac:'',
                            datosPers_curp:'',
                            datosPers_rfc:'',
                            datosPers_nss:'',
                        }}

                        onSubmit={(valores, {resetForm})=>{
                            console.log(valores)
                            setEnviado(true);
                            setTimeout(()=>setEnviado(false),5000);
                        }}

                        
                        validationSchema={Personales}
                        validate={(e)=>{
                            if(e.datosPers_fechaNac){
                                e.datosPers_edad=edad((formatoFecha(new Date(), "yyyy-mm-dd")),(e.datosPers_fechaNac));
                            }
                        }}
                        
                        >
                        {
                        ({errors, touched})=>(
                            <Form>
                               
                                <div className="row pt-4">
                                     <Inp errors={errors.datosPers_apP} touched={touched.datosPers_apP} col="-12 col-sm-4" label='Apellido paterno' name='datosPers_apP'  place='Rodriguez' />
                                     <Inp errors={errors.datosPers_apM} touched={touched.datosPers_apM} col="-12 col-sm-4" label='Apellido materno' name='datosPers_apM'  place='Velazquez' />
                                     <Inp errors={errors.datosPers_nom} touched={touched.datosPers_nom} col="-12 col-sm-4" label='Nombres(s)' name='datosPers_nom'  place='Ricardo' />
                                </div>
                                <div className="row ">
                                     <Inp errors={errors.datosPers_fechaNac} touched={touched.datosPers_fechaNac} col="-8 col-sm-5" label='Fecha de nacimiento' name='datosPers_fechaNac' type="date" />
                                     <Inp errors={errors.datosPers_edad} touched={touched.datosPers_fechaNac}col="-3 col-sm-2" label='Edad' name='datosPers_edad' type="number" disabled />
                                     <Sel errors={errors.datosPers_sex} touched={touched.datosPers_sex} col="-5 col-sm-5" label='Sexo' name='datosPers_sex' Opts={SEX} />
                                 </div>
                                <div className="row ">
                                    <Inp errors={errors.datosPers_tel} touched={touched.datosPers_tel} col="-8 col-sm-4" label='Telefono (casa)' name='datosPers_tel' type="number" />
                                    <Inp errors={errors.datosPers_cel} touched={touched.datosPers_cel} col="-8 col-sm-4" label='Telefono (celular)' name='datosPers_cel' type="number" />
                                    <Sel errors={errors.datosPers_nac} touched={touched.datosPers_nac}col="-8 col-sm-4" label='Nacionalidad' name='datosPers_nac' Opts={NAC}  />
                                </div>
                                <div className="row">
                                    <Inp errors={errors.datosPers_curp} touched={touched.datosPers_curp} col="-7" label='CURP' name='datosPers_curp'  />
                                    <DivLaBtn col="-5 " label="¡CONSULTALA!" place="CONSULTAR" />         
                                </div>
                                <div className="row pb-4 ">
                                    <Inp errors={errors.datosPers_rfc} touched={touched.datosPers_rfc} col="-7" label='RFC' name='datosPers_rfc'  />
                                    <DivLaBtn col="-5 " label="¡CONSULTALA!" place="CONSULTAR" />         
                                </div>
                                <div className="row pb-4 ">
                                    <Inp errors={errors.datosPers_nss} touched={touched.datosPers_nss} col="-7" label='NSS' name='datosPers_nss'  />
                                    <DivLaBtn col="-5 " label="¡CONSULTALA!" place="CONSULTAR" />         
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
                                
                            </Form>
                        ) 
                        }
                    </Formik> 
                        
        </div>
    )
}
