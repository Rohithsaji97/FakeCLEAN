import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Carous() {
  const element = [
    {
      imgsrc:
        "https://img.freepik.com/free-photo/business-concept-close-up-portrait-young-beautiful-attractive-ginger-red-hair-girl-smiling-showing-b_1258-124915.jpg?t=st=1725941439~exp=1725945039~hmac=86f27cccb4c13430ab6331ab5a3194c9de767d748cfb07023fe11eb5ba0c9899&w=1380",
      label: "Indoor Cleaning Service",
      desc: "Professional indoor cleaning service for spotless and refreshed spaces.",
    },
    {
      imgsrc:
        "https://img.freepik.com/premium-photo/charming-student-girl-listening-music-through-headphones-holds-open_78492-11689.jpg?w=1380",
      label: "Outdoor Cleaning Service",
      desc: "Reliable outdoor cleaning service for pristine and tidy exteriors.",
    },
    {
      imgsrc:
        "https://img.freepik.com/premium-photo/asian-beautiful-businesswoman-holding-laptop-blue-colour-background-with-copy-space-concept-online-business-success-with-technology_7191-1608.jpg?w=1380",
      label: "Full In Cleaning Service",
      desc: "Comprehensive full-in cleaning service for immaculate and fresh spaces.",
    },
  ];
  return (
    <Carousel fade>
      {element.map((each, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={each.imgsrc}
              alt="Slide Info"
            />
            <Carousel.Caption>
              <h1>{each.label}</h1>
              <h6>{each.desc}</h6>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Carous;
