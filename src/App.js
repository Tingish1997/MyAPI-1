import LinearStepper from "./LinearStepper";
import { CssBaseline} from "@material-ui/core";
import { theme } from "./theme";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import {ThemeProvider} from "@material-ui/core";

<<<<<<< HEAD

=======
>>>>>>> 57751bd55425604a64b44d1a2ef09fca5806b9d2
function App() {
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
