import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Inp } from '../Elementos/Inp'
import { ESP, razon, SN } from '../Elementos/Opts'
import { Radio } from '../Elementos/Radio'
import { Sel } from '../Elementos/Sel'

export const DatosAdic = () => {
    const [enviado, setEnviado] = useState(false);


    return (
    <div className="pt-4 animate__animated animate__backInUp ">
            <hr /><h4 className="text">Ultimos datos adicionales: Pero IMPORTANTES</h4><hr />
             
                    <p className="form-label">Selecciona almenos la primera especialidad/rama/ambito/campo que mas destaque en tu experiencia ó
                                                algúna especialidad que sea de tu interes. (Solo se usara para saber tus preferencias dentro de la pagina).
                    </p>

                    <Formik
                        initialValues={{
                            esp1:'',
                            esp2:'',
                            esp3:'',
                            detalles:'',
                            cv:'',
                            rad:'',
                        }}

                        onSubmit={(valores, {resetForm})=>{
                            console.log(valores)
                            setEnviado(true);
                            setTimeout(()=>setEnviado(false),5000);
                        }}
                    >
                        {
                        ({errors, touched,setFieldValue})=>(
                            <Form>
                                <div className="row pt-4">
                                    <Sel col="-12 col-sm-4" label="Primera" name="esp1" Opts={ESP}/>
                                    <Sel col="-12 col-sm-4" label="Segunda" name="esp2" Opts={ESP}/>
                                    <Sel col="-12 col-sm-4" label="Tercera" name="esp3" Opts={ESP}/>
                                </div>
                                <div className="row pt-4">
                                    <Sel col="-12 col-sm-7" label="¿Haz desertado de un proceso de selección en donde ya te habían contactado?" name="esp2" Opts={SN}/>
                                    <Sel col="-12 col-sm-5" label="¿Cuál fue la razón" name="esp2" Opts={razon}/>
                                   
                                    
                                </div> 

                                <div className='row pt-4'>
                                    <label>¿Cuál crees que sea la causa del incremento en la gran rotación de personal de algunas empresas en tu experiencia? (puedes elegir más de una opción)</label>
                                    <Radio col ="-sm-4 col-12" type="checkbox" name="rad" label="Sueldos muy bajos para los horarios o tareas " />
                                    <Radio col ="-sm-4 col-12" type="checkbox" name="rad" label="No dan prestaciones  " />
                                    <Radio col ="-sm-4 col-12" type="checkbox" name="rad" label="Ofrecen prestaciones que no cumplen " />
                                    <Radio col ="-sm-4 col-12" type="checkbox" name="rad" label="No pagan días festivos u otros que se deberían cobrar al doble " />
                                    <Radio col ="-sm-4 col-12" type="checkbox" name="rad" label="El Clima laboral es muy desigual e incomodo" />
                                    <Radio col ="-sm-4 col-12" type="checkbox" name="rad" label="Poca capacitación para las tareas a realizar  " />
                                    <Radio col ="-sm-4 col-12" type="checkbox" name="rad" label="Estrés y malos tratos  " />
                                    <Radio col ="-sm-4 col-12" type="checkbox" name="rad" label="Otro " />
                                </div>
                                <div className='row pt-4'>
                                    <Sel col="-12 col-sm-6" label="¿Haz aplicado en un periodo a muchos empleos en donde te resultó difícil ser contratado?" name="esp2" Opts={SN}/>
                                    <Sel col="-12 col-sm-6" label="¿Cuál crees o cual razón te dieron para no ser contratado?" name="esp2" Opts={SN}/>
                                    <Inp errors={errors.penultT_motivo} touched={touched.penultT_motivo} col="-12" label='¿Cuál crees que sería una buena opción para que las empresas se decidieran a contratar personal sin experiencia?' name='penultT_motivo' place='500 caracteres maximo' as="textarea"/>


                                </div>
                                <div className="row pt-4">
                                    <Inp errors={errors.penultT_motivo} touched={touched.penultT_motivo} col="-12" label='Cuentanos aquellos detalles/aptitudes/constancias/certificados. Que consideres las empresas deban de saber.(500 caracteres maximo)' name='penultT_motivo' place='Puedes expresar libremente tus pensamientos, cualidades o esos pequeños detalles que te hagan sobre salir de los demas.' as="textarea"/>
                                    
                                    <div className="col-12 pt-2">
                                    <label htmlFor="file" className=" form-label pt-2">Puedes subir como dato adicional un CV que ya hayas creado: </label>
                                        <input id="file" name="file" className="col-12 form-label py-2 px-2 border" type="file" onChange={(event) => {
                                            setFieldValue("file", event.currentTarget.files[0]);
                                            }} />
                                    </div>
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
