import React from 'react'
import { useForm } from '../../Hooks/useForm'
import { DivLaSel } from './Elementos/DivLaSel'
import { ESP } from './Elementos/Opts'

export const DatosAdic = () => {
    const {handleInputForm}=useForm();
    return (
    <div className="pt-4">
            <hr /><h4 className="text">Ultimos datos adicionales: Pero IMPORTANTES</h4><hr />
             <div className="row pt-4">
             <label className="form-label">Selecciona 3 areas de espcialidad a las cuales te gustaria postular:</label>

             <DivLaSel col="-12 col-sm-4" label="Primera" name="ultDatos_esp1" handleInput={handleInputForm} Opts={ESP}/>
             <DivLaSel col="-12 col-sm-4" label="Segunda" name="ultDatos_esp2" handleInput={handleInputForm} Opts={ESP}/>
             <DivLaSel col="-12 col-sm-4" label="Tercera" name="ultDatos_esp3" handleInput={handleInputForm} Opts={ESP}/>

                          
                    
                    
                    </div>
        </div>
    )
}
