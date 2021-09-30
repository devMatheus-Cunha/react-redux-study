import React from "react";

// components
import Card from "../Card";

// styles
import { Container } from "./styles";

const Interval = () => {
  return (
    <Container>
      <Card colors="gray" title="Intervalo de numeros">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={0}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={10}
          />
        </span>
      </Card>
    </Container>
  );
};

export default Interval;
