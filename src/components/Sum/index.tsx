import React from "react";

//components
import Card from "../Card";

// interface
import { IProps } from "../shared/interface";

const Sum = ({ min, max }: IProps) => {
  return (
      <Card colors="blue" title="Soma dos numeros">
        <span>
          <span>Resultado:</span>
          <strong>{min + max}</strong>
        </span>
      </Card>
  );
};

export default Sum;
