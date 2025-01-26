import React, { useState, useEffect } from "react";
import "../../../styles/Home/Service/index.scss";
import ServicesImg from "../../../assets/Services/lowerLimb.jpeg";
import Form from '../../../components/Form';

const Service = () => {
  const services = [
    {
      id: 1,
      name: "Prosthesis for Lower Limb",
      description:
        "Losing a limb can be a life-changing experience, but it shouldn't limit your ability to live a fulfilling and active life. At P&O International, we commit ourselves to providing advanced lower limb prosthetic solutions to empower individuals to regain mobility, independence, and confidence.",
      imgSrc: ServicesImg,
    },
    {
      id: 2,
      name: "Advanced Prosthetics",
      description:
        "The loss of an upper limb can be a real challenge, challenging both daily activities and the quality of life. P&O International is committed to offering advanced solutions for upper limb prosthetics in terms of functionality, independence, and confidence.",
      imgSrc: ServicesImg,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false)

  showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  const handleModal = () => {
    setShowModal(true)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="service">
      <h2 className="service__heading">Our service</h2>
      <p className="service__subheading">
        Explore our specialized prosthetic solutions to help you regain mobility and confidence.
      </p>
      <div className="service__slider">
        <div
          className="service__slider-wrapper"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {services.map((service) => (
            <div className="service__card" key={service.id}>
              <img
                src={service.imgSrc}
                alt={service.name}
                className="service__card-img"
              />
              <div className="service__card-description">
                <h3 className="service__card-description-title">
                  {service.name}
                </h3>
                <p className="service__card-description-text">
                  {service.description}
                </p>
                <button className="service__card-description-btn" onClick={handleModal}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="service__btn service__btn-prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="service__btn service__btn-next" onClick={nextSlide}>
          &gt;
        </button>
        <div className="service__indicators">
          {services.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <a href="#" className="service__link">See all</a>
      {showModal && (<div className="about-us__modalWrap">
        <Form visible={true} setShowModal={setShowModal} />
      </div>)}
    </section>
  );
};

export default Service;
