import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Inp } from '../../Componentes/Elementos/Inp';
import { civil, edos, ESP, NAC } from '../../Componentes/Elementos/Opts';
import { Radio } from '../../Componentes/Elementos/Radio';
import { Sel } from '../../Componentes/Elementos/Sel';

export const General = () => {
    const [enviado, setEnviado] = useState(false);
    const [Militar, setMilitar] = useState('No')
    const [Conducir, setConducir] = useState('No')
    const [Credencial, setCredencial] = useState('No')
    const [Antecedentes, setAntecedentes] = useState('No')
    const [Antec, setAntec] = useState('No')
    const [Redes, setRedes] = useState([])

    return (
        <div className='row'>
            <div className='col-12 text-center pb-4'>
                <h4>Información general del candidato</h4>
            </div>
            <Formik
                        initialValues={{
                            NombreCom:'',
                            Domicilio:'',
                            Telefono:'',
                            FechaNac:'',
                            LugarNac:'',
                            ActaNac:{
                                Ofi:'',
                                Tomo:'',
                                Hoja:'',
                                Acta:'',
                                Fecha:'',
                            },
                            CURP:'',
                            NSS:'',
                            RFC:'',
                            Nac:'',
                            EdoCiv:'',
                            militar:'',
                            Cartilla:{
                                Matricula:'',
                                Fecha:'',
                            },
                            conducir:'',
                            LicCon:{
                                Tipo:'',
                                Num:'',
                                Vig:'',
                                Edo:'',
                            },
                            credencial:'',
                            CreEl:{
                                Clave:'',
                                Vig:'',
                            },
                            antecedentes:'',
                            NoAnt:{
                                Entidad:'',
                                Fecha:'',
                                Folio:'',
                                antec:'',
                                tipo:'',
                            },
                            redes:'',
                            Redes:{
                                Facebook:'',
                                Instagram:'',
                                Telegram:'',
                                Linkedin:'',
                                Twitter:'',
                                Otro:'',
                            },
                        }}

                        onSubmit={(valores, {resetForm})=>{
                            console.log(valores)
                        }}

                        validate={(e)=>{
                            if(e.militar==='Si'){
                                setMilitar('Si')
                            }else{
                                setMilitar('No')
                            }
                            if(e.conducir==='Si'){
                                setConducir('Si')
                            }else{
                                setConducir('No')
                            }
                            if(e.credencial==='Si'){
                                setCredencial('Si')
                            }else{
                                setCredencial('No')
                            }
                            if(e.antecedentes==='Si'){
                                setAntecedentes('Si')
                            }else{
                                setAntecedentes('No')
                            }
                            if(e.NoAnt.antec==='Si'){
                                setAntec('Si')
                            }else{
                                setAntec('No')
                            }
                            if(e.redes){
                                setRedes(e.redes)
                                console.log('existe')
                            }else{
                                setRedes([])
                            }
                        }}
                    >
                        {
                        ({errors, touched,setFieldValue})=>(
                            <Form>
                                <div className="row pt-4">
                                    <Inp errors={errors.NombreCom} touched={touched.NombreCom} col="-12" label='Nombre completo' name='NombreCom' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.Domicilio} touched={touched.Domicilio} col="-12" label='Domicilio' name='Domicilio' place='Calle # Col. Edo. CP'/>
                                    <Inp errors={errors.Telefono} touched={touched.Telefono} col="-4" label='Telefono' name='Telefono' place='10 digitos maximo'/>
                                    <Inp errors={errors.FechaNac} touched={touched.FechaNac} col="-4" label='Fecha de nacimiento' name='FechaNac' place='DD/MM/AAA' type="date"/>
                                    <Inp errors={errors.LugarNac} touched={touched.LugarNac} col="-4" label='Lugar de nacimiento' name='LugarNac' place='Edo. y Municipio'/>
                                    <hr className='mt-4'/>
                                    <label>Datos de acta de nacimiento: Recuerda que todos estos datos estan la parte superior del acta.</label>
                                    <Inp errors={errors.ActaNac} touched={touched.ActaNac} col="-2" label='Oficialía' name={'ActaNac.Ofi'} place='07'/>
                                    <Inp errors={errors.ActaNac} touched={touched.ActaNac} col="-2" label='Tomo' name='ActaNac.Tomo' place='03'/>
                                    <Inp errors={errors.ActaNac} touched={touched.ActaNac} col="-2" label='Hoja' name='ActaNac.Hoja' place='35'/>
                                    <Inp errors={errors.ActaNac} touched={touched.ActaNac} col="-2" label='Acta' name='ActaNac.Acta' place='615'/>
                                    <Inp errors={errors.ActaNac} touched={touched.ActaNac} col="-3" label='Fecha de registro' name='ActaNac.Fecha' place='DD/MM/AAAA' type="date"/>
                                    <hr className='mt-4'/>
                                    <Inp errors={errors.CURP} touched={touched.CURP} col="-3" label='CURP' name='CURP' place='XXXXNNNNNNXXXXXXN' />
                                    <Inp errors={errors.NSS} touched={touched.NSS} col="-3" label='NSS' name='NSS' place='1231234312321' />
                                    <Inp errors={errors.RFC} touched={touched.RFC} col="-3" label='RFC' name='RFC' place='XXXXNNNNNNYYY' />
                                    <Sel errors={errors.Nac} touched={touched.Nac}col="-8 col-sm-4" label='Nacionalidad' name='Nac' Opts={NAC}  />
                                    <Sel errors={errors.EdoCiv} touched={touched.EdoCiv}col="-8 col-sm-4" label='Estado civil' name='EdoCiv' Opts={civil}  />
                                    <div className='col-12'>
                                        <div className='row'>
                                            <label className="col-4 form-label pt-2 fw-bold">Cartilla militar</label>
                                                <Radio col ="-1" name="militar" label="Si" />
                                                <Radio col ="-1" name="militar" label="No" />
                                                <Radio col ="-1" name="militar" label="N/A" />                                    
                                        </div>
                                    </div>
                                    {
                                      Militar==='Si' && (<>
                                        <Inp errors={errors.Cartilla} touched={touched.Cartilla.Matricula} col="-6" label='Matricula' name='Cartilla.Matricula' place='1234123' />
                                        <Inp errors={errors.Cartilla} touched={touched.Cartilla.Fecha} col="-6" label='Fecha expedicion' name='Cartilla.Fecha' type="date" place='DD/MM/AAA' />
                                        <hr className='mt-4'/>

                                      </>)  
                                    }

                                    <div className='col-12'>
                                        <div className='row'>
                                            <label className="col-5 form-label pt-2 fw-bold">Licencia de conducir</label>
                                                <Radio col ="-1" name="conducir" label="Si" />
                                                <Radio col ="-1" name="conducir" label="No" />                                    
                                        </div>
                                    </div>
                                    {
                                      Conducir==='Si' && (<>
                                        <Inp errors={errors.LicCon} touched={touched.LicCon} col="-6" label='Tipo' name='LicCon.Tipo' place='A/B/S/C' />
                                        <Inp errors={errors.LicCon} touched={touched.LicCon} col="-6" label='Numero' name='LicCon.Num' place='1234567890' />
                                        <Inp errors={errors.LicCon} touched={touched.LicCon} col="-6" label='Vigencia' name='LicCon.Vig' type="date" place='DD/MM/AAA' />
                                        <Sel errors={errors.LicCon} touched={touched.LicCon}col="-6" label='Estado' name='LicCon.Edo' Opts={edos}  />
                                        <hr className='mt-4'/>

                                      </>)  
                                    }
                                    
                                    <div className='col-12'>
                                        <div className='row'>
                                            <label className="col-5 form-label pt-2 fw-bold">Credencial de elector</label>
                                                <Radio col ="-1" name="credencial" label="Si" />
                                                <Radio col ="-1" name="credencial" label="No" />                                    
                                        </div>
                                    </div>
                                    {
                                      Credencial==='Si' && (<>
                                        <Inp errors={errors.CreEl} touched={touched.CreEl} col="-6" label='Clave' name='CreEl.Clave' place='A/B/S/C' />
                                        <Inp errors={errors.CreEl} touched={touched.CreEl} col="-6" label='Vigencia' name='CreEl.Vig' place='1234567890' />
                                        <hr className='mt-4'/>
                                        <div className='col-12 pt-4'>
                                            <img className="img-thumbnail" alt="img ine"src="https://static.promodescuentos.com/pepperpdimages/comments/content/iKZSR/2843814.jpg"/>
                                        </div>
                                        <hr className='mt-4'/>
                                        
                                      </>)  
                                    }

                                    <div className='col-12'>
                                        <div className='row'>
                                            <label className="col-5 form-label pt-2 fw-bold">Carta de no antecedentes penales</label>
                                                <Radio col ="-1" name="antecedentes" label="Si" />
                                                <Radio col ="-1" name="antecedentes" label="No" />                                    
                                        </div>
                                    </div>
                                    {
                                      Antecedentes==='Si' && (<>
                                        <Inp errors={errors.NoAnt} touched={touched.NoAnt} col="-6" label='Entidad que expide' name='NoAnt.Entidad' place='A/B/S/C' />
                                        <Inp errors={errors.NoAnt} touched={touched.NoAnt} col="-6" label='Fecha' name='NoAnt.Fecha' place='1234567890' />
                                        <Inp errors={errors.NoAnt} touched={touched.NoAnt} col="-6" label='Folio' name='NoAnt.Folio' type="date" place='DD/MM/AAA' />
                                            <div className='col-12'>
                                                <div className='row'>
                                                    <label className="col-5 form-label pt-2 fw-bold">Antecedentes</label>
                                                        <Radio col ="-1" name="NoAnt.antec" label="Si" />
                                                        <Radio col ="-1" name="NoAnt.antec" label="No" />                                    
                                                </div>
                                            </div>
                                            {
                                            Antec==='Si' && (<>
                                                <Inp errors={errors.NoAnt} touched={touched.NoAnt} col="-6" label='Antecedente' name='NoAnt.tipo' type="text-area" place='Escribelo tal cual viene en el documento' />
                                                
                                                
                                                
                                            </>)  
                                            }
                                        <hr className='mt-4'/>
                                        
                                        
                                      </>)  
                                    }
                                    <div className='col-12'>
                                        <div className='row justify-content-center'>
                                            <label className="col-3 form-label pt-2 fw-bold">Redes sociales</label>
                                                <Radio col ="-2" name="redes" label="Facebook" type="checkbox"/>
                                                <Radio col ="-2" name="redes" label="Instagram" type="checkbox"/>  
                                                <Radio col ="-2" name="redes" label="Telegram" type="checkbox"/>
                                                <Radio col ="-2" name="redes" label="Twitter" type="checkbox"/> 
                                                <Radio col ="-2" name="redes" label="Linkedin" type="checkbox"/>                                  
                                                <Radio col ="-2" name="redes" label="Otro" type="checkbox"/>                                  
                                 
                                        </div>
                                    </div>
                                    {
                                      Redes && (<>
                                            {Redes.map((x,y)=>( <Inp key={x} col="-6" label={x} name={'Redes.'+x} place={'Inserta el link de tu '+x} />))}
                                    </>)  
                                    }
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
