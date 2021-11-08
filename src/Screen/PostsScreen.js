import React from 'react'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
export const PostsScreen = () => {
    return (
        <>
        <div className='text-center'>
            <h3 className='text' >Tus postulaciones.</h3>
        </div>
        <div className='container'>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th className='col-3'>Puesto</th>
                    <th >Empresa</th>
                    <th className='col-4'>Pruebas Por Completar</th>
                    <th className='col-2'><DeleteForeverTwoToneIcon/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Operador de producción</th>
                        <td>Lala</td>
                        <td>Aún no te han asignado pruebas</td>
                        <td><button className='btn btn-primary'>Eliminar postulación</button></td>
                    </tr>
                    <tr>
                        <th >Agente de ventas/Cambaceo</th>
                        <td className=''>Takis - Barcell</td>
                        <td >
                            Pruebas de conocimiento:
                            <div className='py-1'>
                                Ventas &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-secondary'> IR </button>
                            </div>
                            Pruebas del proceso de selección:
                            <div className='py-1'>
                                CEAL &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-secondary'> IR </button>
                            </div>
                            <div className='py-1'>
                                CLA &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-secondary'> IR </button>
                            </div>
                        </td>
                        <td >
                            No puedes eliminar esta postulaccción ya que la empresa ha depurados a los candidados y has sido un seleccionado.
                            <br/>
                            <button className='btn btn-primary'>Desistir</button></td>
                    </tr>
                    <tr>
                        <th>Cobrador con motocicleta propia</th>
                        <td> Elektra</td>
                        <td >
                            Pruebas de conocimiento:
                            <div className='py-1'>
                                Ventas &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-secondary'> IR </button>
                            </div>
                            Pruebas del proceso de selección:
                            <div className='py-1'>
                                CEAL &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-secondary'> IR </button>
                            </div>
                            <div className='py-1'>
                                CLA &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-secondary'> IR </button>
                            </div>
                        </td>
                        <td><button className='btn btn-primary'>Eliminar postulación</button></td>
                        
                    </tr>
                    <tr>
                        <th>Cobrador con motocicleta propia</th>
                        <td> Elektra</td>
                        <td>Aún no te han asignado pruebas</td>
                        <td><button className='btn btn-primary'>Eliminar postulación</button></td>
                        
                    </tr>
                    <tr>
                        <th>Cobrador con motocicleta propia</th>
                        <td> Elektra</td>
                        <td >
                            Pruebas de conocimiento:
                            <div className='py-1'>
                                Ventas &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-secondary'> IR </button>
                            </div>
                            Pruebas del proceso de selección:
                            <div className='py-1'>
                                CEAL &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-secondary'> IR </button>
                            </div>
                            <div className='py-1'>
                                CLA &nbsp;&nbsp;&nbsp;
                                <button className='btn btn-secondary'> IR </button>
                            </div>
                        </td>
                        <td><button className='btn btn-primary'>Eliminar postulación</button></td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
