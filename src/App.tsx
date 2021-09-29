import React from "react";

// components
import Card from "./components/Card";
import Interval from "./components/Interval";

//styles
import { GlobalStyle, Flex } from "./assets/global";

function App() {
  return (
    <>
      <h5>Exercpicio React-Redux</h5>
      <Interval />
      <Flex>
        <Card colors="blue" title="Card">
          Ola familia
        </Card>
        <Card colors="blue" title="Card">
          Ola familia
        </Card>
        <Card colors="blue" title="Card">
          Ola familia
        </Card>
      </Flex>
      <GlobalStyle />
    </>
  );
}

export default App;
