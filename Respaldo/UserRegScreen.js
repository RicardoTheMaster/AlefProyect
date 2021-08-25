import React, { useEffect } from 'react'
import { DatosAdic } from '../Componentes/Forms/DatosAdic';
import { DatosDom } from '../Componentes/Forms/DatosDom';
import { DatosEsc } from '../Componentes/Forms/DatosEsc';
import { DatosFam } from '../Componentes/Forms/DatosFam';
import { DatosJob } from '../Componentes/Forms/DatosJob';
import { DatosMedic } from '../Componentes/Forms/DatosMedic';
import { DatosPers } from '../Componentes/Forms/DatosPers';
import { DatosRefP } from '../Componentes/Forms/DatosRefP';
import { DatosRefV } from '../Componentes/Forms/DatosRefV';
import { useBroInfo } from '../Hooks/useBroInfo';
import { useDatos } from '../Hooks/useDatos';
import { useHerms } from '../Hooks/useHerms';
import { UserContext } from '../Hooks/UserContext';

export const UserRegScreen = () => {

    const {valor,hermanos,newValor}=useHerms();

    const {broInfo, setBroInfo} = useBroInfo({});

    const formatoFecha=(fecha, formato)=>{
        const map = {
            dd: fecha.getDate(),
            mm: '0'+(fecha.getMonth() + 1).toString(),
            yyyy: fecha.getFullYear()
        }
    
        return formato.replace(/yyyy|mm|dd/gi, matched => map[matched])
    }
    
    const edad=(fechahoy, fechanac)=>{
        let años=parseFloat(fechahoy.substring(0,4))-parseFloat(fechanac.substring(0,4));
        let meses=parseFloat(fechahoy.substring(5,7))-parseFloat(fechanac.substring(5,7)); 
        let dias=parseFloat(fechahoy.substring(8,10))-parseFloat(fechanac.substring(8,10));

        if(meses>=0){
            return años;
        }else if(meses<0 && dias<0){
            return años;
        }else{
            return años-1;
        }
       
    }

    const {Datos,setDatos}=useDatos();

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const handleInput=({target})=>{
        
        if(target.name==='familia_herm' && target.value>5){
            newValor(5)
            setBroInfo(hermanos)
        }else{
            newValor(target.value)
            setBroInfo(hermanos)
        }

        setDatos({
                ...Datos,
                [target.name]:target.value
            })
            
    }

    const handleBro=({target})=>{
            setBroInfo({
                ...broInfo,
                [target.name]:target.value
            })
    }

    useEffect(() => {
        const años=edad(formatoFecha(new Date(), "yyyy-mm-dd"),Datos.datosPers_fechaNac);
        if(años){
            const obj={
                target:{
                name:'datosPers_edad',
                value:años
                }   
            } 

            handleInput(obj)
        }
      

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Datos.datosPers_fechaNac])

    useEffect(() => {
        setBroInfo(hermanos)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Datos.familia_herm])
    





















    
    return (
<UserContext.Provider value={Datos.datosPers_edad,handleInput}>

<div className="container background2">

    <h1 className="marL mb-4 text">Registro de usuario</h1>
    <p className="lh-sm text ">
        Aqui iran las intrucciones que leeran los usuarios para el correcto llenado del formulario
        donde se les recomienda hagan este registro con tiempo  y con calma, los datos solo seran guardados unavez
        finalice y se valide que la informacion ingresada es correcta. En caso de tener dudas o preguntas respecto al llenado
        consultar con alguien mas. De ser posible contactar directamente con el personal de Alef Global
    </p>
        <div className="row border p-4">
            <form className="" onSubmit={handleSubmit}>
                
                    <DatosPers handleInput={handleInput} />
                    <DatosDom handleInput={handleInput} />
                    <DatosEsc handleInput={handleInput} />
                    <DatosFam handleInput={handleInput} handleBro={handleBro} valor={valor} hermanos={hermanos} />
                    <DatosRefP handleInput={handleInput}/>
                    <DatosRefV handleInput={handleInput}/>  
                    <DatosJob handleInput={handleInput}/>
                    <DatosMedic handleInput={handleInput}/>  
                    <DatosAdic handleInput={handleInput} />
                    

                
                <div className="row col-12 pt-5">
                <button type="submit" className="btn btn-primary"> MANDAR DATOS</button>
                </div>
                <div className="row col-12 pt-5">
                <p className="col-6"> {

                    JSON.stringify(Datos,null,11)
                    
                    
                                
                }
                --------------------------------
                
                </p>
                <p>
                    
                </p>
                </div>
            </form>
        </div>
    </div>
</UserContext.Provider>
    )
}
