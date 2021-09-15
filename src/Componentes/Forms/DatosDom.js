import React from 'react'
import { useForm } from '../../Hooks/useForm'
import { DivLaIn } from '../Elementos/DivLaIn'
import { DivLaSel } from '../Elementos/DivLaSel'

export const DatosDom = () => {
    const {handleInputForm}=useForm();
            const Opts={
                'Seleccionar':'32',
                'Aguascalientes':'0',
                 'Baja California' :'1',
                 'Baja California Sur':'2', 
                ' Campeche' :'3',
                ' Chiapas' :'4',
                 'Chihuahua':'5',
                ' Ciudad de México':'6', 
                 'Coahuila':'7',
                ' Colima':'8',
                 'Durango':'9',
                 'Estado de México':'10',
                ' Guanajuato':'11',
                 'Guerrero':'12',
                ' Hidalgo':'13',
                 'Jalisco':'14',
                 'Michoacán':'15',
                 'Morelos':'16',
                 'Nayarit':'17',
                 'Nuevo León':'18',
                 'Oaxaca':'19',
                 'Puebla':'20',
                 'Querétaro':'21',
                ' Quintana Roo':'22',
                 'San Luis Potosí':'23',
                 'Sinaloa':'24',
                ' Sonora':'25',
                 'Tabasco':'26',
                 'Tamaulipas':'27',
                 'Tlaxcala':'28',
                 'Veracruz':'29',
                 'Yucatán':'30',
                 'Zacatecas':'31',
             }
             const Opts2={
                 'Seleccionar':'0',
                 'Cadad@':'1',
                 'Solter@':'2',
                 'Divorciad@':'3',
                 'Viudo@':'0',
             }
    return (
    <div className="pt-2">
        <hr/><h4 className="text">Domicilio</h4><hr/> 
        <div className="row pt-2">
            <DivLaIn col="-9 col-sm-5" label="Calle" name="domicilio_calle" handleInput={handleInputForm} place="Andador, avenida, etc."/>
            <DivLaIn col="-3 col-sm-2" label="No. Ext" name="domicilio_noExt" handleInput={handleInputForm} place="111" type="number"/>
        </div>
        <div className="row pt-4">
            <DivLaIn col="-8 col-sm-6" label="Col/Fracc" name="domicilio_fracc" handleInput={handleInputForm} place="Residencial, zona, etc."/>
            <DivLaIn col="-8 col-sm-6" label="Municipio " name="domicilio_mun" handleInput={handleInputForm} place="Ciudad, capital, localidad, etc."/>
        </div>
        <div className="row pt-4">
            <DivLaSel col="-8 col-sm-6" label="Estado" name="domicilio_estado" handleInput={handleInputForm} Opts={Opts}/>
            <DivLaSel col="-8 col-sm-6" label="Estado Civil" name="domicilio_estCiv" handleInput={handleInputForm} Opts={Opts2}/>  
        </div>  
    </div>
    )
}
