import React, { useState } from "react";
import {
  ThemeProvider,
  Grid,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./LinearStepper.css";
import { Paper, Box } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { theme } from "./theme";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
}));


function getSteps() {
  return [
    "Mis Datos",
    "Pago",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <h1>Mis Datos</h1>
          <p>Revisa los datos y completa aquellos pendientes antes de continuar con el proceso.</p>
          <TextField
            id="Nombre"
            label="Nombre"
            variant="outlined"
            placeholder="Nombre"
            fullWidth
            margin="normal"
          />
          <TextField
            id="Apellidos"
            label="Apellidos"
            variant="outlined"
            placeholder="Apellidos"
            fullWidth
            margin="normal"
          />          
        </>
      );

    case 1:
      return (
        <>
          <Grid container justify="center" alignItems="center" direction="column">
          <h1>Pago del producto</h1>
          <p>Una vez efectuado el pago del producto, recibirás un email con los detalles de la compro.</p>
          <Card className="mycard" variant="outlined" p="5">
          <Grid container  alignItems="center" direction="column">
          <img src='/img/01.PNG'/>
          <h1>Tarjeta de crédito</h1>
          <p>Se redirigerá a una plataforma de pago. Se trata de un proceso seguro. Puede que la validación del pago tarde 24 horas en completarse.</p>
          <img src='/img/02.PNG'/>
          </Grid>
          </Card>
          </Grid>
        </>
      );
    case 2:
      return (
        <>
         
        </>
      );
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Stepper alternativeLabel activeStep={activeStep} style={{ backgroundColor: "transparent"}} color="primary">
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >                
              </Typography>
            );
          }
          return (
            <Step {...stepProps} key={index} >
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Grid container justify="center" alignItems="center" direction="column">
      <Paper component={Box} p={7} m={5}>
      
        {activeStep === steps.length ? (
        <Typography  align="center">
          <img src='/img/03.PNG'/>
          <h1>Enhorabuena</h1>
          <p>Se ha finalizado ya el proceso de compra con éxito. Recibirá un email con todos los detalles. Gracias.</p>
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          {isStepOptional(activeStep) && (<Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
            color="primary"
            variant="outlined"
          >
            <ArrowBackIcon/>Anterior
          </Button>
          )}          
          <Button 
            className={classes.button}            
            color="primary"
            variant="outlined"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Pagar" : "Continuar"}<ArrowForwardIcon/>
          </Button>
        </>
      )}
       
      </Paper></Grid>
      </ThemeProvider>
    </div>
    
  );
};



export default LinaerStepper;
