import React from "react";

function Positives() {
  const whyShould = [
    {
      positive: "Highly Trained Professionals",
      reason:
        "Our cleaning staff is rigorously trained to ensure top-notch service, with attention to detail in every aspect of cleaning.",
    },
    {
      positive: "Customizable Cleaning Plans",
      reason:
        "We offer tailored cleaning solutions that meet the specific needs and preferences of each client, whether for residential or commercial spaces.",
    },
    {
      positive: "Use of Eco-Friendly Products",
      reason:
        "We prioritize health and the environment by using non-toxic, eco-friendly cleaning products that are safe for your family, pets, and employees.",
    },
    {
      positive: "Advanced Cleaning Techniques",
      reason:
        "We utilize modern equipment and innovative cleaning techniques to ensure thorough and efficient cleaning, leaving no corner untouched.",
    },
    {
      positive: "Regular Cleaning Coverage",
      reason:
        "From deep cleaning to regular maintenance, we cover all aspects of indoor and outdoor cleaning, providing a full spectrum of services.",
    },
    {
      positive: "Flexible Scheduling",
      reason:
        "We accommodate your schedule, offering convenient cleaning times, including evenings and weekends, to suit your busy lifestyle.",
    },
  ];
  return (
    <div className="why-container">
      <h1 style={{ textAlign: "center" }}>WHY OUR SERVICE ?</h1>
      <div className="positives">
        {whyShould.map((each, index) => {
          return (
            <ul key={index} className="listed-positives">
              <li style={{ marginBottom: "3%" }}>
                <h4
                  style={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  {each.positive}
                </h4>
              </li>
              <li>
                <h5>{each.reason}</h5>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Positives;
