import React from "react";
import Card from "../Card";

const Sum: React.FC = () => {
  return (
      <Card colors="blue" title="Soma dos numeros">
        <span>
          <span>Resultado:</span>
          <strong>10</strong>
        </span>
      </Card>
  );
};

export default Sum;
