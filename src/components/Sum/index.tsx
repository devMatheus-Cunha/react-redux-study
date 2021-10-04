import React from "react";
import { connect } from "react-redux";

//components
import Card from "../Card";

const Sum = ({ min, max }: any) => {
  return (
    <Card colors="blue" title="Soma dos numeros">
      <span>
        <span>Resultado:</span>
        <strong>{min + max}</strong>
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

export default connect(mapStateToPros)(Sum);
