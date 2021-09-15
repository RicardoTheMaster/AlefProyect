import { useState } from 'react'

export const edad=(fechahoy, fechanac)=>{
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
export const formatoFecha=(fecha, formato)=>{
    const map = {
        dd: fecha.getDate(),
        mm: '0'+(fecha.getMonth() + 1).toString(),
        yyyy: fecha.getFullYear()
    }

    return formato.replace(/yyyy|mm|dd/gi, matched => map[matched])
}

export const useForm = (inicio={}) => {
    
    const [Form, setForm] = useState(inicio)
    
    
    
   
    const handleInputForm = ({target})=>{

        if(target.name==='datosPers_fechaNac'){
            const datosedad=edad((formatoFecha(new Date(), "yyyy-mm-dd")),(target.value));
            setForm({
                ...Form,
                [target.name]:target.value,
                'datosPers_edad':datosedad
            })
            
        }else{
            setForm({
                ...Form,
                [target.name]:target.value
            })

        }
        
    }
    
    
    return {
        Form, handleInputForm
    }
    /*
    
    */
}
