import React from "react";

//components
import Card from "../Card";

// interface
import { IProps } from "../shared/interface";
const Media = ({ min, max }: IProps) => {
  return (
      <Card colors="red" title="Media dos numeros">
        <span>
          <span>Resultado:</span>
          <strong>{(min + max) / 2}</strong>
        </span>
      </Card>
  );
};

export default Media;
