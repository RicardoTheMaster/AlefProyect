import { Flag } from '@material-ui/icons';
import React, { useState } from 'react'
import { Inp } from '../Componentes/Elementos/Inp'

export const HomeScreen = () => {

    const [card, setCard] = useState(0);
    let flag=true;


   
    const getCard=(card)=>{
        switch(card){
            case 1: return <>

                        <div className="card text-dark bg-light animate__animated animate__rotateInDownLeft" >
                            <div className="card-header">Banco Azteca, Durango, Dgo.</div>
                            <div className="card-body">
                                <h5 className="card-title">Tiempo completo - Disponibilidad de horario</h5>
                           
                                <p className="card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                               <hr/>
                               <div className="text-end">
                                <button className="btn btn-outline-primary font-monospace">
                                    <p className=" my-0 py-0 animate__animated animate__shakeX">POSTULARSE -&gt;</p> 
                                    </button>
                                </div>
                            </div>

                        </div>
                        </>
            case 2: return <>
                        <div className="ratio ratio-16x9 border"></div>
                        <div className="card text-dark bg-light animate__animated animate__rotateInDownLeft" >
                                        <div className="card-header">Atención telefonica, Durango, Dgo.</div>
                                        <div className="card-body">
                                            <h5 className="card-title">Afore MX</h5>
                                    
                                            <p className="card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <hr/>
                                            <h5>$2,000 Mensuales</h5>
                                        </div>
                                    </div>
                        </>
            case 3: return <>
                        <div className="ratio ratio-16x9 my-3"></div>
                        <div className="ratio ratio-16x9 my-4"></div>
                        <div className="card text-dark bg-light animate__animated animate__rotateInDownLeft" >
                                            <div className="card-header">Farmacias Guadalajara, Durango, Dgo.</div>
                                            <div class="card-body">
                                                <h5 class="card-title">Cajero</h5>
                                        
                                                <p class="card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <hr/>
                                                <h5>$5,000 - $7,000 Mensuales</h5>
                                            </div>
                                        </div>
                            </>
    
            default:
        }
    }

    
    let col=""
    if(card===0  ){
         col="col-12 "
    }else{
        col="col-6"
    }

    return (

        <div>
            <h1>Home inicio</h1>
           
                <label> ¡Busca tu empleo deseado!</label>
            <div className="row">
                    <div className="col-6">
                        <input className="col-12 list-group-item pt-1" placeholder='Palabras clave'/>
                    </div>
                    <div className="col-6">
                        <button className="col-3 btn btn-primary pt-1">Buscar</button>
                    </div>
            </div>    
           <div className="row pt-5">



                <div className={col+" border pt-2"}>
                    <button className="cart card my-2 text-dark bg-light text-start" onClick={()=>{setTimeout(()=>setCard(1),1);; setCard(-1)}}>
                        
                            <div className="card-header col-12">Banco Azteca, Durango, Dgo.</div>
                            <div className="card-body">
                                <h5 className="card-title">Agente de cobranza</h5>
                        
                                <p className="card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <hr/>
                                <h5>$10,000-$15,000 Mensuales</h5>
                            </div>
                        
                    </button>


                    <button className="cart card my-2 text-dark bg-light text-start" onClick={()=>{setTimeout(()=>setCard(2),1);; setCard(-1)}}>
                        <div className="col-12 card-header">Atención telefonica, Durango, Dgo.</div>
                        <div className="card-body">
                            <h5 className="card-title">Afore MX.</h5>
                       
                            <p className="card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <hr/>
                            <h5>$2,000 Mensuales</h5>
                        </div>
                    </button>


                    <button className="cart card my-2 text-dark bg-light text-start" onClick={()=>{setTimeout(()=>setCard(3),1);; setCard(-1)}}>
                        <div className="col-12 card-header">Farmacias Guadalajara, Durango, Dgo.</div>
                        <div className="card-body">
                            <h5 className="card-title">Cajero</h5>
                       
                            <p className="card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <hr/>
                            <h5>$5,000-$7,000 Mensuales</h5>
                        </div>
                    </button>


                
                </div>

                <div className="col-6 border py-3">
                    {
                        getCard(card)
                    }
                </div>
           </div>







        </div>
        
    )
}
