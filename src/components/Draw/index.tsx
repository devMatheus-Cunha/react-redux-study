import React from "react";
import Card from "../Card";

// interface
import { IProps } from "../shared/interface";

const Draw = ({ min, max }: IProps) => {
  const random = (Math.random() * (max - min) + min);
  return (
    <Card colors="green" title="Sorteio de um numero">
      <span>
        <span>Resultado:</span>
        <strong>{random.toFixed(0)}</strong>
      </span>
    </Card>
  );
};

export default Draw;
