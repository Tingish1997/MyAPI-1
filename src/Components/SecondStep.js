import React from 'react'
import Card from '@material-ui/core/Card';
import {Grid} from "@material-ui/core";

export default function SecondStep() {
    return (
        <div>
          <Grid container justify="center" alignItems="center" direction="column">
          <h1>Welcome to Hogwarts Academy</h1>
          <p>Please read the notice before you complete the application.</p>
          <Card className="mycard" variant="outlined" p="5">
          <Grid container  alignItems="center" direction="column">
          
          <h1>Notice</h1>
          <p>The train will leave at Platform 9¾ at King's Cross Station, 30 Feb.</p>
          <img src='/logo192.png' width="10%"/>
          </Grid>
          </Card>
          </Grid>
          </div>
    )
}
