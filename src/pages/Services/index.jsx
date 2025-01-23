import React from "react";
import "../../styles/Services/index.scss";
import ServicesImg from "../../assets/Services/lowerLimb.jpeg";
import Nav from "../../components/Nav";

const Team = () => {
  // Array of services data
  const services = [
    {
      id: 1,
      name: "Prosthesis for Lower Limb",
      description:
        "Losing a limb can be a life-changing experience, but it shouldn't limit your ability to live a fulfilling and active life. Mobility, independence, and confidence.",
      imgSrc: ServicesImg,
    },
    {
      id: 2,
      name: "Advanced Prosthetics",
      description:
        "Advanced prosthetics to enhance mobility and improve your quality of life.",
      imgSrc: ServicesImg,
    },
    {
      id: 3,
      name: "Custom Orthotics",
      description:
        "Custom orthotics designed to meet your specific needs for comfort and support.",
      imgSrc: ServicesImg,
    },
    {
      id: 4,
      name: "Prosthesis for Upper Limb",
      description:
        "The loss of an upper limb can be a real challenge, affecting both daily activities and quality of life. P&O International offers advanced solutions for upper limb prosthetics to enhance functionality, independence, and confidence.",
      imgSrc: ServicesImg,
    },
    {
      id: 5,
      name: "Cosmetic Restoration",
      description:
        "Physical appearance profoundly impacts self-esteem and overall well-being. Our Cosmetic Restoration service focuses on restoring the natural look and function of body parts lost due to injury, illness, or congenital conditions.",
      imgSrc: ServicesImg,
    },
    {
      id: 6,
      name: "Robotic/Multi-Articulating Hand",
      description:
        "Prosthetic technology has revolutionized upper limb solutions. We provide cutting-edge robotic and multi-articulating hand prosthetics that are both functional and aesthetically pleasing.",
      imgSrc: ServicesImg,
    },
    {
      id: 7,
      name: "Pediatric Orthotics",
      description:
        "Early interventions and individualized care are crucial for children requiring orthoses. Our Pediatric Orthotics Services are tailored to meet the unique needs of growing children, providing customized solutions.",
      imgSrc: ServicesImg,
    },
    {
      id: 8,
      name: "Spinal Orthotics",
      description:
        "We offer exceptional spinal orthotic solutions designed to address various conditions affecting the spine. Our services aim to improve posture, alleviate pain, and support recovery.",
      imgSrc: ServicesImg,
    },
    {
      id: 9,
      name: "Hand Orthotics",
      description:
        "Our customized hand orthotic services assist individuals with injuries, chronic conditions, or congenital challenges affecting hand functionality. We aim to enhance mobility and reduce pain.",
      imgSrc: ServicesImg,
    },
  ];

  return (
    <section className="team">
      <Nav />
      <div className="team__peopleWrap">
        {services.map((service) => (
          <div className="team__peopleWrap-infoCard" key={service.id}>
            <img
              src={service.imgSrc}
              alt={service.name}
              className="team__peopleWrap-infoCard-img"
            />
            <div className="team__peopleWrap-infoCard-detailsWrap">
              <h3 className="team__peopleWrap-infoCard-detailsWrap-name">
                {service.name}
              </h3>
              <p className="team__peopleWrap-infoCard-detailsWrap-designation">
                {service.description}
              </p>
            </div>
            <button className="team__peopleWrap-infoCard-btn">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
