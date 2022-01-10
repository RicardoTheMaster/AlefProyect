import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Inp } from '../../Componentes/Elementos/Inp'
import { Grado, inter, ocup } from '../../Componentes/Elementos/Opts'
import { Sel } from '../../Componentes/Elementos/Sel'

export const Economica = () => {
    const [enviado, setEnviado] = useState(false);

    const [Nhermanos, setNhermanos] = useState(0);
    const [Ingreso, setIngreso] = useState({})
    const [Total, setTotal] = useState(0)
    const forma=new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
        minimumFractionDigits:2
    })
    const [Inter, setInter] = useState(false)
    return (
        <div className='row'>
            <div className='col-12 text-center pb-4'>
                <h4>Area Económica</h4>
            </div>
            <Formik
                        initialValues={{
                            miem:{},
                            otr:{},
                            plazo:{},
                            paren:{},
                            gastos:{
                                agua:'',
                                luz:'',
                                gas:'',
                                inter:'',
                                interg:'',
                                alimento:'',
                                vest:'',
                                esc:'',
                                cred:'',
                                trans:'',
                                div:'',
                                otros:'',
                                rest:'',
                            },
                        }}

                        onSubmit={(valores, {resetForm})=>{
                            console.log(valores)
                        }}

                        validate={(e)=>{
                            if(e.gastos.inter){
                                if(e.inter==='No cuento con ninguno'){
                                    setInter(false)
                                }else{
                                    setInter(true)
                                }
                            }
                                                //valor indice ``
                            if(Object.values(e.plazo).length!==0 && Object.values(e.otr).length!==0){
                                let temp=[...Array(Nhermanos)]
                                let ing=Object.values(e.otr)
                                let pl=Object.values(e.plazo)
                                let tot=0;
                                if(Object.values(e.miem).length!==0){
                                    Object.values(e.miem).forEach((element,y) => {
                                        if(pl[y]==='Semanal'){
                                            temp[y]=element*4.2857+ing[y]
                                        }
                                        if(pl[y]==='Diario'){
                                            temp[y]=element*30+ing[y]
                                        }
                                        if(pl[y]==='Quincenal' ){
                                            temp[y]=element*2+ing[y]
                                        }
                                        if(pl[y]==="Catorcenal"){
                                            temp[y]=element*2.14285+ing[y]
                                        }
                                        if(pl[y]==="Mensual"){
                                            temp[y]=element*1+ing[y]
                                        }
                                        tot+=temp[y]
                                    });
                                    setIngreso(temp)
                                    setTotal(tot)
                                }
                            }
                            

                        }}
                    >
                        {
                        ({errors, touched,resetForm})=>(
                            <Form>
                                <div className="row pt-4">
                                    
                                   <div className='col-12 pt-4'>
                                        <div className='row'>
                                            <label className="col-4 form-label pt-2 fw-bold">Miembro's(a) con ingreso :</label>
                                                <div className='col-2 pt-2'>
                                                    <button type="button" className='btn btn-outline-secondary pt-0 pb-1 fw-bold' onClick={()=>setNhermanos(Nhermanos+1)}> + </button>                                    
                                                </div>
                                                <div className='col-2 pt-2'>
                                                    {Nhermanos!==0 &&
                                                    <button type="button" className='btn btn-outline-danger pt-0 pb-1 fw-bold'  onClick={()=>(setNhermanos(0),resetForm(),setTotal(0))}> Reiniciar </button>                                    
                                                    }
                                                </div>
                                
                                        </div>
                                    </div>
                                    {[...Array(Nhermanos)].map((x,y)=><>
                                    <h5>Miembro: {y+1}</h5>
                                    <Sel col="-4" label='Parentesco' name={'paren.'+y} Opts={{Ricardo:1,Jesus:1,Rodrigue:1,Maria:1,Fernanda:1}}  />
                                    <Inp col="-4" label='Ingreso $$' name={'miem.'+y} type="number" place='pellido'/>
                                    <Sel col="-4" label='Plazo' name={'plazo.'+y} Opts={{Mensual:1,Quincenal:1,Diario:1,Catorcenal:1,Semanal:1}}  />
                                    <Inp col="-4" name={'otr.'+y} label='Otros ingresos'  type="number" place='Opcional'/>
                                    <h5 className='text-end'>{forma.format(Ingreso[y])}</h5>    
                                   <hr className='mt-4'/>
                                    </>
                                    )
                                                     
                                    }
                                    <h5 className='text-end'>Total ingresos mensuales: &nbsp; {forma.format(Total)}</h5>    
                                    <hr className='mt-4'/> 
                                
                                    <label>Egresos:</label>

                                    <Inp errors={errors.gastos} touched={touched.gastos} col="-3" label='Agua' type="number" name='gastos.agua' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.gastos} touched={touched.gastos} col="-3" label='Luz' type="number" name='gastos.luz' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.gastos} touched={touched.gastos} col="-3" label='Gas' type="number" name='gastos.gas' place='Nombre(s) Apellido Apellido'/>
                                    <Sel errors={errors.gastos} touched={touched.gastos}col="-6" label='¿Cuenta con Tv cable, internet y telefonioa' name='inter' Opts={inter}  />
                                    {Inter&& <Inp errors={errors.gastos} touched={touched.gastos} col="-3" label='Costo' type="number" name='gastos.interg' place='Nombre(s) Apellido Apellido'/>}

                                    <Inp errors={errors.gastos} t=" col-4 " touched={touched.gastos} col="-12 " label='Gasto mensual en ALIMENTACION aproximado' type="number" name='gastos.alimento' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.gastos} t=" col-4 " touched={touched.gastos} col="-12 " label='Gasto mensual en VESTIMENTA aproximado' type="number" name='gastos.vest' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.gastos} t=" col-4 " touched={touched.gastos} col="-12 " label='Gasto mensual en ESCUELA aproximado' type="number" name='gastos.esc' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.gastos} t=" col-4 " touched={touched.gastos} col="-12 " label='Gasto mensual en TARJETAS/PRESTAMOS/CREDITOS aproximado' type="number.cred" name='gastos' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.gastos} t=" col-4 " touched={touched.gastos} col="-12 " label='Gasto mensual en TRANSPORTE aproximado' type="number" name='gastos.trans' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.gastos} t=" col-4 " touched={touched.gastos} col="-12 " label='Gasto mensual en DIVERSION/SALIDAS aproximado' type="number" name='gastos.div' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.gastos} t=" col-4 " touched={touched.gastos} col="-12 " label='Gasto mensual en OTROS (limpieza, reparaciones, medicamentos, etc.) aproximado' type="number" name='gastos.otros' place='Nombre(s) Apellido Apellido'/>
                                    <Inp errors={errors.gastos} t=" col-4 " touched={touched.gastos} col="-12 " label='Gasto mensual en RESTANTE aproximado' type="number" name='gastos.rest' place='Nombre(s) Apellido Apellido'/>

                                <div className="vstack gap-2 col-md-12 mx-auto pt-5">
                                    <button type="submit" className="btn btn-primary "> GUARDAR </button>
                                
                                </div>
                                {
                                    (enviado&&(
                                    <div className="row pt-4">
                                     <p className="enviado fw-bold text-center"> ¡Gracias! Con tu participación ayudamos a mejorar las opciones laborales para todos.</p>   
                                    </div>
                                    ))
                                }
                                </div>
                            </Form>
                        ) 
                        }
                    </Formik>
        </div>
    )
}
