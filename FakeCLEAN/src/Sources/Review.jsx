import React from "react";

function Review() {
  const reviews = [
    {
      rev: "Absolutely fantastic service! The team was punctual, professional, and left my home sparkling clean. I especially appreciated their attention to detail—every corner was spotless. I highly recommend this cleaning company!",
      by: "— Sarah J.",
    },
    {
      rev: "I hired them for both indoor and outdoor cleaning, and I am impressed! My driveway looks brand new, and the house feels so fresh. The eco-friendly products they use are a big plus. Will definitely book them again.",
      by: "— Michael R.",
    },
    {
      rev: "Exceptional service! The cleaners were thorough and efficient, tackling tough spots I did not think would come clean. Their friendly demeanor and professionalism made the experience even better. Worth every penny!",
      by: "— Jessica L.",
    },
    {
      rev: "This is the best cleaning service I have ever used. They customized the cleaning plan to fit my needs perfectly and even accommodated my busy schedule. My home has never looked better. Highly recommended!",
      by: "— David M.",
    },
  ];
  return (
    <div className="review-container">
      <h1 style={{ textAlign: "center" }}>CUSTOMER OPINIONS</h1>
      <div className="reviews">
        {reviews.map((each, index) => {
          return (
            <ul key={index} className="listed-reviews">
              <li>
                <h5 style={{ fontStyle: "italic" }}>"{each.rev}"</h5>
              </li>
              <li>
                <h4 style={{ fontWeight: "bold" }}>{each.by}</h4>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Review;
