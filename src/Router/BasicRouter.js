
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

export const BasicRouter = () => {
    return (
        <Router>
            <Header />
 
            <div className="container">
                <Switch>
                    <Route exact path="/AlefProyect/" component={Home}/>
                    <Route exact path="/AlefProyect/Login" component={UserScreen}/>
                    <Route exact path="/AlefProyect/Graficas" component={PruebasScreen}/>
                    <Route path="/AlefProyect/FirstReg" component={InfoScreen}/>

                    <Redirect to="/AlefProyect/"/>
                </Switch>
            </div>
            <Footer />
            
        </Router>
    )
}
