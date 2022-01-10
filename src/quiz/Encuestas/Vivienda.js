import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Inp } from '../../Componentes/Elementos/Inp'
import { Radio } from '../../Componentes/Elementos/Radio'
import { Sel } from '../../Componentes/Elementos/Sel'

export const Vivienda = () => {
    const [Nhermanos, setNhermanos] = useState(1);
    const [enviado, setEnviado] = useState(false);

    return (
        <div className='row'>
            <div className='col-12 text-center pb-4'>
                <h4>Personas que viven en el domicilio.</h4>
            </div>
            <Formik
                        initialValues={{
                            Personas:{}
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
                                    
                                   
                                    <div className='col-12 pt-4'>
                                        <div className='row'>
                                            <label className="col-2 form-label pt-2 fw-bold">Personas:</label>
                                                <div className='col-2 pt-2'>
                                                    <button type="button" className='btn btn-outline-secondary pt-0 pb-1 fw-bold' onClick={()=>setNhermanos(Nhermanos+1)}> + </button>                                    
                                                </div>
                                                <div className='col-2 pt-2'>
                                                    {Nhermanos!==0 &&
                                                    <button type="button" className='btn btn-outline-danger pt-0 pb-1 fw-bold'  onClick={()=>setNhermanos(Nhermanos-1)}> - </button>                                    
                                                    }
                                                </div>
                                
                                        </div>
                                    </div>
                                    {[...Array(Nhermanos)].map((x,y)=><div key={'asd'+y}>
                                    <h5>Persona: {y+1}</h5>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-6" label='Nombre completo' name={'Personas.persona'+y+'.nombre'} place='Nombre Apellido Apellido'/>
                                    <div className='col-12'>
                                        <div className='row justify-content-center pt-4'>
                                            <label className="col-1 form-label pt-2 fw-bold">Prentesco:</label>
                                                <Radio col ="-2" name={'Personas.persona'+y+'.paren'} label="Primo(a)" />
                                                <Radio col ="-2" name={'Personas.persona'+y+'.paren'} label="Cuñado(a)" /> 
                                                <Radio col ="-2" name={'Personas.persona'+y+'.paren'} label="Suegro(a)" />      
                                                <Radio col ="-2" name={'Personas.persona'+y+'.paren'} label="Amigo(a)" />                                 
                                                <Radio col ="-2" name={'Personas.persona'+y+'.paren'} label="Padrastro" />                                 
                                                <Radio col ="-2" name={'Personas.persona'+y+'.paren'} label="Madrastra" />                                 
                                                <Radio col ="-2" name={'Personas.persona'+y+'.paren'} label="Abuelo(a)" />                                 
                                        </div>
                                    </div>
                                    <hr className='mt-4'/>
                                    </div>
                                    )
                                                                
                                    }
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
