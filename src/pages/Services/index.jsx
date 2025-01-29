import React, { useState } from "react";
import "../../styles/Services/index.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import "../../styles/Home/Army/index.scss";
import ServicesImg1 from "../../assets/Services/Prosthesis for Lower Limb.jpeg";
import ServicesImg2 from "../../assets/Services/Prosthesis for Upper Limb.jpeg";
import ServicesImg3 from "../../assets/Services/Cosmetic Restoration.jpeg";
import ServicesImg4 from "../../assets/Services/Robotic-Multi-Articulating Hand.jpg";
import ServicesImg5 from "../../assets/Services/Orthotic-Products.jpg";
import ServicesImg6 from "../../assets/Services/Pediatric Orthotics.jpeg";
import ServicesImg7 from "../../assets/Services/Spinal Orthotics.jpeg";
import ServicesImg8 from "../../assets/Services/Upper Extremity Orthotics.jpeg";
import ServicesImg9 from "../../assets/Services/Hand Orthotics.jpeg";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  // Disable scrolling when modal is open
  React.useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleModal = () => {
    setShowModal(true);
  };

  const services = [
    {
      id: 1,
      name: "Prosthesis for Lower Limb",
      description:
        "P&O International provides advanced solutions for lower limb prosthetics...",
      imgSrc: ServicesImg1,
    },
    {
      id: 2,
      name: "Prosthesis for Upper Limb",
      description: "P&O International is focused on delivering superior solutions...",
      imgSrc: ServicesImg2,
    },
    {
      id: 3,
      name: "Cosmetic Restoration",
      description: "P&O International specializes in Cosmetic Restoration...",
      imgSrc: ServicesImg3,
    },
    {
      id: 4,
      name: "Robotic/Multi-Articulating Hand",
      description:
        "P&O International is the leading provider of robotic and multi-articulating...",
      imgSrc: ServicesImg4,
    },
    {
      id: 5,
      name: "Orthotic Product",
      description: "P&O International focuses on improving mobility...",
      imgSrc: ServicesImg5,
    },
    {
      id: 6,
      name: "Pediatric Orthotics",
      description: "P&O International is a leading provider of pediatric orthotics...",
      imgSrc: ServicesImg6,
    },
    {
      id: 7,
      name: "Spinal Orthotics",
      description: "P&O International is the leading provider of spinal orthotics...",
      imgSrc: ServicesImg7,
    },
    {
      id: 8,
      name: "Upper Extremity Orthotics",
      description:
        "P&O International is one of the pioneers in upper-limb orthotic solutions...",
      imgSrc: ServicesImg8,
    },
    {
      id: 9,
      name: "Hand Orthotics",
      description: "P&O International is the best company in customizing hand orthotics...",
      imgSrc: ServicesImg9,
    },
  ];

  return (
    <div>
      <Nav />
      <section className="services">
        <h1 className="services__title">Our Services</h1>
        <p className="services__description">
          P&O International is the name associated with trusted artificial limb services...
        </p>
        <div className="services__content">
          {services.map((service) => (
            <div className="services__card" key={service.id}>
              <div className="services__card-image">
                <img src={service.imgSrc} alt={service.name} className="services__card-img" />
              </div>
              <div className="services__card-description">
                <h3 className="services__card-description-title">{service.name}</h3>
                <p className="services__card-description-text">{service.description}</p>
                <button className="services__card-description-btn" onClick={handleModal}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {showModal && (
          <div className="army__modalWrap">
            <Form isFieldVisible={false} isIconVisible={true} setShowModal={setShowModal} />
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Services;
