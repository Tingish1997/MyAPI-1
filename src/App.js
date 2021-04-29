import LinearStepper from "./LinearStepper";
import { CssBaseline} from "@material-ui/core";
import { theme } from "./theme";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import {ThemeProvider} from "@material-ui/core";

class App{
  api(){
    return fetch("http://www.mocky.io/v2/5e3d41272d00003f7ed95c09")
    .then((response)=>{
      return response.json
    })
  }   
}

function app() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <PrimarySearchAppBar/>
      </ThemeProvider>
      <CssBaseline />
          <LinearStepper />
    </>
  );
}

export default App;
