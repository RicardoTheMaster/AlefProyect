import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Inp } from '../../Componentes/Elementos/Inp'
import { SN } from '../../Componentes/Elementos/Opts'
import { Radio } from '../../Componentes/Elementos/Radio'
import { Sel } from '../../Componentes/Elementos/Sel'

export const Medica = () => {
    const [enviado, setEnviado] = useState(false);
    const [Fuma, setFuma] = useState(false);
    const [Toma, setToma] = useState(false);

    return (
        <div className='row'>
            <div className='col-12 text-center pb-4'>
                <h4>Area médica testimonial</h4>
            </div>
            <Formik
                        initialValues={{
                            Alegias:'',
                            Cirugias:'',
                            Accidente:'',
                            Enfermedad:'',
                            fuma:'',
                            toma:'',
                            fumdia:'',
                            tomsem:'',
                        }}

                        onSubmit={(valores, {resetForm})=>{
                            console.log(valores)
                        }}

                        validate={(e)=>{
                            if(e.fuma==='Si'){
                                setFuma(true)
                            }else{
                                setFuma(false)
                            }
                            if(e.toma==='Si'){
                                setToma(true)
                            }else{
                                setToma(false)
                            }
                        }}
                    >
                        {
                        ({errors, touched,setFieldValue})=>(
                            <Form>
                                <div className="row pt-4">
                                    <Inp errors={errors.Alegias} touched={touched.Alegias} col="-6" label='¿Padece de alergias?' name='Alegias' place='Edo. y Municipio'/>
                                    <Inp errors={errors.Cirugias} touched={touched.Cirugias} col="-6" label='¿Ha sido intervenido quirúrgicamente?' name='Cirugias' place='Edo. y Municipio'/>
                                    <Inp errors={errors.Accidente} touched={touched.Accidente} col="-6" label='¿Ha tenido usted algún accidente?' name='Accidente' place='Edo. y Municipio'/>
                                    <Inp errors={errors.Enfermedad} touched={touched.Enfermedad} col="-6" label='¿Padece alguna enfermedad crónica o hereditaria?' name='Enfermedad' place='Edo. y Municipio'/>
                                   
                                    

                                    <div className='col-12 pt-2'>
                                        <div className='row'>
                                            <label className="col-1 form-label pt-2 fw-bold">¿Fuma?</label>
                                                <Radio col ="-1" name="fuma" label="Si" />
                                                <Radio col ="-1" name="fuma" label="No" />                                    
                                        </div>
                                    </div>
                                    {Fuma&&<Inp errors={errors.fumdia} touched={touched.fumdia} col="-4" label='¿Cuantos al dia?' type="number" name='fumdia' place='Edo. y Municipio'/>}
                                    
                                    <div className='col-12 pt-2'>
                                        <div className='row'>
                                            <label className="col-1 form-label pt-2 fw-bold">¿Toma?</label>
                                                <Radio col ="-1" name="toma" label="Si" />
                                                <Radio col ="-1" name="toma" label="No" />                                    
                                        </div>
                                    </div>
                                    {Toma&&<Inp errors={errors.tomsem} touched={touched.tomsem} col="-4 mx-6" label='¿Frecuencia a la semana?' type="number" name='tomsem' place='Edo. y Municipio'/>}

                                
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
