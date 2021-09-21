import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Footer } from '../Componentes/Footer';
import { DatosPers } from '../Componentes/Forms/DatosPers';

import { Header } from '../Componentes/Header';
import { BussRegScreen } from '../Screen/BussRegScreen';
import { LoginScreen } from '../Screen/LoginScreen';
import { UserRegScreen } from '../Screen/UserRegScreen';

export const InfoRouter = () => {
    return (
        <Router>
            <Header />

           
                <Switch>
                    <Route  path="/Info/Personales" component={DatosPers}/>
                    <Route exact path="/Info/Escolares" component={LoginScreen}/>
                    <Route exact path="/Info/Laborales" component={UserRegScreen}/>
                    <Route exact path="/Info/Extras" component={BussRegScreen}/>
                </Switch>
           
            <Footer />
        </Router>
    )
}
