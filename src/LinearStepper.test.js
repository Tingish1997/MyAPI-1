import 
    {LinearStepper}
 from  './LinearStepper.js';
import React from "react";
import FirstStep from './Components/FirstStep';
import { Functions } from '@material-ui/icons';

//test getSteps of Stepper

describe("getStepContent function", () => {
    it("Mis Datos", () => {
        expect(getStepContent(0)).toEqual(FirstStep);
      });
  });

