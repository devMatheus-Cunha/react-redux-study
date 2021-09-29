import React from "react";
import Card from "../Card";

const Draw: React.FC = () => {
  return (
      <Card colors="green" title="Sorteio de um numero">
        <span>
          <span>Resultado:</span>
          <strong>9</strong>
        </span>
      </Card>
  );
};

export default Draw;
