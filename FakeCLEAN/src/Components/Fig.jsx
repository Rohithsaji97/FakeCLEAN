import React from "react";
import Figure from "react-bootstrap/Figure";

function Fig({ img, text }) {
  return (
    <Figure className="proc-fig">
      <Figure.Image className="proc-fig-img" alt="STEPS" src={img} />
      <Figure.Caption>
        <h4 style={{ color: "black" }}>{text}</h4>
      </Figure.Caption>
    </Figure>
  );
}

export default Fig;
