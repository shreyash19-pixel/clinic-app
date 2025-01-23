import React, { useState, useEffect } from "react";
import "../../styles/AboutUs/index.scss"; // Custom styles for the About Us page
import DirectorPhoto1 from "../../assets/AboutUs/Director.jpg"; // Replace with actual photos
import DirectorPhoto2 from "../../assets/AboutUs/Director.jpg";
import DirectorPhoto3 from "../../assets/AboutUs/Director.jpg";
import Nav from "../../components/Nav";

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const directorMessages = [
    {
      id: 1,
      name: "Director 1",
      message:
        "At P&O International, we believe in empowering individuals to lead fulfilling lives regardless of the challenges they face. With a steadfast commitment to innovation, compassion, and excellence, we strive to provide life-enhancing prosthetic and orthotic solutions tailored to individual needs.",
      imgSrc: DirectorPhoto1,
    },
    {
      id: 2,
      name: "Director 2",
      message:
        "Our journey has always been about making a positive impact, transforming lives, and creating opportunities for people to regain their independence and confidence. Thank you for being a part of this mission.",
      imgSrc: DirectorPhoto2,
    },
    {
      id: 3,
      name: "Director 3",
      message:
        "We remain committed to innovation and excellence in every service we provide, ensuring that our clients receive the best solutions for their unique needs.",
      imgSrc: DirectorPhoto3,
    },
  ];

  const totalSlides = directorMessages.length;

  // Automatic slide change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="about-us">
      <Nav/>
      <div className="about-us__content">
        {/* Carousel Wrapper */}
        <div className="carousel">
          <div
            className="carousel__wrapper"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {directorMessages.map((director) => (
              <div className="carousel__slide" key={director.id}>
                {/* Left Side: Director's Photo */}
                <div className="about-us__image-wrap">
                  <img
                    src={director.imgSrc}
                    alt={director.name}
                    className="about-us__image"
                  />
                </div>
                {/* Right Side: Director's Message */}
                <div className="about-us__message-wrap">
                  <h2 className="about-us__title">
                    Message from {director.name}
                  </h2>
                  <p className="about-us__message">{director.message}</p>
                  <p className="about-us__signature">- {director.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
