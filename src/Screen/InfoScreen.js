import React from 'react'
import { Route,Switch,NavLink } from 'react-router-dom'
import { DatosEsc } from '../Componentes/Forms/DatosEsc'
import { DatosAdic } from '../Componentes/Forms/DatosAdic'
import { DatosMedic } from '../Componentes/Forms/DatosMedic'
import { DatosPers } from '../Componentes/Forms/DatosPers'
import { Refer } from '../Componentes/Forms/Refer'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'

export const InfoScreen = () => {

    let {path,url}=useRouteMatch();
    return (
        <div className='animate__animated2 animate__backInDown'>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Datos: </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li><NavLink exact to={url+"/Personales"} activeClassName="active" className="nav-item nav-link px-4">Personales</NavLink></li>
                    <li><NavLink exact to={url+"/Laborales"} activeClassName="active" className="nav-item nav-link px-4">Laborales</NavLink></li>
                    <li><NavLink exact to={url+"/Escolares"} activeClassName="active" className="nav-item nav-link px-4">Escolares</NavLink></li>
                    <li><NavLink exact to={url+"/Medicos"} activeClassName="active" className="nav-item nav-link px-4">Medicos</NavLink></li>
                    <li><NavLink exact to={url+"/Extras"} activeClassName="active" className="nav-item nav-link px-4">Extras</NavLink></li>

                    </ul>
                   
                    </div>
                </div>
            </nav>
            <div className="pb-5">
            <Switch>
                    <Route exact path={path+"/Personales"} component={DatosPers}/>
                    <Route exact path={path+"/Escolares"} component={DatosEsc}/>
                    <Route exact path={path+"/Laborales"} component={Refer}/>
                    <Route exact path={path+"/Medicos"} component={DatosMedic}/>
                    <Route exact path={path+"/Extras"} component={DatosAdic}/>
            </Switch>
            </div>
        </div>
    )
 
}
