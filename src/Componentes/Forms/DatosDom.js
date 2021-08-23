import React from 'react'
import { DivLaIn } from './Elementos/DivLaIn'
import { DivLaSel } from './Elementos/DivLaSel'

export const DatosDom = ({handleInput}) => {
    
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
            <DivLaIn col="-5" label="Calle" name="domicilio_calle" handleInput={handleInput} place="Andador, avenida, etc."/>
            <DivLaIn col="-2" label="No. Ext" name="domicilio_noExt" handleInput={handleInput} place="111" type="number"/>
            <DivLaIn col="-5" label="Col/Fracc" name="domicilio_fracc" handleInput={handleInput} place="Residencial, zona, etc."/>
        </div>
        <div className="row pt-4">
            <DivLaIn col="-6" label="Col/Fracc" name="domicilio_fracc" handleInput={handleInput} place="Residencial, zona, etc."/>
            <DivLaIn col="-6" label="Municipio " name="domicilio_mun" handleInput={handleInput} place="Ciudad, capital, localidad, etc."/>
        </div>
        <div className="row pt-4">
            <DivLaSel col="-6" label="Estado" name="domicilio_estado" handleInput={handleInput} Opts={Opts}/>
            <DivLaSel col="-6" label="Estado Civil" name="domicilio_estCiv" handleInput={handleInput} Opts={Opts2}/>  
        </div>  
    </div>
    )
}
