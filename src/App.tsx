import "./assets/scss/main.scss";
import Heading from "./components/Heading";
import Container from "./components/Container";
import Card from "./components/Card";
import GeneratedPassword from "./components/GeneratedPassword";
import ConfigurePassword from "./components/ConfigurePassword";

const App = () => {
  return (
    <>
      <Container>
        <Card>
          <GeneratedPassword />
        </Card>
        <Card>
          <ConfigurePassword />
        </Card>
      </Container>
    </>
  );
};

export default App;
