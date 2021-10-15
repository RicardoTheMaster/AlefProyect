import React, { useState } from 'react'
import * as Yup from "yup";
import {  Form, Formik } from 'formik'
import { Inp } from '../Elementos/Inp';
export const DatosRefP = () => {
    const [enviado, setEnviado] = useState(false);


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
            <h4 className="text">Datos personales</h4>
                <hr />          
              <Formik
                        initialValues={{
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
                           
                        }}
                        
                        >
                        {
                        ({errors, touched})=>(
                            <Form>
                               
                                
                                <div className="row pt-2 animate__animated animate__backInUp ">
                                <h5 className="py-2 fs-6 ">Primera referencia:</h5> 
                                    <Inp errors={errors.refP1_nom} touched={touched.refP1_nom} col="-12 col-sm-6" label="Nombre completo" name="refP1_nom" place="Nombre Apellido Apellido"/>
                                    <Inp errors={errors.refP1_ocup} touched={touched.refP1_ocup} col="-12 col-sm-6" label="Ocupación" name="refP1_ocup" place="Estudiante/Trabajador/Agricultor/Etc."/>
                                </div>
                                <div className="row pt-2 ">
                                    <Inp errors={errors.refP1_dom} touched={touched.refP1_dom} col="-12 col-sm-6" label="Domicilio" name="refP1_dom" place="Calle, numero, fracc. Cd. Estado."/>
                                    <Inp errors={errors.refP1_tel} touched={touched.refP1_tel} col="-12 col-sm-6" label="Telefono" name="refP1_tel" place="6751571634"/>
                                </div>

                                <div className="row pt-2 ">
                                <h5 className="py-2 fs-6 ">Segunda referencia:</h5> 
                                    <Inp errors={errors.refP2_nom} touched={touched.refP2_nom} col="-12 col-sm-6" label="Nombre completo" name="refP2_nom" place="Nombre Apellido Apellido"/>
                                    <Inp errors={errors.refP2_ocup} touched={touched.refP2_ocup} col="-12 col-sm-6" label="Ocupación" name="refP2_ocup" place="Estudiante/Trabajador/Agricultor/Etc."/>
                                </div>
                                <div className="row pt-2 ">
                                    <Inp errors={errors.refP2_dom} touched={touched.refP2_dom} col="-12 col-sm-6" label="Domicilio" name="refP2_dom" place="Calle, numero, fracc. Cd. Estado."/>
                                    <Inp errors={errors.refP2_tel} touched={touched.refP2_tel} col="-12 col-sm-6" label="Telefono" name="refP2_tel" place="6751571634"/>
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
