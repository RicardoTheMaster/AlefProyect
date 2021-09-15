import React from 'react';
import { useForm } from '../../Hooks/useForm';
import { BrotherForm } from '../BrotherForm';
import { DivLaIn } from '../Elementos/DivLaIn';
    
export const DatosFam = () => {

//handleInput={handleInput} handleBro={handleBro} valor={valor} hermanos={hermanos}

const { Form ,handleInputForm}=useForm({familia_herm:0});
const {familia_herm:valor}=Form;

let hermanos;
        for (let index = 0; index < valor; index++) {

            hermanos={
                ...hermanos,
                ['Hermano'+index]:'',
                ['Edad'+index]:'',
                ['Ocupacion'+index]:''
    
               }
        }
return (
    <div className="row pt-4">
        <hr/><h4 className="text">Datos familiares</h4><hr />
            <DivLaIn col="-10 col-sm-6" label="Padre" name="familia_nomP" handleInput={handleInputForm} place="Nombre completo"/>
            <DivLaIn col="-10 col-sm-6" label="Madre" name="familia_nomM" handleInput={handleInputForm} place="Nombre completo"/>
            <DivLaIn col="-12 col-sm-6" label="¿Cuantos hermanos tienes?" name="familia_herm" handleInput={handleInputForm} place="0 si no tienes" type="number"/>
                {
                (valor>0 && valor<6)&&
                    (<>
                        <h5 className="pt-4">Llena los datos de {valor} hermano(s)</h5>
                        <h5 className="pt-2 fs-6 fw-lighter">Maximo 5. Pero se guarda el total de tus hermanos</h5> 
                        {Object.keys(hermanos).map((x, i) => ((i<=valor-1)&& <BrotherForm handleBro={handleInputForm} key={x} name={x} cantidad={i+1}/>) )}
                     </>  
                    )
                }
            </div>
    ) 
}
