import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Fig from "../Components/Fig";

function Porcedures() {
  const figure = [
    {
      img: "https://st2.depositphotos.com/1757635/5948/i/600/depositphotos_59485295-stock-photo-businessman-working-on-laptop.jpg",
      text: "Sign up and create your account effortlessly.",
    },
    {
      img: "https://st.depositphotos.com/1017986/4484/i/450/depositphotos_44848347-stock-photo-smiling-man-with-smartphone-at.jpg",
      text: "Schedule your service at your convenience.",
    },
    {
      img: "https://st.depositphotos.com/1037987/4829/i/600/depositphotos_48298337-stock-photo-parents-giving-children-piggyback-rides.jpg",
      text: "Relax and enjoy your spotless space!",
    },
  ];
  return (
    <Accordion
      defaultActiveKey={["0"]}
      flush
      alwaysOpen
      className="custom-accordion"
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h2 style={{ fontWeight: "bolder" }}>HOW TO PROCEED ?</h2>
        </Accordion.Header>
        <Accordion.Body>
          <div className="procedure-container">
            {figure.map((each, index) => {
              return <Fig key={index} img={each.img} text={each.text} />;
            })}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Porcedures;
