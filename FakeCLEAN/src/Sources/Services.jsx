import React from "react";
import Cards from "../Components/Cards";

function Services() {
  const services = [
    {
      img: "https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg?t=st=1725991924~exp=1725995524~hmac=d6a03c614f251c780251d05a2938422fec1020fa2f5b940f789efaaea5e8f4b5&w=1060",
      title: "Home Deep Cleaning Service",
      desc: "Comprehensive cleaning for every corner of your home, including floors and hard-to-reach areas.",
    },
    {
      img: "https://img.freepik.com/free-photo/full-shot-people-cleaning-office_23-2150454568.jpg?t=st=1725991966~exp=1725995566~hmac=9641c7709f8217f785dc6767fa1cf3b81e3a33d4cc2371ca75c5b36d806b064e&w=1060",
      title: "Office Cleaning Services",
      desc: "Professional cleaning for offices, ensuring a spotless and hygienic work environment.",
    },
    {
      img: "https://img.freepik.com/free-photo/close-up-vacuuming-carpet_329181-636.jpg?t=st=1725992066~exp=1725995666~hmac=83fcf610ae16e7f08ae5905dc68ad34098c4e55faa035da83c793a79c81cd2b9&w=1060",
      title: "Carpet Cleaning",
      desc: "Specialized carpet cleaning to remove dirt, stains, and allergens, leaving carpets fresh and clean.",
    },
    {
      img: "https://img.freepik.com/free-photo/young-woman-with-rechargeable-vacuum-cleaner-cleaning-home_1303-27164.jpg?t=st=1725992116~exp=1725995716~hmac=e7c761a4e163d7716a44d127b5cb2439829ee672cfa6e9ac983062d63169ab01&w=1060",
      title: "Sofa Cleaning",
      desc: "Deep cleaning of sofas and upholstery, removing dust, stains, and odors for a refreshed look.",
    },
    {
      img: "https://img.freepik.com/free-photo/crop-woman-packing-boxes_23-2147758886.jpg?t=st=1725992158~exp=1725995758~hmac=3682a3f456bc22c0d4b9d7b098c79ae5ccd49e08fc56b6848ed7603b0aed6692&w=1060",
      title: "Move-In/Move-Out Cleaning",
      desc: "Thorough cleaning services for homes or apartments before moving in or after moving out.",
    },
    {
      img: "https://img.freepik.com/free-photo/close-up-hand-with-rubber-glove-cleaning-window_23-2148529568.jpg?t=st=1725992223~exp=1725995823~hmac=b03ceacb60ea650c4d30e478300dd64d47b3b470c03bdd4450117e46ee4cbf5e&w=900",
      title: "Window Cleaning",
      desc: "Streak-free cleaning of windows, ensuring clear and polished glass inside and out.",
    },
    {
      img: "https://img.freepik.com/free-photo/people-disinfecting-biohazard-area_23-2148848557.jpg?t=st=1725992270~exp=1725995870~hmac=f8dff5fcdefe2811600772635d2d2587a2d31395803ca6f24d3a75e9bd68e22d&w=1060",
      title: "Disinfection and Sanitization",
      desc: "Complete sanitization of homes and offices to eliminate harmful germs and bacteria.",
    },
    {
      img: "https://img.freepik.com/free-photo/full-shot-men-high-five-office_23-2149345549.jpg?t=st=1725992300~exp=1725995900~hmac=ceb76187f4d88547eee71a4993a78ed7efe5e12372a212cebe8fb610af5922ff&w=1060",
      title: "Post-Construction Cleaning",
      desc: "Cleaning up after construction or renovation projects, removing dust, debris, and residue.",
    },
    {
      img: "https://img.freepik.com/free-photo/medium-shot-woman-cleaning-home_23-2150453293.jpg?t=st=1725992333~exp=1725995933~hmac=098226b5330a7ba240b9e515b728e98328826908606d643829f75556f269813c&w=1060",
      title: "Kitchen and Bathroom Deep Cleaning",
      desc: "Specialized cleaning of kitchens and bathrooms, focusing on tough grease, stains, and sanitation.",
    },
  ];
  return (
    <>
      <div className="service-container">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            fontSize: "500%",
            marginBottom: "2%",
          }}
        >
          What Services we Offer ?
        </h1>
        <div className="service-sub-container">
          {services.map((each, index) => {
            return (
              <Cards
                img={each.img}
                desc={each.desc}
                title={each.title}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
