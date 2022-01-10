import React from 'react'
import { NavLink } from 'react-router-dom'

export const home = () => {
    const data=[
        {
            Id:'123sad123',
            Nombre:'Ricardo',
            apP:'Lara',
            apM:'Orozco'
        },
        {
            Id:'321321sd231',
            Nombre:'Alan',
            apP:'Moreno',
            apM:'B.'
        },
        {
            Id:'987456qwe4',
            Nombre:'Luis Miguel',
            apP:'Molina',
            apM:'Renteria'
        },
        {
            Id:'32195162123wqas65847',
            Nombre:'Jesus Adrian',
            apP:'Ontiveros',
            apM:'Valenzuela'
        }
    ]
    return (
        <div className=' row'>
            <div className='col-12 pb-4'>
                <h5>Bienvenido {'Ricardo Lara Orozco'}</h5>

                Aplicaciones pendientes:
            </div>
            <div className='col-12'>
            {data.length>0 ?
                (data).map((x)=><div className='border px-2  py-2 my-2 row'>
                    
                    <label className='col-10'>{x.Nombre+' '+x.apP+' '+x.apM+' '}</label>
                    <NavLink exact to="/AlefProyect/Quizz/encuestas" className='col-2 py-0 btn btn-primary text-end'> APLICAR </NavLink>
                    </div>
                )
                :
                <h4>Aún no tienes aplicaciones que hacer. Se paciente, pronto podras aplicar encuestas</h4>
            }

            </div>
        </div>
    )
}
