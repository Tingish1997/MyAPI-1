import React from 'react'
import {TextField} from '@material-ui/core';


export default function FirstStep() {
  const step = 0  
  return (
        <div>
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
          </div>
    )
}
