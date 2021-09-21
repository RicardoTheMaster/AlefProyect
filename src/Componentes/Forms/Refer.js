import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Radio } from '../Elementos/Radio';
import { DatosJob } from './DatosJob';
import { DatosRefP } from './DatosRefP';
export const Refer = () => {
    const [Sel, setSel] = useState("")
    return (
             <Formik
                        initialValues={{
                            rad:'',
                            
                        }}
                        validate={(e)=>{
                            if (e.rad){
                                if(e.rad==="Si"){
                                    setSel("Si")
                                }else{
                                    setSel("No")
                                }
                            }

                        }}
                        
                        >
                        {
                        ()=>( 
                            <>
                            <Form>
                                <div className="pt-4">
                                        <hr /><h4 className="text">Selecciona tu area de interes/experiencia</h4><hr />
                                        <div className="row pt-4 text-center">
                                            <label className="col-4 form-label pt-2 fw-bold">¿Has tenido por lo menos 3 empleos?</label>
                                            <Radio col ="-1" name="rad" label="Si" />
                                            <Radio col ="-1" name="rad" label="No" />
                                        </div>
                                
                                </div>
                            </Form>
                            {
                             Sel==="Si" && <DatosJob /> 
                            }
                             {
                             Sel==="No" && <DatosRefP />
                             }
                            
                            </>
                        ) 
                        }
            
        </Formik> 
    )
}
