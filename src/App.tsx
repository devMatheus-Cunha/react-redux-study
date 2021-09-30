import React from "react";

// components
import Interval from "./components/Interval";
import Draw from "./components/Draw";
import Media from "./components/Media";
import Sum from "./components/Sum";

//styles
import { GlobalStyle, Flex } from "./assets/global";

function App() {
  return (
    <>
      <h5>Exercpicio React-Redux</h5>
      <Interval />
      <Flex>
        <Media />
        <Sum />
        <Draw />
      </Flex>
      <GlobalStyle />
    </>
  );
}

export default App;
