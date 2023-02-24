import "./assets/scss/main.scss";
import Heading from "./components/Heading";
import Container from "./components/Container";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Heading text="Password Generator" />
      <Container>
        <Card></Card>
        <Card></Card>
      </Container>
    </>
  );
};

export default App;
