import React from 'react'
import {NavLink} from 'react-router-dom'
import logo2 from '../Assets/Images/logo2.png'
export const Header = () => {
    return (
        <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <NavLink exact to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        
        
        <img className="bi me-2" width="45" height="45" aria-label="Bootstrap"src={logo2} alt="logo"/>

        </NavLink>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><NavLink exact to="/"      activeClassName="link-dark" className="nav-item nav-link px-2 ">Home</NavLink></li>
                <li><NavLink exact to="/BuReg" activeClassName="link-dark" className="nav-item nav-link px-2">Empresas</NavLink></li>
                <li><NavLink exact to="/UsReg" activeClassName="link-dark" className="nav-item nav-link px-2">Registro</NavLink></li>
                
            </ul>
            
            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">Iniciar Sesion</button>
            </div>
        </header>
  </div>
    )
}

/*
<img src={logo2} alt="logo"/>
 <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
 
<li><NavLink to="#" activeClassName="active" className="nav-link px-2 link-dark">FAQs</NavLink></li>
                <li><NavLink to="#" activeClassName="active" className="nav-link px-2 link-dark">About</NavLink></li>





 */