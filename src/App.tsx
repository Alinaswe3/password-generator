import "./assets/scss/main.scss";
import Heading from "./components/Heading";
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <Heading text="Password Generator" />
      <Container>
        <p> This is the container</p>
      </Container>
    </>
  );
};

export default App;
