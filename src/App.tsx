import React, { useState } from "react";

// components
import Interval from "./components/Interval";
import Draw from "./components/Draw";
import Media from "./components/Media";
import Sum from "./components/Sum";

//styles
import { GlobalStyle, Flex } from "./assets/global";

function App() {
  // states
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  return (
    <>
      <h5>Exercpicio React-Redux</h5>
      <Interval min={min} max={max} onChangeMin={setMin} onChangeMax={setMax}/>
      <Flex>
        <Media min={min} max={max} >
          Ola familia
        </Media>
        <Sum min={min} max={max}>
          Ola familia
        </Sum>
        <Draw min={min} max={max}>
          Ola familia
        </Draw>
      </Flex>
      <GlobalStyle />
    </>
  );
}

export default App;
