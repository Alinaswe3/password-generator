import "./assets/scss/main.scss";
import Heading from "./components/Heading";
import Container from "./components/Container";
import Card from "./components/Card";
import GeneratedPassword from "./components/GeneratedPassword";

const App = () => {
  return (
    <>
      <Container>
        <Card>
          <GeneratedPassword />
        </Card>
        <Card>
          <p>This is for configuration purposes</p>
        </Card>
      </Container>
    </>
  );
};

export default App;
