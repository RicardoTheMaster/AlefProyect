import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Inp } from '../Elementos/Inp'
import { ESP } from '../Elementos/Opts'
import { Sel } from '../Elementos/Sel'

export const DatosAdic = () => {
    const [enviado, setEnviado] = useState(false);


    return (
    <div className="pt-4">
            <hr /><h4 className="text">Ultimos datos adicionales: Pero IMPORTANTES</h4><hr />
             
                    <p className="form-label">Selecciona almenos la primera especialidad/rama/ambito/campo que mas destaque en tu experiencia ó
                                                algúna especialidad que sea de tu interes. (Solo se usara para saber tus preferencias dentro de la pagina).
                    </p>

                    <Formik
                        initialValues={{
                            esp1:'',
                            esp2:'',
                            esp3:'',
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
                                    <Inp errors={errors.penultT_motivo} touched={touched.penultT_motivo} col="-12" label='Cuentanos aquellos detalles/aptitudes/et. Que consideres las empresas deban de saber.(500 caracteres maximo)' name='penultT_motivo' place='Puedes expresar libremente tus pensamientos, cualidades o esos pequeños detalles que te hagan sobre salir de los demas.' as="textarea"/>
                                    
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
