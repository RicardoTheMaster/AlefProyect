import React from 'react'
import { Route,Switch,NavLink } from 'react-router-dom'
import { DatosEsc } from '../Componentes/Forms/DatosEsc'
import { DatosJob } from '../Componentes/Forms/DatosJob'
import { DatosMedic } from '../Componentes/Forms/DatosMedic'
import { DatosPers } from '../Componentes/Forms/DatosPers'
import { DatosRefP } from '../Componentes/Forms/DatosRefP'
import { InfoRouter } from '../Router/InfoRouter'

export const InfoScreen = () => {
    return (
        <div>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Datos: </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li><NavLink exact to="/Info/Personales" activeClassName="active" className="nav-item nav-link px-4">Personales</NavLink></li>
                    <li><NavLink exact to="/Info/Laborales" activeClassName="active" className="nav-item nav-link px-4">Laborales</NavLink></li>
                    <li><NavLink exact to="/Info/Escolares" activeClassName="active" className="nav-item nav-link px-4">Escolares</NavLink></li>
                    <li><NavLink exact to="/Info/Medicos" activeClassName="active" className="nav-item nav-link px-4">Medicos</NavLink></li>

                    </ul>
                   
                    </div>
                </div>
            </nav>
            <div className="pb-5">
            <Switch>
                    <Route exact path="/Info/Personales" component={DatosPers}/>
                    <Route exact path="/Info/Escolares" component={DatosEsc}/>
                    <Route exact path="/Info/Laborales" component={DatosJob}/>
                    <Route exact path="/Info/Medicos" component={DatosMedic}/>
            </Switch>
            </div>
        </div>
    )
 
}
