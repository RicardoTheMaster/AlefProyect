import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Inp } from '../../Componentes/Elementos/Inp'
import { Radio } from '../../Componentes/Elementos/Radio'
import { Sel } from '../../Componentes/Elementos/Sel'

export const Evidencias = () => {
    const [enviado, setEnviado] = useState(false);

    return (
        <div className='row'>
            <div className='col-12 text-center pb-4'>
                <h4>Evidencias fotográficas y ubicación del domicilio.</h4>
                <label>Todas las fotos deberán ser tomadas en un fondo de color uniforme de preferencia liso donde solo se perciba el candidato.</label>
            </div>
            <Formik
                        initialValues={{
                            medcu:'',
                            comcu:'',
                            sala:'',
                            casa:'',
                        }}

                        onSubmit={(valores, {resetForm})=>{
                            console.log(valores)
                        }}

                        validate={(e)=>{
                            
                           console.log(e)
                        }}
                    >
                        {
                        ({errors, touched,setFieldValue})=>(
                            <Form>
                                <div className="row pt-4">
                                    <Inp errors={errors.medcu} touched={touched.medcu} col="-12" type="file" label='Foto de medio cuerpo' name='medcu' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.comcu} touched={touched.comcu} col="-12" type="file" label='Foto de cuerpo completo (hasta los pies)' name='comcu' place='Calle # Col. Edo. CP'/>
                                    <Inp errors={errors.sala} touched={touched.sala} col="-12" type="file" label='Foto del candidato en la sala' name='sala' place='10 digitos maximo'/>
                                    <Inp errors={errors.casa} touched={touched.casa} col="-12" type="file" label='Foto del candidato en la fachada/exterior del domicilio (se debe de ver la casa completa de ezquina a ezquina)' name='casa' place='10 digitos maximo'/>
                                    

                                </div>
                                
                                
                                <div className="vstack gap-2 col-md-5 mx-auto pt-5">
                                    <button type="submit" className="btn btn-primary "> GUARDAR </button>
                                </div>
                                {
                                    (enviado&&(
                                    <div className="row pt-4">
                                     <p className="enviado fw-bold text-center"> ¡Gracias! Con tu participación ayudamos a mejorar las opciones laborales para todos.</p>   
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
