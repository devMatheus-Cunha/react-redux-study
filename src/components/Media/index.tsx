import React from "react";
import { connect } from "react-redux";

//components
import Card from "../Card";

const Media = ({ min, max }: any) => {
  return (
    <Card colors="red" title="Media dos numeros">
      <span>
        <span>Resultado:</span>
        <strong>{(max + min) / 2}</strong>
      </span>
    </Card>
  );
};

const mapStateToPros = (state: any) => {
  return {
    // numbers: state.numbers,
    min: state.numbers.min,
    max: state.numbers.max,
  };
};

export default connect(mapStateToPros)(Media);
