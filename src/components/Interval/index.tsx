import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeMinNumber } from "../../store/actions/numbers";

// components
import Card from "../Card";

// styles
import { Container } from "./styles";

const Interval = ({ min, max, onChangeMinNumber }: any) => {
  return (
    <Container>
      <Card colors="gray" title="Intervalo de numeros">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(event) => {
              onChangeMinNumber(+event.target.value);
              console.log(min, "", max);
            }}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} />
        </span>
      </Card>
    </Container>
  );
};

const mapStateToPros = (state: any) => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onChangeMinNumber(newNumber: any) {
      const action = changeMinNumber(newNumber);
      dispatch(action);
    },
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(Interval);
