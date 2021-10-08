import React, {  useState } from 'react'

export const Home = () => {
/*
onClick={()=>{setTimeout(()=>setCard(1),1);; setCard(-1)}}

 */
const [desc, setDesc] = useState(0)

const getDesc=(desc)=>{
    switch(desc){
        
        case 1: return <div className="bordo cart card my-2 text-dark bg-light text-start animate__animated animate__rollIn" >
                            <div className=" card-header col-12">Banco Azteca, Durango, Dgo.1 </div>
                            <div className=" card-body">
                                <h5 className=" card-title">Tiempo completo</h5>
                                <li>Horario: 8 hrs, 1 dia de descanso entre la semana, turnos rotativos</li>
                                <li>Atractivo esquema competitivo</li>
                                <li></li>
                                <hr/>
                            <div className="text-end">
                               <button className="btn btn-outline-primary animate__animated animate__flash">Ir al empleo</button>
                            </div>
                            </div>
                        </div>
        
        case 2: return <div className="bordo cart card my-2 text-dark bg-light text-start animate__animated animate__rollIn" >
                            <div className=" card-header col-12">Banco Azteca, Durango, Dgo. 2</div>
                            <div className=" card-body">
                                <h5 className=" card-title">Agente de cobranza</h5>
                                <p className=" card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <hr/>
                            <div className="text-end">
                               <button className="btn btn-outline-primary animate__animated animate__flash">Ir al empleo</button>
                            </div>
                            </div>
                        </div>
                
        case 3: return <div className="bordo cart card my-2 text-dark bg-light text-start animate__animated animate__rollIn"  >
                        
                            <div className=" card-header col-12">Banco Azteca, Durango, Dgo. 3</div>
                            <div className=" card-body">
                                <h5 className=" card-title">Agente de cobranza</h5>
                        
                                <p className=" card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <hr/>
                            <div className="text-end">
                               <button className="btn btn-outline-primary animate__animated animate__flash">Ir al empleo</button>
                            </div>
                                                        </div>
                    
                         </div>
        case 4: return <div className="bordo cart card my-2 text-dark bg-light text-start animate__animated animate__rollIn"  >
                            <div className=" card-header col-12">Banco Azteca, Durango, Dgo. 4</div>
                            <div className=" card-body">
                                <h5 className=" card-title">Agente de cobranza</h5>
                        
                                <p className=" card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <hr/>
                            <div className="text-end">
                               <button className="btn btn-outline-primary animate__animated animate__flash">Ir al empleo</button>
                            </div>
                            </div>
                        </div>
        default:
    }
}

    return (<>

               

             <div className=" ">
            
            <div className=" cont borde">
                <li className="it">
                <button className=" cart card my-2 text-dark bg-light text-start animate__animated animate__shakeX" onClick={()=>{setDesc(1)}} >
                        
                        <div className=" card-header col-12">Banco Azteca, Durango, Dgo. 1 </div>
                        <div className=" card-body">
                            <h5 className=" card-title">Agente de cobranza</h5>
                    
                            <p className=" card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <hr/>
                            <h5>$10,000-$15,000 Mensuales</h5>
                        </div>
                    
                </button>
                </li>

        <li className="it">
            {desc===1 && getDesc(desc)}
        </li>
                
                <li className="it">
                <button className=" cart card my-2 text-dark bg-light text-start animate__animated animate__shakeX" onClick={()=>{setDesc(2)}}>
                        
                        <div className=" card-header col-12">Banco Azteca, Durango, Dgo. 2 </div>
                        <div className=" card-body">
                            <h5 className=" card-title">Agente de cobranza</h5>
                    
                            <p className=" card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <hr/>
                            <h5>$10,000-$15,000 Mensuales</h5>
                        </div>
                    
                </button>
                </li>
                
        <li className="it">
            {desc===2 && getDesc(desc)}
        </li>
                <li className="it">

                <button className="  cart card my-2 text-dark bg-light text-start animate__animated animate__shakeX" onClick={()=>{setDesc(3)}}>
                        
                        <div className=" card-header col-12">Banco Azteca, Durango, Dgo. 3</div>
                        <div className=" card-body">
                            <h5 className=" card-title">Agente de cobranza</h5>
                            <p className=" card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <hr/>
                            <h5>$10,000-$15,000 Mensuales</h5>
                        </div>
                    
                </button>
                </li>
               
        <li className="it">
            {desc===3 && getDesc(desc)}
        </li>
                    <li className="it">

            <button className="  cart card my-2 text-dark bg-light text-start animate__animated animate__shakeX" onClick={()=>{setDesc(4)}}>
                    
                    <div className=" card-header col-12">Banco Azteca, Durango, Dgo. 3</div>
                    <div className=" card-body">
                        <h5 className=" card-title">Agente de cobranza</h5>
                        <p className=" card-text">Texto que resuma el trabajo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <hr/>
                        <h5>$10,000-$15,000 Mensuales</h5>
                    </div>
                
            </button>
            </li>

            <li className="it">
            {desc===4 && getDesc(desc)}
            </li>   
            </div>







        </div>
        </>
    )
}
