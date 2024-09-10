import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ img, desc, title }) {
  return (
    <Card
      className="each-card"
      bg="dark"
      text="light"
      style={{ width: "25rem" }}
    >
      <Card.Img className="card-image" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="primary">View Details</Button>
          <Button variant="primary">Book Now</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
