import React from "react";
import Carous from "../Components/Carous";
import Review from "./Review";
import Positives from "./Positives";
import Porcedures from "./Porcedures";

function Home() {
  return (
    <>
      <Carous />
      <Positives />
      <Review />
      <Porcedures />
    </>
  );
}

export default Home;
