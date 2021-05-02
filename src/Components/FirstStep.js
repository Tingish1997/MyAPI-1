import React from 'react'
import {TextField} from '@material-ui/core';
import {Grid} from "@material-ui/core";


export default function FirstStep() {
  const step = 0  
  return (
        <div>
        <h1>Info</h1>
          <p>Please enter your information.</p>
          <Grid container justify="center" alignItems="center" direction="column">
          <TextField
            id="Name"
            label="Name"
            variant="outlined"
            placeholder="Name"
            margin="normal"
          />
          <TextField
            id="Last Name"
            label="Last Name"
            variant="outlined"
            placeholder="Last Name"
            margin="normal"
          /> 
          </Grid>
          </div>
    )
}
