import "./assets/scss/main.scss";
import Container from "./components/Container";
import Card from "./components/Card";
import GeneratedPassword from "./components/GeneratedPassword";
import ConfigurePassword from "./components/ConfigurePassword";
import { createContext, useState } from "react";
import { DEFAULT_PASSWORD } from "./utils/constants";

const defaultStateVal: any = {
  password: DEFAULT_PASSWORD,
  includeLower: false,
  includeNumber: false,
  includeSymbol: false,
  includeUpper: false,
};

export const PasswordContext = createContext(defaultStateVal);

const App = () => {
  const [state, setState] = useState(defaultStateVal);

  const updateState = (newState: {}) => {
    setState(newState);
  };

  const stateVal = {
    state: state,
    setState: updateState,
  };

  return (
    <>
      <PasswordContext.Provider value={stateVal}>
        <Container>
          <Card>
            <GeneratedPassword />
          </Card>
          <Card>
            <ConfigurePassword />
          </Card>
        </Container>
      </PasswordContext.Provider>
    </>
  );
};

export default App;
