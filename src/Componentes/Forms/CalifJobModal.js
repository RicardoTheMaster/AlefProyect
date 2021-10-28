import React from 'react'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Sel } from '../Elementos/Sel';
import { diez, motivo, SN } from '../Elementos/Opts';
import { Inp } from '../Elementos/Inp';


export const CalifJobModal = ({Consul=""}) => {
    const Personales=""

    return (
        <div className=" modal fade  stick-up" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">¡Danos tu opinion!</h5>
                        <h5> </h5>
                        
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                            <label className='px-2 pt-4'>En las siguientes preguntas selecciona del 1 al 10 (donde aplique) donde 1 es lo mas bajo/menor/etc. y 10 es lo mejor/mayor/etc.</label>
            <div className="modal-body">
                
               
                    <Formik
                    initialValues={{
                        msj:''
                    }}

                    onSubmit={(valores,{resetForm})=>{
                        console.log("enviados")
                    }}
                    validationSchema={Personales}

                    >
                    {
                        ({errors, touched,setFieldValue})=>(
                            <Form>
                            <hr/>
                            <div className='text-end pt-2'>
                                <h5>Trabajo 1</h5>
                            </div>
                            <hr/>
                            <Sel col="-12 pt-2" label="¿Las prestaciones ofrecidas por esta empresa?" name="esp3" Opts={diez}/>
                            <Sel col="-12 pt-2" label="¿Sueldo de acuerdo a el horario laboral?" name="esp3" Opts={diez}/>
                            <Sel col="-12 pt-2" label="¿Clima laboral de esta empresa?" name="esp3" Opts={diez}/>
                            <Sel col="-12 pt-2" label="¿Cuál fue el motivo que te hizo renunciar a la empresa?" name="esp3" Opts={motivo}/>
                            <div className='row'>
                                <Sel col="-4 pt-2" label="Lo recomiendas" name="esp3" Opts={SN}/>
                                <Inp errors={errors.antpenultT_motivo} touched={touched.antpenultT_motivo} col="-8" label='¿Por que?' name='antpenultT_motivo' place='Detalla segun tu punto de vista o tu testimonio' as="textarea"/>
                            </div>

                            <Sel col="-12 pt-2" label="¿Qué deberia de mejorar?" name="esp3" Opts={motivo}/>


                            <hr/>
                            <div className='text-end pt-2'>
                                <h5>Trabajo 2</h5>
                            </div>
                            <hr/>
                            <Sel col="-12 pt-2" label="¿Las prestaciones ofrecidas por esta empresa?" name="esp3" Opts={diez}/>
                            <Sel col="-12 pt-2" label="¿Sueldo de acuerdo a el horario laboral?" name="esp3" Opts={diez}/>
                            <Sel col="-12 pt-2" label="¿Clima laboral de esta empresa?" name="esp3" Opts={diez}/>
                            <Sel col="-12 pt-2" label="¿Cuál fue el motivo que te hizo renunciar a la empresa?" name="esp3" Opts={motivo}/>
                            <div className='row'>
                                <Sel col="-4 pt-2" label="Lo recomiendas" name="esp3" Opts={SN}/>
                                <Inp errors={errors.antpenultT_motivo} touched={touched.antpenultT_motivo} col="-8" label='¿Por que?' name='antpenultT_motivo' place='Detalla segun tu punto de vista o tu testimonio' as="textarea"/>
                            </div>

                            <Sel col="-12 pt-2" label="¿Qué deberia de mejorar?" name="esp3" Opts={motivo}/>


                            <hr/>
                            <div className='text-end pt-2'>
                                <h5>Trabajo 3</h5>
                            </div>
                            <hr/>
                            <Sel col="-12 pt-2" label="¿Las prestaciones ofrecidas por esta empresa?" name="esp3" Opts={diez}/>
                            <Sel col="-12 pt-2" label="¿Sueldo de acuerdo a el horario laboral?" name="esp3" Opts={diez}/>
                            <Sel col="-12 pt-2" label="¿Clima laboral de esta empresa?" name="esp3" Opts={diez}/>
                            <Sel col="-12 pt-2" label="¿Cuál fue el motivo que te hizo renunciar a la empresa?" name="esp3" Opts={motivo}/>
                            <div className='row'>
                                <Sel col="-4 pt-2" label="Lo recomiendas" name="esp3" Opts={SN}/>
                                <Inp errors={errors.antpenultT_motivo} touched={touched.antpenultT_motivo} col="-8" label='¿Por que?' name='antpenultT_motivo' place='Detalla segun tu punto de vista o tu testimonio' as="textarea"/>
                            </div>

                            <Sel col="-12 pt-2" label="¿Qué deberia de mejorar?" name="esp3" Opts={motivo}/>

                            </Form>
                            
                           
                            
                        ) 
                        }
                    </Formik>
            </div>

            <div className="modal-footer">
                
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            
            </div>
        </div>
        </div>
        </div>

    )
}
