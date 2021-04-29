import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3"
    },
    secondary: {
      main: "#4caf50"
    }
  },
  overrides: {    
    MuiFilledInput: {
      root: {
        backgroundColor: "green"
      }
    },
    MuiTextField: {
      root: {}
    },
    MuiButton: {
      root: {
        borderRadius: 30,
        textTransform: "none",
        padding: "20px",
      },
      fullWidth: {
        maxWidth: "800em"
      },
      '&:hover': {
        props: {variant:"contained !important"}
      },
    },
    MuiStepIcon:{
      root: {
        '&$completed': {
          color: "#4caf50",
        },
        '&$active': {
          color: "#2196f3",
        },
      },
      active: {},
      completed: {},
    },
    
  },

});