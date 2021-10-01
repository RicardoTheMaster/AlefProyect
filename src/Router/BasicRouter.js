
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Footer } from '../Componentes/Footer';

import { Header } from '../Componentes/Header';
import { BussRegScreen } from '../Screen/BussRegScreen';
import { FirstUserRegScreen } from '../Screen/FirstUserRegScreen';
import { Home } from '../Screen/Home';
import { HomeScreen } from '../Screen/HomeScreen';
import { InfoScreen } from '../Screen/InfoScreen';
import { LoginScreen } from '../Screen/LoginScreen';
import { UserRegScreen } from '../Screen/UserRegScreen';

export const BasicRouter = () => {
    return (
        <Router>
            <Header />

            <div className="container">
                <Switch>
                    <Route exact path="/AlefProyect/" component={HomeScreen}/>
                    <Route exact path="/Login" component={LoginScreen}/>
                    <Route exact path="/UsReg" component={Home}/>
                    <Route exact path="/BuReg" component={BussRegScreen}/>
                    <Route exact path="/FirstReg" component={FirstUserRegScreen}/>
                    <Route path="/Info" component={InfoScreen}/>

                    <Redirect to="/AlefProyect/"/>
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}
