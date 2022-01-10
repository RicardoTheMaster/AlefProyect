import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'
import { Economica } from './Encuestas/Economica';
import { Evidencias } from './Encuestas/Evidencias';
import { Familiar } from './Encuestas/Familiar';
import { General } from './Encuestas/General';
import { Medica } from './Encuestas/Medica';
import { PDom } from './Encuestas/PDom';
import { Vivienda } from './Encuestas/Vivienda';

export const Encuestas = () => {
    let {path,url}=useRouteMatch();
     const Inicio =()=>{
         return <>
         <div className=' row justify-content-center '>
                <div className='col-sm-6 col-12 pt-3'>
                    <div className=' border text-center rounded ' >
                        <div className='mb-0'>
                            <label className='fs-6 fw-bold'>Informacion general</label>
                            <hr className='my-0'/>
                        </div>
                        <div className='py-2'>
                            <NavLink exact to={url+"/General"} className='btn btn-primary py-0'>Contestar</NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-12 pt-3'>
                    <div className=' border text-center rounded ' >
                        <div className='mb-0'>
                            <label className='fs-6 fw-bold'>Área médica testimonial</label>
                            <hr className='my-0'/>
                        </div>
                        <div className='py-2'>
                            <NavLink exact to={url+"/Medica"} className='btn btn-primary py-0'>Contestar</NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-12 pt-3'>
                    <div className=' border text-center rounded ' >
                        <div className='mb-0'>
                            <label className='fs-6 fw-bold'>Marco Familiar</label>
                            <hr className='my-0'/>
                        </div>
                        <div className='py-2'>
                            <NavLink exact to={url+"/Familiar"} className='btn btn-primary py-0'>Contestar</NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-12 pt-3'>
                    <div className=' border text-center rounded ' >
                        <div className='mb-0'>
                            <label className='fw-bold' Style="font-size: .85rem !important;">Personas que viven en el domicilio</label>
                            <hr className='my-0'/>
                        </div>
                        <div className='py-2'>
                            <NavLink exact to={url+"/PDom"} className='btn btn-primary py-0'>Contestar</NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-12 pt-3'>
                    <div className=' border text-center rounded ' >
                        <div className='mb-0'>
                            <label className='fs-6 fw-bold'>Datos de la vivienda</label>
                            <hr className='my-0'/>
                        </div>
                        <div className='py-2'>
                            <NavLink exact to={url+"/Vivienda"} className='btn btn-primary py-0'>Contestar</NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-12 pt-3' >
                    <div className=' border text-center rounded ' >
                        <div className='mb-0'>
                            <label className='fs-6 fw-bold'>Área económica</label>
                            <hr className='my-0'/>
                        </div>
                        <div className='py-2'>
                            <NavLink exact to={url+"/Economica"} className='btn btn-primary py-0'>Contestar</NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-12 pt-3' >
                    <div className=' border text-center rounded ' >
                        <div className='mb-0'>
                            <label className='fw-bold' Style="font-size: .85rem !important;">Evidencias fotográficas y ubicación</label>
                            <hr className='my-0'/>
                        </div>
                        <div className='py-2'>
                            
                            <NavLink exact to={url+"/Evidencias"} className='btn btn-primary py-0'>Contestar</NavLink>

                        </div>
                    </div>
                </div>

            
        </div>
         </>
     }
    return (
            <Switch> 
                <Route exact path={path} component={Inicio}/>
                <Route exact path={path+"/General"} component={General}/>
                <Route exact path={path+"/Medica"} component={Medica}/>
                <Route exact path={path+"/Familiar"} component={Familiar}/>
                <Route exact path={path+"/PDom"} component={Vivienda}/>
                <Route exact path={path+"/Vivienda"} component={PDom}/>
                <Route exact path={path+"/Economica"} component={Economica}/>
                <Route exact path={path+"/Evidencias"} component={Evidencias}/>
            </Switch>
    )
}
