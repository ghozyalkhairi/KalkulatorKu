import Body from "./components/Body";
import Container from "./components/Container";
import Displayer from "./components/Displayer";
import Grid from "./components/Grid";
import Inputs from "./components/Inputs";
import { CalcProvider } from "./context/CalcContext";

function App() {
  return (
    <Body>
      <Container>
        <CalcProvider>
          <Grid>
            <Displayer />
            <Inputs />
          </Grid>
        </CalcProvider>
      </Container>
    </Body>
  );
}

export default App;
