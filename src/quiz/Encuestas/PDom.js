import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Inp } from '../../Componentes/Elementos/Inp';
import { nvlsoc, pres, vivienda, zona } from '../../Componentes/Elementos/Opts';
import { Radio } from '../../Componentes/Elementos/Radio'
import { Sel } from '../../Componentes/Elementos/Sel';

export const PDom = () => {
    const [enviado, setEnviado] = useState(false);


    return (
        <div className='row'>
            <div className='col-12 text-center pb-4'>
                <h4>Datos de la vivienda.</h4>
            </div>
            <Formik
                        initialValues={{
                            Desc:'',
                            Tipo:'',
                            Tiempo:{
                                Anios:'',
                                Mes:'',
                            },
                            Serv:'',
                            Compr:'',
                            Delin:'',
                            Drogs:'',
                            Alcoho:'',
                            Clase:'',
                            Esp:'',
                            Pres:'',
                        }}

                        onSubmit={(valores, {resetForm})=>{
                            console.log(valores)
                        }}

                        validate={(e)=>{
                            
                        }}
                    >
                        {
                        ({errors, touched,setFieldValue})=>(
                            <Form>
                                <div className="row pt-4">
                                    
                                <Sel errors={errors.Desc} touched={touched.Desc}col="-6" label='Descripcion de la zona' name='Desc' Opts={zona}  />
                                <Sel errors={errors.Tipo} touched={touched.Tipo}col="-6" label='Tipo de vivienda' name='Tipo' Opts={vivienda}  />
                                <label className='pt-3'>Tiempo de residir en el domicilio:</label>
                                <Inp errors={errors.Tiempo} touched={touched.Tiempo} col="-4" label='Años' name='Tiempo.anios' place='1-100'/>
                                <Inp errors={errors.Tiempo} touched={touched.Tiempo} col="-4" label='Meses' name='Tiempo.mes' place='1-100'/>
                               
                                <div className='col-12'>
                                        <div className='row justify-content-center'>
                                            <label className="col-3 form-label pt-2 fw-bold">Servicios públicos en la zona:</label>
                                                <Radio col ="-1" name="Serv" label="Agua" type="checkbox"/>
                                                <Radio col ="-2" name="Serv" label="Pavimento" type="checkbox"/>  
                                                <Radio col ="-3" name="Serv" label="Centros comerciales" type="checkbox"/>
                                                <Radio col ="-2" name="Serv" label="Alumbrado" type="checkbox"/> 
                                                <Radio col ="-2" name="Serv" label="Escuelas" type="checkbox"/>                                  
                                                <Radio col ="-2" name="Serv" label="Transporte" type="checkbox"/>                                
                                                <Radio col ="-2" name="Serv" label="Drenaje" type="checkbox"/>                                
                                                <Radio col ="-2" name="Serv" label="Areas verdes" type="checkbox"/>                                
                                 
                                        </div>
                                    </div>
                                <Inp errors={errors.Compr} touched={touched.Compr} col="-4" label='Comprobante de domicilio (3 meses max)' type='file'name='Compr' place='1-100'/>
                                <Sel errors={errors.Delin} touched={touched.Delin}col="-4" label='Delicuencia' name='Delin' Opts={nvlsoc}  />
                                <Sel errors={errors.Drogs} touched={touched.Drogs}col="-4" label='Drogadicción' name='Drogs' Opts={nvlsoc}  />
                                <Sel errors={errors.Alcoho} touched={touched.Alcoho}col="-4" label='Alcoholismo' name='Alcoho' Opts={nvlsoc}  />
                                <Sel errors={errors.Esp} touched={touched.Esp}col="-6" label='Tipo de vivienda' name='Esp' Opts={nvlsoc}  />

                                <label className='pt-3 fw-bold'>SOLO ENCUESTADOR</label>
                                <Sel errors={errors.Clase} touched={touched.Clase}col="-4" label='Clase social' name='Clase' Opts={nvlsoc}  />

                                <Sel errors={errors.Pres} touched={touched.Pres}col="-6" label='Presentacion del inmueble' name='Pres' Opts={pres}  />

                                <div className="vstack gap-2 col-md-12 mx-auto pt-5">
                                    <button type="submit" className="btn btn-primary "> GUARDAR </button>
                                
                                </div>
                                {
                                    (enviado&&(
                                    <div className="row pt-4">
                                     <p className="enviado fw-bold text-center"> ¡Gracias! Con tu participación ayudamos a mejorar las opciones laborales para todos.</p>   
                                    </div>
                                    ))
                                }
                                </div>
                            </Form>
                        ) 
                        }
                    </Formik>
        </div>
    )
}
