import React from 'react'
import {NavLink} from 'react-router-dom'
import logo2 from '../Assets/Images/logo2.png'
export const Qheader = () => {
    return (
        <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <NavLink exact to="/AlefProyect/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        
        
        <img className="bi me-2" width="45" height="45" aria-label="Bootstrap"src={logo2} alt="logo"/>

        </NavLink>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><NavLink exact to="/AlefProyect/"      activeClassName="link-dark" className="nav-item nav-link px-2 ">Home</NavLink></li>
                <li><NavLink exact to="/AlefProyect/Quizz/login" activeClassName="link-dark" className="nav-item nav-link px-2">Login</NavLink></li>
                <li><NavLink exact to="/AlefProyect/Quizz/Reg" activeClassName="link-dark" className="nav-item nav-link px-2">Registro</NavLink></li>
                <li><NavLink exact to="/AlefProyect/Quizz/encuesta" activeClassName="link-dark" className="nav-item nav-link px-2">Encuesta</NavLink></li>

            </ul>
            
     
            <div className="col-md-3 text-end">
            <NavLink exact to="/AlefProyect/Login"><button type="button" className="btn btn-outline-primary me-2">Iniciar Sesion</button>
            </NavLink>
            </div>
        </header>
        
        </div>
    )
}