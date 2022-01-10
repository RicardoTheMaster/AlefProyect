import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Inp } from '../Elementos/Inp'
import * as Yup from "yup";
import { Sel } from '../Elementos/Sel';
import { Radio } from '../Elementos/Radio';


import "animate.css";
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Mes, Grado, Avance, Doc, Npos, Xpos} from '../Elementos/Opts';
import axios from 'axios';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }



export const DatosEsc = () => {


    const [open, setOpen] = React.useState(false);
  
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


    
    

   
    
   

    const [enviado, setEnviado] = useState(false);
    const [Pos, setPos] = useState('No')
    const [nvl, setnvl] = useState('')
    const [year, setYear] = useState(0)
    const [avnz, setavnz] = useState("")

    const getValCon=(values)=>{
        if(values.esc_pos){
            if(values.esc_pos==="En proceso"){

                if(values.esc_doc&& values.esc_name && values.esc_pos && values.esc_Npos && values.esc_posperIA && values.esc_posperTA && values.esc_posperIM && values.esc_posperTM && values.esc_posNom && values.esc_posDM){
                    setEnviado(true)
                }else{
        
                    setOpen(true)
            }
            }else if(values.esc_pos==="Si"){

                if(values.esc_doc&& values.esc_name && values.esc_pos &&values.esc_Npos!==1  && values.esc_posperIA && values.esc_posperTA && values.esc_posperIM && values.esc_posperTM && values.esc_posNom && values.esc_posDM){
                    setEnviado(true)
                }else{
        
                    setOpen(true)
            }
            }else{
                if(values.esc_doc&& values.esc_name ){
                    setEnviado(true)
                }else{
        
                    setOpen(true)
            }
            }
         }else{
            setOpen(true)
       }
       
    }
  
    const getValProPos=(values)=>{
            if((values.esc_avan==='En Curso' || values.esc_avan==='Trunco') && values.esc_name){
                setEnviado(true);
            }else if(values.esc_name && values.esc_doc){
                setEnviado(true)
            }else{
                setOpen(true)
            }
    }
    const Personales=Yup.object().shape({
                    esc_nvlaca:Yup.string("¡HACKERMAN!").required('¡Escoge!'),
                    esc_avan:Yup.string("¡HACKERMAN!").required('¡Escoge!'),
                    esc_perIM:Yup.string("¡HACKERMAN!").required('¡Escoge!'),
                    esc_perIA:Yup.number("¡Solo numeros!").min(1970,'¡Eres muy mayor!').max(2030, '¡No dura tanto!').required('¡Año de ingreso!'),
                    esc_perTM:Yup.string("¡HACKERMAN!").required('¡Escoge!'),
                    esc_perTA:Yup.number("¡Solo numeros!").min(year+2,'¡Muy corto!').max(year+10, '¡No dura tanto!').required('¡Año de término!'),
                    esc_pos:Yup.string("¡HACKERMAN!"),
                    esc_posperIA:Yup.number("¡Solo numeros!").min(1970,'¡Eres muy mayor!').max(2030, '¡No dura tanto!'),
                    esc_posperTA:Yup.number("¡Solo numeros!").min(year+2,'¡Muy corto!').max(year+10, '¡No dura tanto!'),
                    esc_posNom:Yup.string("¡Solo letras!").min(2,'¡Muy corto!').max(20, '¡Muy largo!')
                    .matches(/^[aA-zZ\s0-9.]+$/,"¡Caracteres no permitidos!"),
                    esc_Npos:Yup.string().required("Escoge")
                  });



                  const [consult, setconsult] = useState()
                  const [flag, setflag] = useState(false)
                  const id='61a4557dc917e8f80c770934';
              
                  const consulta= async ()=>{
                        try{
                          const res=await fetch("http://localhost:4500/api/users/escolares/"+id);
                          const post=await res.json();
                          if(!post.esc_avan){
                              setflag(false)
                              setconsult({esc_pos:'',
                                esc_nvlaca:'',
                                esc_avan:'',
                                esc_perIM:'',
                                esc_perIA:'',
                                esc_perTM:'',
                                esc_perTA:'',
                                esc_Npos:1,
                                esc_posperTM:'',
                                esc_posperIM:'',
                                esc_posperIA:'',
                                esc_posperTA:'',
                                esc_posNom:'',
                                esc_posDM:'',
                                esc_doc:'',
                                esc_name:'',
                                
                              })
                          }else{
                              setflag(false)
                              setconsult({
                                esc_pos:post.esc_pos,
                                esc_nvlaca:post.esc_nvlaca,
                                esc_avan:post.esc_avan,
                                esc_perIM:post.esc_perIM,
                                esc_perIA:post.esc_perIA,
                                esc_perTM:post.esc_perTM,
                                esc_perTA:post.esc_perTA,
                                esc_Npos:post.esc_Npos,
                                esc_posperTM:post.esc_posperTM,
                                esc_posperIM:post.esc_posperIM,
                                esc_posperIA:post.esc_posperIA,
                                esc_posperTA:post.esc_posperTA,
                                esc_posNom:post.esc_posNom,
                                esc_posDM:post.esc_posDM,
                                esc_doc:post.esc_doc,
                                esc_name:post.esc_name,
                              })
                          }           
                          setflag(post)
                        }catch(e){
                            console.log("Sin datos",e)
                          setconsult({
                            esc_pos:'',
                            esc_nvlaca:'',
                            esc_avan:'',
                            esc_perIM:'',
                            esc_perIA:'',
                            esc_perTM:'',
                            esc_perTA:'',
                            esc_Npos:1,
                            esc_posperTM:'',
                            esc_posperIM:'',
                            esc_posperIA:'',
                            esc_posperTA:'',
                            esc_posNom:'',
                            esc_posDM:'',
                            esc_doc:'',
                            esc_name:'',
                          })
                          setflag(false)
                                }
                      }
                      useEffect(() => {
                      consulta()
                      }, [])
              
              
                  const insertinfo=async(datos)=>{        
                      try{
                      const enviando= await axios.post('http://localhost:4500/api/users/escolares/'+id,datos)
                      if(enviando){
                          setEnviado(true)
                      }
                      }catch(error){
                          console.log(error)
                      }
                  }
    return (
<>
    {consult &&
        <>
        <div className="pt-2 animate__animated animate__backInUp  ">
                <hr />
            <h4 className="text">Datos Escolares</h4>
                <hr />          
              <Formik
                        initialValues={consult}

                        onSubmit={(valores, {resetForm})=>{
                            insertinfo(valores)
                            if(valores.esc_nvlaca==='Posgrado' && valores.esc_avan==="Concluido"){
                                getValCon(valores);
                                
                            }else if(valores.esc_nvlaca==='Profesional (Ing. / Lic. / Etc.)' || valores.esc_nvlaca==='Posgrado'){
                                getValProPos(valores);
                            }else{
                                setEnviado(true);
                            }

                            
                            
                            setTimeout(()=>setEnviado(false),5000);
                        }}

                        
                        validationSchema={Personales}

                        validate={(e)=>{

                            if( e.esc_nvlaca==="Posgrado" && e.esc_avan ==="Concluido"){
                                setnvl(e.esc_nvlaca)
                                setavnz(e.esc_avan)
                                if(e.esc_pos && e.esc_pos==='Si' ){
                                    setPos('Si')
                                }else if(e.esc_pos && e.esc_pos==='En proceso'){
                                    setPos('En Proceso')
                                }else{
                                    setPos('No')
                                }
                            }else{
                                setnvl(e.esc_nvlaca)
                                setavnz(e.esc_avan)
                                setPos('No')
                            }
                            
                            if(e.esc_perIA){
                                setYear(e.esc_perIA)
                            }
                            
                           
                        }}
                        
                        >
                        {
                        ({errors, touched})=>(
                            <Form>
                               
                                
                                <div className="row pt-2 ">
                                <Sel errors={errors.esc_nvlaca} touched={touched.esc_nvlaca} col="-6" label='Nivel Academico' name='esc_nvlaca' Opts={Grado} />
                                <Sel errors={errors.esc_avan} touched={touched.esc_avan} col="-6" label='Avance' name='esc_avan' Opts={Avance} />

                                </div>
                                <div className="row pt-2 ">
                                    <div className="col-12">
                                        <label className="form-label pt-2 col-6">Periodo inicio:</label>
                                        <label className="form-label pt-2 col-6">&nbsp;&nbsp;Periodo término:</label>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <Sel errors={errors.esc_perIM} touched={touched.esc_perIM} col="-8 sm-5" label='Mes' name='esc_perIM' Opts={Mes} />
                                            <Inp errors={errors.esc_perIA} touched={touched.esc_perIA} col="-4 sm-3" label="Año" name="esc_perIA" place="2010" type="number"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-6">
                                        <div className="row">
                                            <Sel errors={errors.esc_perTM} touched={touched.esc_perTM} col="-8 sm-5" label='Mes' name='esc_perTM' Opts={Mes} />
                                            <Inp errors={errors.esc_perTA} touched={touched.esc_perTA} col="-4 sm-3" label="Año" name="esc_perTA" place="2021" type="number"/>
                                        </div>
                                    </div>
                                    {
                                    (nvl==='Posgrado' || nvl==='Profesional (Ing. / Lic. / Etc.)')&&
                                     <div className="col-12 pt-4">
                                        <div className="row">
                                            { (avnz==='Concluido')&&
                                            <Sel errors={errors.esc_doc} touched={touched.esc_doc} col="-6 sm-12  animate__animated animate__rubberBand" label='Documento aprobatorio' name='esc_doc' Opts={Doc} />
                                            }
                                            <Inp errors={errors.esc_name} touched={touched.esc_name} col="-6 sm-12  animate__animated animate__rubberBand" label="Nombre" name="esc_name" place="Ing. En Sistemas Computacionales" />
                                        </div>
                                    </div>
                                    }
                                    
                                </div>

                                {
                                    (nvl==='Posgrado'&& avnz ==="Concluido" ) &&
                                    <div className="row pt-4 text-center animate__animated animate__backInUp ">
                                    <label className="col-4 form-label pt-2 fw-bold">¿Tienes 2 o mas posgrados?</label>
                                    <Radio col ="-1" name="esc_pos" label="Si" />
                                    <Radio col ="-1" name="esc_pos" label="No" errors={errors.esc_pos} touched={touched.esc_pos}/>
                                    <Radio col ="-2" name="esc_pos" label="En proceso" />
                                    </div>
                                }
                                
                                {
                                    (Pos==='Si' || Pos ==='En Proceso') &&(
                                        <div className="animate__animated animate__backInUp pt-4">
                                        <hr/>
                                        {(Pos==='Si') && (
                                            <div className="row pt-2 text-center">
                                                
                                                    <Sel errors={errors.esc_Npos} touched={touched.esc_Npos} col="-3" label='¿Cuantos?' name='esc_Npos' Opts={Xpos} />
                                                <div className="col-9">
                                                    <label className="form-label pt-2 col-6 align-bottom fw-bold animate__animated animate__flash animate__delay-2s " >Por favor, ingresa los datos del ultimo ó del que creas es mas importante.</label>
                                                </div>
                                            </div>
                                        )}
                                        <div className="row pt-2 ">
                                            <div className="col-12">
                                                <label className="form-label pt-2 col-6">Periodo inicio:</label>
                                                <label className="form-label pt-2 col-6">&nbsp;&nbsp;Periodo término:</label>
                                            </div>
                                            <div className="col-6">
                                                <div className="row">
                                                    <Sel errors={errors.esc_posperIM} touched={touched.esc_posperIM} col="-8 sm-5" label='Mes' name='esc_posperIM' Opts={Mes} />
                                                    <Inp errors={errors.esc_posperIA} touched={touched.esc_posperIA} col="-4 sm-3" label="Año" name="esc_posperIA" place="2010" type="number"/>
                                                </div>
                                            </div>
                                            
                                            <div className="col-6">
                                                <div className="row">
                                                    <Sel errors={errors.esc_posperTM} touched={touched.esc_posperTM} col="-8 sm-5" label='Mes' name='esc_posperTM' Opts={Mes} />
                                                    <Inp errors={errors.esc_posperTA} touched={touched.esc_posperTA} col="-4 sm-3" label="Año" name="esc_posperTA" place="2021" type="number"/>
                                                </div>
                                            </div>

                                            <div className="row pt-2 ">
                                                <Sel errors={errors.esc_posDM} touched={touched.esc_posDM} col="-12 col-sm-6" label='¿Cual es tu posgrado?' name='esc_posDM' Opts={Npos} />
                                                <Inp errors={errors.esc_posNom} touched={touched.esc_posNom} col="-12 col-sm-6" label="Titulo" name="esc_posNom" place="En sistemas, En matematicas, etc."/>
                                            </div>
                                        </div>
                                        </div>

                                    )
                                }

                                      <div className="row justify-content-center pt-5">
                                    <div className="col-4 text-center">
                                        <button type="" className="btn btn-secondary btn-lg"> Editar </button>
                                    </div>
                                    <div className="col-4 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg"> GUARDAR </button>
                                    </div>
                                </div>
                                <div className="row pt-1">
                                    <div className="col-6 text-start">
                                        <button type="" className="btn btn-outline-info" > Anterior </button>
                                    </div>
                                    <div className="col-6 text-end">
                                        <button type="" className="btn btn-outline-info"> Siguiente </button>
                                    </div>
                                </div>
                              
                                {
                                    (enviado &&(
                                    <div className="row pt-4">
                                     <p className="enviado fw-bold text-center"> ¡DATOS ENVIADOS CON EXITO! Puedes continuar a la siguiente sección.</p>   
                                    </div>
                                    
                                    )
                                    
                                    )
                                }
                                
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                                    <Alert onClose={handleClose} severity="error" direction="down">
                                    ¡Verifica que hayas llenado todo!
                                    </Alert>
                                </Snackbar>
                            </Form>
                        ) 
                        }
                    </Formik> 
                        
        </div>
        </>
       }
</>
    )
}
