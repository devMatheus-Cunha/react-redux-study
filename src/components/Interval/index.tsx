import React from "react";

// components
import Card from "../Card";

// interface
import { IIntervalProps } from "../shared/interface";

// styles
import { Container } from "./styles";

const Interval = ({ min, max, onChangeMin, onChangeMax }: IIntervalProps) => {
  return (
    <Container>
      <Card colors="gray" title="Intervalo de numeros">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(event) => onChangeMin(parseFloat(event.target.value))}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(event) => onChangeMax(parseFloat(event.target.value))}
          />
        </span>
      </Card>
    </Container>
  );
};

export default Interval;
