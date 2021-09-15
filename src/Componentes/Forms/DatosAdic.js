import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { ESP } from '../Elementos/Opts'
import { Sel } from '../Elementos/Sel'

export const DatosAdic = () => {
    const [enviado, setEnviado] = useState(false);
    return (
    <div className="pt-4">
            <hr /><h4 className="text">Ultimos datos adicionales: Pero IMPORTANTES</h4><hr />
             
                    <label className="form-label">Selecciona 3 areas de espcialidad a las cuales te gustaria postular:</label>

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
                        ()=>(
                            <Form>
                                <div className="row pt-4">
                                    <Sel col="-12 col-sm-4" label="Primera" name="esp1" Opts={ESP}/>
                                    <Sel col="-12 col-sm-4" label="Segunda" name="esp2" Opts={ESP}/>
                                    <Sel col="-12 col-sm-4" label="Tercera" name="esp3" Opts={ESP}/>
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
