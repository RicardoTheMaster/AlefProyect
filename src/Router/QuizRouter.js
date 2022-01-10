
import React, { Component, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Footer } from '../Componentes/Footer';
import { Encuestas } from '../quiz/encuestas';
import { footer } from '../quiz/footer';

import { Qheader } from '../quiz/header';
import { home } from '../quiz/home';
import { login } from '../quiz/login';
import { registro } from '../quiz/registro';

export const QuizRouter = () => {
    useEffect(() => {
        setTimeout(() => {
            let f=document.getElementById('HeaderUser')
            if(f){
                f.remove()
            }
        }, 3);
    }, [])
    
    return (
        <Router>
            <Qheader />
 
            <div className="container">
                <Switch>
                    <Route exact path="/AlefProyect/Quizz" component={home}/>
                    <Route exact path="/AlefProyect/Quizz/Reg" component={registro}/>
                    <Route path="/AlefProyect/Quizz/Encuestas" component={Encuestas}/>
                    <Route exact path="/Quizz/" component={home}/>

                    <Redirect to="/AlefProyect/Quizz"/>
                </Switch>
            </div>
            <Footer />
            
        </Router>
    )
}
