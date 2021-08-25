import React from 'react'
import { DatosAdic } from '../Componentes/Forms/DatosAdic';
import { DatosDom } from '../Componentes/Forms/DatosDom';
import { DatosEsc } from '../Componentes/Forms/DatosEsc';
import { DatosFam } from '../Componentes/Forms/DatosFam';
import { DatosJob } from '../Componentes/Forms/DatosJob';
import { DatosMedic } from '../Componentes/Forms/DatosMedic';
import { DatosPers } from '../Componentes/Forms/DatosPers';
import { DatosRefP } from '../Componentes/Forms/DatosRefP';
import { DatosRefV } from '../Componentes/Forms/DatosRefV';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
export const UserRegScreen = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        button: {
          marginTop: theme.spacing(1),
          marginRight: theme.spacing(1),
        },
        actionsContainer: {
          marginBottom: theme.spacing(2),
        },
        resetContainer: {
          padding: theme.spacing(3),
        },
      }));
      
      function getSteps() {
        return ['DATOS PERSONALES', 'DOMICILIO', 'ESCOLARIDAD','DATOS FAMILIARES','REFERENCIAS PERSONALES',
                'REFERENCIAS VECINALES','ULTIMOS 3 EMPLOES','DATOS MEDICOS','ULTIMOS DATOS'];
      }
      
      function getStepContent(step) {
        switch (step) {
            case 0:
                return <DatosPers />;
            case 1:
                return <DatosDom  />;
            case 2:
                return  <DatosEsc  />;
            case 3:
                return <DatosFam  />;
            case 4:
                return <DatosRefP />;
            case 5:
                return<DatosRefV />  
            case 6:
                return  <DatosJob />
            case 7:
                return  <DatosMedic />  
            case 8:
                return  <DatosAdic  />
          default:
            return 'Unknown step';
        }
      }
/********************************************************************************/

const classes = useStyles();
const [activeStep, setActiveStep] = React.useState(0);
const steps = getSteps();

const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

const handleReset = () => {
  setActiveStep(0);
};
    return (

<div className="container background2">

    <h1 className="marL mb-4 text">Registro de usuario</h1>
    <span className="lh-sm text ">
        Aqui iran las intrucciones que leeran los usuarios para el correcto llenado del formulario
        donde se les recomienda hagan este registro con tiempo  y con calma, los datos solo seran guardados unavez
        finalice y se valide que la informacion ingresada es correcta. En caso de tener dudas o preguntas respecto al llenado
        consultar con alguien mas. De ser posible contactar directamente con el personal de Alef Global
    </span>
        <div className="row border">
            <form className="" >
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    {getStepContent(index)}
                                <div className=''>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={'mt-5 '+classes.button}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={'mt-5 '+classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                    Reset
                            </Button>
                            </Paper>
                    )}
                                                
            </form>
        </div>
    </div>
    )
}
