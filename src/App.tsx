import React from "react";

// components
import Card from "./components/Card";

//styles
import { GlobalStyle } from "./assets/global";

function App() {
  return (
    <>
      <h5>Exercpicio React-Redux</h5>
        <Card title="Card" colors="red">
          Ola familia
        </Card>
        <Card colors="blue" title="Card">
          Ola familia
        </Card>
      <GlobalStyle />
    </>
  );
}

export default App;
