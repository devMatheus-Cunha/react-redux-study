import React from "react";
import { connect } from "react-redux";

// components
import Card from "../Card";

const Draw = ({ min, max }: any) => {
  const random = Math.random() * (max - min) + min;

  return (
    <Card colors="green" title="Sorteio de um numero">
      <span>
        <span>Resultado:</span>
        <strong>{parseInt(random.toFixed(2))}</strong>
      </span>
    </Card>
  );
};
const mapStateToPros = (state: any) => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
};

export default connect(mapStateToPros)(Draw);
