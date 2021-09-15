import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Footer } from '../Componentes/Footer';
import { DatosPers } from '../Componentes/Forms/DatosPers';

import { Header } from '../Componentes/Header';
import { BussRegScreen } from '../Screen/BussRegScreen';
import { FirstUserRegScreen } from '../Screen/FirstUserRegScreen';
import { HomeScreen } from '../Screen/HomeScreen';
import { InfoScreen } from '../Screen/InfoScreen';
import { LoginScreen } from '../Screen/LoginScreen';
import { UserRegScreen } from '../Screen/UserRegScreen';

export const InfoRouter = () => {
    return (
        <Router>
            <Header />

           
                <Switch>
                    <Route  path="/Personales" component={DatosPers}/>
                    <Route exact path="/Info/Escolares" component={LoginScreen}/>
                    <Route exact path="/Info/Laborales" component={UserRegScreen}/>
                    <Route exact path="/Info/Extras" component={BussRegScreen}/>
                </Switch>
           
            <Footer />
        </Router>
    )
}
