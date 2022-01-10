import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Inp } from '../../Componentes/Elementos/Inp'
import { Grado, ocup } from '../../Componentes/Elementos/Opts'
import { Radio } from '../../Componentes/Elementos/Radio'
import { Sel } from '../../Componentes/Elementos/Sel'

export const Familiar = () => {
    const [enviado, setEnviado] = useState(false);
    const [Padre, setPadre] = useState(false);
    const [Madre, setMadre] = useState(false);
    const [Esposo, setEsposo] = useState(false);
    const [Nhijos, setNhijos] = useState(0);
    const [Nhermanos, setNhermanos] = useState(0);


   
    return (
        <div className='row'>
            <div className='col-12 text-center pb-4'>
                <h4>Marco familiar.</h4>
            </div>
            <Formik
                        initialValues={{
                            padre:'',
                            Padre:{
                                apP:'',
                                apM:'',
                                Nom:'',
                                Edad:'',
                                Esc:'',
                                Ocup:'',
                            },
                            madre:'',
                            Madre:{
                                apP:'',
                                apM:'',
                                Nom:'',
                                Edad:'',
                                Esc:'',
                                Ocup:'',
                            },
                            esposo:'',
                            Esposo:{
                                apP:'',
                                apM:'',
                                Nom:'',
                                Edad:'',
                                Esc:'',
                                Ocup:'',
                            },
                            Hijos:{},
                            Hermanos:{}
                        }}

                        onSubmit={(valores, {resetForm})=>{
                            console.log(valores)
                        }}

                        validate={(e)=>{
                            if(e.padre==='Vivo'){
                                setPadre(true)
                            }else{
                                setPadre(false)
                            }
                            if(e.madre==='Viva'){
                                setMadre(true)
                            }else{
                                setMadre(false)
                            }
                            if(e.esposo==='Viv@'){
                                setEsposo(true)
                            }else{
                                setEsposo(false)
                            }
                        }}
                    >
                        {
                        ({errors, touched,setFieldValue})=>(
                            <Form>
                                <div className="row pt-4">
                                    
                                    <div className='col-12'>
                                        <div className='row'>
                                            <label className="col-2 form-label pt-2 fw-bold">Padre:</label>
                                                <Radio col ="-1" name="padre" label="Vivo" />
                                                <Radio col ="-1" name="padre" label="N/A" /> 
                                                <Radio col ="-1" name="padre" label="Desc" />      
                                                <Radio col ="-2" name="padre" label="Finado" />                                 
                                        </div>
                                    </div>
                                    {Padre&&(<>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Apellido patero' name='Padre.apP' place='Nombre Apellido Apellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Apellido materno' name='Padre.apM' place='Nombre Apellido Apellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Nombre(s)' name='Padre.Nom' place='Nombre Apellido Apellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Edad' name='Padre.Edad' place='Nombre Apellido Apellido'/>
                                    <Sel errors={errors.nacionalidad} touched={touched.nacionalidad}col="-6" label='Escolaridad' name='Padre.Esc' Opts={Grado}  />
                                    <Sel errors={errors.nacionalidad} touched={touched.nacionalidad}col="-6" label='Ocupacion' name='Padre.Ocup' Opts={ocup}  />

                                    </>
                                    )}
                                    
                                    <div className='col-12'>
                                        <div className='row'>
                                            <label className="col-2 form-label pt-2 fw-bold">Madre:</label>
                                                <Radio col ="-1" name="madre" label="Viva" />
                                                <Radio col ="-1" name="madre" label="N/A" /> 
                                                <Radio col ="-1" name="madre" label="Desc" /> 
                                                <Radio col ="-2" name="madre" label="Finada" />                                     
                                    
                                        </div>
                                    </div>
                                    {Madre&&(<>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Apellido patero' name='Madre.apP' place='Nombre Apellido Apellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Apellido materno' name='Madre.apM' place='Nombre Apellido Apellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Nombre(s)' name='Madre.Nom' place='Nombre Apellido Apellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Edad' name='Madre.Edad' place='Nombre Apellido Apellido'/>
                                    <Sel errors={errors.nacionalidad} touched={touched.nacionalidad}col="-6" label='Escolaridad' name='Madre.Esc' Opts={Grado}  />
                                    <Sel errors={errors.nacionalidad} touched={touched.nacionalidad}col="-6" label='Ocupacion' name='Madre.Ocup' Opts={ocup}  />

                                    </>
                                    )}
                                    
                                    <div className='col-12'>
                                        <div className='row'>
                                            <label className="col-2 form-label pt-2 fw-bold">Esposo(A):</label>
                                                <Radio col ="-1" name="esposo" label="Viv@" />
                                                <Radio col ="-1" name="esposo" label="N/A" /> 
                                                <Radio col ="-1" name="esposo" label="Desc" />     
                                                <Radio col ="-2" name="esposo" label="Finad@" />                                     
                                
                                        </div>
                                    </div>
                                    {Esposo&&(<>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Apellido patero' name='Esposo.apP' place='Nombre Apellido Apellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Apellido materno' name='Esposo.apM' place='Nombre Apellido Apellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Nombre(s)' name='Esposo.Nom' place='Nombre Apellido Apellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Edad' name='Esposo.Edad' place='Nombre Apellido Apellido'/>
                                    <Sel errors={errors.nacionalidad} touched={touched.nacionalidad}col="-6" label='Escolaridad' name='Esposo.Esc' Opts={Grado}  />
                                    <Sel errors={errors.nacionalidad} touched={touched.nacionalidad}col="-6" label='Ocupacion' name='Esposo.Ocup' Opts={ocup}  />

                                    </>
                                    )}
                                    

                                    <div className='col-12 pt-4'>
                                        <div className='row'>
                                            <label className="col-2 form-label pt-2 fw-bold">Hijo's(a):</label>
                                                <div className='col-2 pt-2'>
                                                    <button type="button" className='btn btn-outline-secondary pt-0 pb-1 fw-bold' onClick={()=>setNhijos(Nhijos+1)}> + </button>                                    
                                                </div>
                                                <div className='col-2 pt-2'>
                                                    {Nhijos!==0 &&
                                                    <button type="button" className='btn btn-outline-danger pt-0 pb-1 fw-bold'  onClick={()=>setNhijos(Nhijos-1)}> - </button>                                    
                                                    }
                                                </div>
                                
                                        </div>
                                    </div>
                                    {[...Array(Nhijos)].map((x,y)=><div key={'qwe'+y} className='row'>
                                    <h5 >Hijo: {y+1}</h5>
                                    <Inp  errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Apellido patero' name={'Hijos.Hijo'+y+'.apP'} place='Apellido'/>
                                    <Inp  errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Apellido materno' name={'Hijos.Hijo'+y+'.apM'} place='pellido'/>
                                    <Inp  errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Nombre(s)' name={'Hijos.Hijo'+y+'.Nom'} place='Nombre'/>
                                    <Inp  errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Edad' name={'Hijos.Hijo'+y+'.Edad'} place='Nombre Apellido Apellido'/>
                                    <Sel  errors={errors.nacionalidad} touched={touched.nacionalidad}col="-4" label='Escolaridad' name={'Hijos.Hijo'+y+'.Esc'} Opts={Grado}  />
                                    <Sel  errors={errors.nacionalidad} touched={touched.nacionalidad}col="-4" label='Ocupacion' name={'Hijos.Hijo'+y+'.Ocup'} Opts={ocup}  />
                                    <hr  className='mt-4'/>
                                    </div>
                                    )
                                                                
                                    }

                                    <div className='col-12 pt-4'>
                                        <div className='row'>
                                            <label className="col-2 form-label pt-2 fw-bold">Hermano's(a):</label>
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
                                    {[...Array(Nhermanos)].map((x,y)=><div key={'rst'+y} className='row'>
                                    <h5>Hermano: {y+1}</h5>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Apellido patero' name={'Hermanos.Hermano'+y+'.apP'} place='Apellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Apellido materno' name={'Hermanos.Hermano'+y+'.apM'} place='pellido'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Nombre(s)' name={'Hermanos.Hermano'+y+'.Nom'} place='Nombre'/>
                                    <Inp errors={errors.detsinexp} touched={touched.detsinexp} col="-4" label='Edad' name={'Hermanos.Hermano'+y+'.Edad'} place='Nombre Apellido Apellido'/>
                                    <Sel errors={errors.nacionalidad} touched={touched.nacionalidad}col="-4" label='Escolaridad' name={'Hermanos.Hermano'+y+'.Esc'} Opts={Grado}  />
                                    <Sel errors={errors.nacionalidad} touched={touched.nacionalidad}col="-4" label='Ocupacion' name={'Hermanos.Hermano'+y+'.Ocup'} Opts={ocup}  />
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
