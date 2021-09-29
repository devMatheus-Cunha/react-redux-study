import React from "react";
import Card from "../Card";

import { Container } from "./styles";

const Interval: React.FC = () => {
  return (
    <Container>
      <Card colors="gray" title="Intervalo de numeros">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10} readOnly />
        </span>
      </Card>
    </Container>
  );
};

export default Interval;
