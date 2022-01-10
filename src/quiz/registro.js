import { Form, Formik } from 'formik'
import React from 'react'
import { Inp } from '../Componentes/Elementos/Inp'
import { BRM } from '../Componentes/Elementos/Opts'
import { Radio } from '../Componentes/Elementos/Radio'
import { Sel } from '../Componentes/Elementos/Sel'

export const registro = () => {
    return (
        <div>
                <Formik
                    initialValues={{
    
                        mensaje:'',
                        fecha:''
                    }}

                    onSubmit={(valores,{resetForm})=>{
                        console.log(valores)
                    }}
                    //validationSchema={Personales}

                    >
                    {
                        ({errors, touched,setFieldValue})=>(
                            <Form>
                            
                            <div className="row">
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12" label="Adjunta una selfie/fotografia reciente tuya" name="esc_perIA" place="2010" type="file"/>

                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="NOMBRE(S)" name="esc_perIA" place="Juan" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="Apellido paterno" name="esc_perIA" place="Ortega" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-8 pb-2" label="Apellido materno" name="esc_perIA" place="Renteria" />
                                <hr/>
                                <label className='pt-2'>Domicilio:</label>
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="Calle" name="esc_perIA" place="Renteria" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="Numero" name="esc_perIA" place="Renteria" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="Colonia" name="esc_perIA" place="Renteria" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="C.P." name="esc_perIA" place="Renteria" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="Estado" name="esc_perIA" place="Renteria" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="Municipio/Localidad/Estado" name="esc_perIA" place="Renteria" />

                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="CURP" name="esc_perIA" place="Renteria" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="NSS" name="esc_perIA" place="Renteria" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 pb-2" label="Comprobante de domicilio" name="esc_perIA" place="Renteria" type="file" />
                                <hr/>
                                <label className='pt-2'>Cargar identificación:</label>
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12" label="Parte delantera" name="esc_perIA" place="Renteria" type="file" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12" label="Parte trasera" name="esc_perIA" place="Renteria" type="file"/>
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 pb-2" label="Carta de no antecedentes penales" name="esc_perIA" place="Renteria" type="file" />
                                <hr/>
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 " label="Celular (Activo y personal del aplicador)" name="esc_perIA" place="Juan" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="Número de tarjeta de débito" name="esc_perIA" place="Juan" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="Tipo y entidad bancaria" name="esc_perIA" place="Juan" />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-8" label="Teléfono" name="esc_perIA" place="Juan" />
                                <hr/>
                                <label className='pt-2'>Datos de dos referencias:</label>
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-8" label="Nombre completo" name="esc_perIA" place="Juan" />
                                <Sel errors={errors.esc_perIM} touched={touched.esc_perIM} col="-12 col-sm-4" label='Parentesco' name='esc_perIM' Opts={BRM} />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="Numero de celular ACTIVO" name="esc_perIA" place="SI NO ESTA ACTIVO NO SE DARA DE ALTA" />
                                
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-8" label="Nombre completo" name="esc_perIA" place="Juan" />
                                <Sel errors={errors.esc_perIM} touched={touched.esc_perIM} col="-12 col-sm-4" label='Parentesco' name='esc_perIM' Opts={BRM} />
                                <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-12 col-sm-6" label="Numero de celular ACTIVO" name="esc_perIA" place="SI NO ESTA ACTIVO NO SE DARA DE ALTA" />


                                <Sel errors={errors.esc_perIM} touched={touched.esc_perIM} col="-8 sm-5" label='Mes' name='esc_perIM' Opts={BRM} />
                                    
                                    </div>
                                    <div className="row pt-4 text-center">
                                            <label className="col-12 form-label pt-2 fw-bold">Aceptas nuestros términos y condiciones.</label>
                                            <Radio col ="-6 " name="rad" label="Si" />
                                            <Radio col ="-6" name="rad" label="No" />
                                        </div>

                           <div className='text-center'>
                            <button type="submit" className='btn btn-primary mt-4 ' > Enviar</button>
                            </div>
                            </Form>
                            
                        ) 
                        }
                    </Formik>
        </div>
    )
}
