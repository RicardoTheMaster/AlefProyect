
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Footer } from '../Componentes/Footer';

import { Header } from '../Componentes/Header';
import { Home } from '../Screen/Home';
import { InfoScreen } from '../Screen/InfoScreen';
import { UserScreen } from '../Screen/UserScreen';
import { PruebasScreen } from '../Screen/PruebasScreen';
import { PostsScreen } from '../Screen/PostsScreen';
import { QuizRouter } from './QuizRouter';

export const BasicRouter = () => {
    return (
        <Router>
            
             <div className="container">
             <Header />
                <Switch>
                    
                    <Route exact path="/AlefProyect/" component={Home}/>
                    <Route exact path="/AlefProyect/Login" component={UserScreen}/>
                    <Route exact path="/AlefProyect/Graficas" component={PruebasScreen}/>
                    <Route path="/AlefProyect/FirstReg" component={InfoScreen}/>
                    <Route path="/AlefProyect/Postulaciones" component={PostsScreen}/>
                    <Route path="/AlefProyect/Quizz" component={QuizRouter}/>
                    
                    <Redirect to="/AlefProyect/"/>
                </Switch>
            </div>
            <Footer />
            
        </Router>
    )
}
