import React from 'react'
import wsp from '../Assets/Images/wsp2.png'
import face from '../Assets/Images/face.png'
import inst from '../Assets/Images/inst.png'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
<div className="container ">
  <footer className="py-5" >
    <div className="row border-top py-2">
      <div className="col-4">
        <h5>¿Buscas algo mas?</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><NavLink exact to="/" className="nav-link p-0 text-muted">Home</NavLink></li>
          <li className="nav-item mb-2"><NavLink exact to="/" className="nav-link p-0 text-muted">Acuerdo de confidencialidad</NavLink></li>
          <li className="nav-item mb-2"><NavLink exact to="/" className="nav-link p-0 text-muted">Inicia sesion</NavLink></li>
          <li className="nav-item mb-2"><NavLink exact to="/" className="nav-link p-0 text-muted">Preguntas y respuestas</NavLink></li>
          <li className="nav-item mb-2"><NavLink exact to="/" className="nav-link p-0 text-muted">Acerca de nosotros</NavLink></li>
        </ul>
      </div>

     
      <div className="col-7 offset">
        <form>
          <h5>Dejanos tu correo y nosotros nos contactaremos contigo</h5>
          <p>Somos expertos en el capital humano y estaremos orgullosos de poder ayudarte</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2021 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        
        <li className="ms-3"><NavLink exact to="/AlefProyect/"><img src={wsp} className="bi" width="33" height="33" alt='wsp'></img></NavLink></li>
        <li className="ms-3"><NavLink exact to="/AlefProyect/"><img src={face} className="bi" width="30" height="30" alt='fb'></img></NavLink></li>
        <li className="ms-3"><NavLink exact to="/AlefProyect/"><img src={inst} className="bi" width="30" height="30" alt='insta'></img></NavLink></li>
      </ul>
    </div>
  </footer>
</div>
    )
}