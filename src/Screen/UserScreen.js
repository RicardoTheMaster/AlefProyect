import React from 'react'
import img from '../Assets/Images/user.jfif'
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import EditIcon from '@mui/icons-material/Edit';
import {  Doughnut   } from 'react-chartjs-2'


export const UserScreen = () => {

    const data={
        labels:['',' % Llenado'],
        datasets:[{
            data:[30,70],
            backgroundColor:['white','green']
        }]
    }
    const opciones={
        responsive:true
    }
    return (
        <div className='animate__animated animate__backInDown'> 
        <div className='row pb-4 justify-content-center '>
            <div className='col-3 col-sm-2  pt-4 pb-2 '>
            <img src={img} className="userimg"  alt='insta'/>
            </div>

            <div className='col-8 col-sm-6  pr-2 text-center'>
                <h3 className='pt-4 pb-2'>Nombre Apellido Apellido </h3>
                
                <PersonPinCircleIcon />Ciudad, Edo.
                
            </div>
            <div className='col-6 col-sm-2 '>
                <div className=' '>
                    <Doughnut data={data} opciones={opciones}/>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-sm-5 mt-4 pt-4 border ms-2 me-2' >
                <div className='row'>
                    <div className='col-9'>
                        <h5 className='trans'> Datos personales</h5>
                    </div>
                    <div className='col-3 text-end'>
                        <EditIcon color="primary"/>
                    </div>
                </div>
                <hr/>
                <p> Apellido Apellido Nombre</p>
                <p> Fechanac, edad, sexo</p>
                <p> telefono, telefono2, nacionalidad</p>
                <p> CURP</p>
                <p> RFC</p>
                <p> NSS</p>
            </div>

            <div className='col-12 col-sm-5 mt-4 pt-4 border me-2 ms-2' >
                <div className='row'>
                    <div className='col-9'>
                        <h5 className='trans'> Datos medicos</h5>
                    </div>
                    <div className='col-3 text-end'>
                        <EditIcon color="primary"/>
                    </div>
                </div>
                <hr/>
                <p> Salud, deportes, sangre</p>
                <p> fuma, detalles</p>
                <p> toma, detalles</p>
                <p> cirugias, detalles</p>
                <p> acccidentes, dettalles</p>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-sm-10 mt-4 pt-4 border ms-2' >
                <div className='row'>

                    <div className='col-9'>
                        <h5 className='trans'> Datos laborales</h5>
                    </div>
                    <div className='col-3 text-end'>
                        <EditIcon color="primary"/>
                    </div>
                
                <hr/>
                
                    <div className='col-12 col-sm-6 pt-3'>
                        <p className='fw-bold'>Ultimo trabajo </p>
                    <p> Puesto, departamento</p>
                    <p> Jefe, telefono (rh/empresa)</p>
                    <p> Motivo de separacion 
                    LoremAliquip nostrud irure proident id veniam consectetur occaecat et quis. Fugiat officia enim eiusmod dolore aliqua magna nulla aliquip dolor enim do. Dolor exercitation incididunt est voluptate nulla. Esse et eiusmod occaecat fugiat esse. Lorem mollit ex culpa occaecat.
                    Excepteur irure tempor Lorem quis in sunt anim. Culpa cillum aliquip amet anim pariatur dolor sint Lorem culpa quis. Ex veniam et Lorem commodo non labore laboris elit dolor dolore elit ullamco exercitation. Mollit aliquip excepteur ut ut ea incididunt ut consectetur sit ut cupidatat ea velit. 
                    </p>
                    <p> Tiempo en meses/años</p>

                    </div>

                    <div className='col-12 col-sm-6 pt-3'>
                        <p className='fw-bold'>Penultimo trabajo </p>
                    <p> Puesto, departamento</p>
                    <p> Jefe, telefono (rh/empresa)</p>
                    <p> Motivo de separacion 
                    LoremAliquip nostrud irure proident id veniam consectetur occaecat et quis. Fugiat officia enim eiusmod dolore aliqua magna nulla aliquip dolor enim do. Dolor exercitation incididunt est voluptate nulla. Esse et eiusmod occaecat fugiat esse. Lorem mollit ex culpa occaecat.
                    Excepteur irure tempor Lorem quis in sunt anim. Culpa cillum aliquip amet anim pariatur dolor sint Lorem culpa quis. Ex veniam et Lorem commodo non labore laboris elit dolor dolore elit ullamco exercitation. Mollit aliquip excepteur ut ut ea incididunt ut consectetur sit ut cupidatat ea velit. 
                    </p>
                    <p> Tiempo en meses/años</p>

                    </div>

                    <div className='col-12 col-sm-6 pt-3'>
                        <p className='fw-bold'>Antepenultimo trabajo </p>
                    <p> Puesto, departamento</p>
                    <p> Jefe, telefono (rh/empresa)</p>
                    <p> Motivo de separacion 
                    LoremAliquip nostrud irure proident id veniam consectetur occaecat et quis. Fugiat officia enim eiusmod dolore aliqua magna nulla aliquip dolor enim do. Dolor exercitation incididunt est voluptate nulla. Esse et eiusmod occaecat fugiat esse. Lorem mollit ex culpa occaecat.
                    Excepteur irure tempor Lorem quis in sunt anim. Culpa cillum aliquip amet anim pariatur dolor sint Lorem culpa quis. Ex veniam et Lorem commodo non labore laboris elit dolor dolore elit ullamco exercitation. Mollit aliquip excepteur ut ut ea incididunt ut consectetur sit ut cupidatat ea velit. 
                    </p>
                    <p> Tiempo en meses/años</p>

                    </div>
                </div>
                
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-sm-10 mt-4 pt-4 border ms-2' >
                <div className='row'>

                    <div className='col-9'>
                        <h5 className='trans'> Datos de referencia</h5>
                    </div>
                    <div className='col-3 text-end'>
                        <EditIcon color="primary"/>
                    </div>
                
                <hr/>
                
                    <div className='col-12 col-sm-6 pt-3'>
                        <p className='fw-bold'>Primera referencia</p>
                    <p> Nombre, ocupacion</p>
                    <p> domicilio</p>
                    <p> Contacto</p>

                    </div>

                    <div className='col-12 col-sm-6 pt-3'>
                        <p className='fw-bold'>Segunda referencia</p>
                    <p> Nombre, ocupacion</p>
                    <p> domicilio</p>
                    <p> Contacto</p>

                    </div>

                </div>
                
            </div>
        </div>

        <div className='row'>
          
            <div className='col-12 col-sm-5 mt-4 pt-4 border me-2 ms-2' >
                <div className='row'>
                    <div className='col-9'>
                        <h5 className='trans'> Datos Escolares</h5>
                    </div>
                    <div className='col-3 text-end'>
                        <EditIcon color="primary"/>
                    </div>
                </div>
                <hr/>
                <p> Nivel, avance</p>
                <p> Nombre (op), documento (op)</p>
                <p> mes inicio, año inicio -- mes termino, año termino</p>
                <p> Numero de posgrados (op)</p>
                <p className='text-bold'> Segundo posgrado </p>
                <p> mes inicio, año inicio -- mes termino, año termino</p>
                <p>tipo de posgrado, titulo</p>
            </div>

            <div className='col-12 col-sm-5 mt-4 pt-4 border ms-2 me-2' >
                <div className='row'>
                    <div className='col-9'>
                        <h5 className='trans'> Datos adicionales</h5>
                    </div>
                    <div className='col-3 text-end'>
                        <EditIcon color="primary"/>
                    </div>
                </div>
                <hr/>
                <p> especialidad 1</p>
                <p> especialidad 2</p>
                <p> especialidad 3</p>
                <p> Detalles 
                LoremAliquip nostrud irure proident id veniam consectetur occaecat et quis. Fugiat officia enim eiusmod dolore aliqua magna nulla aliquip dolor enim do. Dolor exercitation incididunt est voluptate nulla. Esse et eiusmod occaecat fugiat esse. Lorem mollit ex culpa occaecat.
                Excepteur irure tempor Lorem quis in sunt anim. Culpa cillum aliquip amet anim pariatur dolor sint Lorem culpa quis. Ex veniam et Lorem commodo non labore laboris elit dolor dolore elit ullamco exercitation. Mollit aliquip excepteur ut ut ea incididunt ut consectetur sit ut cupidatat ea velit. 
                 </p>
                <p> CV</p>
            </div>

        </div>

        </div>
    )
}
