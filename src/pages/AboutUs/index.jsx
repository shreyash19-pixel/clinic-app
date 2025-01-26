import React, { useState, useEffect } from "react";
import "../../styles/AboutUs/index.scss"; // Custom styles for the About Us page
import DirectorPhoto1 from "../../assets/Home/Director/about.jpg"; // Replace with actual photos
import DirectorPhoto2 from "../../assets/Home/Director/about.jpg";
import DirectorPhoto3 from "../../assets/Home/Director/about.jpg";
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const directorMessages = [
    {
      id: 1,
      Title: "Welcome to P&O International Pvt. Ltd.",
      message:
        "Our practice was born of the simple, yet profound, belief that everyone deserves the chance to move freely and live fully. For nearly two decades, we have remained devoted to furthering prosthetics and orthotics. Our commitment is realized through high state-of-the-art technology combined with our skilful practitioners and attention to the holism of care. Today, advanced prosthetic solutions create possibilities for talented athletes to overcome and take the top step, winning those gold medals in the Para Olympics. We celebrate will and achieved success.",
      imgSrc: DirectorPhoto1,
      name: "Dr. Neeraj Saxena",
    },
    {
      id: 2,
      Title: "Approach & Innovation Technology.",
      message:
        "The world of prosthetics and orthotics is rapidly evolving, with new technologies emerging that enhance both functionality and comfort. From advanced materials to smart technology like I-POP (Immediate post-operative prosthesis), Cosmetic Restoration, Facial Mask, Osseointegration and we are evolving into AI technologies (artificial intelligence) and immediate socket technology through 3D printing, Flat foot corrective Insoles after scanning, Robotic Hands. Our team of certified prosthetists and orthotists works closely with each client to create customized solutions that align with their lifestyle and goals. We emphasize collaboration, listening carefully to our clients’ needs, and involving them in every step of the process.",
      imgSrc: DirectorPhoto2,
      name: "Dr. Neeraj Saxena",
    },
    {
      id: 3,
      Title: "Connect with US.",
      message:
        "Thanks for visiting our site. Please feel free to surf through our blog, articles, and testimonials to get ideas from those who have trod this way before you. Your journey means a lot to us, and we're here to guide you throughout your entire process, step for step. Let's grow together to achieve your goals and better your life.",
      imgSrc: DirectorPhoto3,
      name: "Dr. Neeraj Saxena",
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
    <div>
      <Nav />
      <section className="about-us">
        <div className="about-us__context">
          <h1 className="about-us__context_title">
            Welcome to P&O International
          </h1>
          <p className="about-us__context_subtitle">
            Enhance lives with innovation, compassion, and excellence in
            prosthetics and orthotics- that's the commitment P&O International
            offers. The company was formed to be the market leader for prosthetic
            design, fabrication, and fitting. In this business, we assist clients
            in returning to their lifestyles and independence as confidently as
            possible through custom-made prosthetic limbs and orthotic solutions.
            Enhance lives with innovation, compassion, and excellence in
            prosthetics and orthotics- that's the commitment P&O International
            offers. The company was formed to be the market leader for prosthetic
            design, fabrication, and fitting. In this business, we assist clients
            in returning to their lifestyles and independence as confidently as
            possible through custom-made prosthetic limbs and orthotic solutions.
            But at P&O International, we believe that providing physical solutions
            is only part of our mission. We understand the emotional and
            psychological impact of limb loss or physical disability, which is why
            we offer holistic support, including counseling, rehabilitation, and
            peer support programs. Our goal is not just to restore mobility but to
            empower our clients to lead full and active lives. Our range of
            services begins from fitting orthoses that are simpler in nature,
            right down to complex prosthetic systems designed from scratch for
            individuals. We do take pride in being able to help in almost all
            complicated cases, be it a hip disarticulation prosthesis or
            hemipelvectomy prosthesis. From a perspective of quality and
            perfection, each of the products made would face tough tests for their
            efficacy and stability. We are proud to be at the forefront of the
            prosthetics and orthotics industry in India, with a growing network of
            clinics and service centers dedicated to providing exceptional care
            and support. Whether you are seeking a prosthetic limb, an orthotic
            brace, or cosmetic restoration, P&O International is here to help you
            every step of the way.
          </p>
        </div>
        <div className="about-us__content">
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
                    <h2 className="about-us__title">{director.Title}</h2>
                    <p className="about-us__message">{director.message}</p>
                    <p className="about-us__signature">- {director.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="professional">
          <div className="professional__headingWrap">
            <h2 className="professional__headingWrap-heading">
              Team of Professionals
            </h2>
            <p className="professional__headingWrap-subheading">
              We are proud to be at the forefront of the prosthetics and orthotics
              industry in India, with a growing network of clinics and service
              centers dedicated to providing exceptional care and support.
            </p>
          </div>
          <div className="professional__peopleWrap">
            <div className="professional__peopleWrap-infoCard">
              <img
                src={DirectorPhoto2}
                alt="doctor"
                className="professional__peopleWrap-infoCard-img"
              />
              <div className="professional__peopleWrap-infoCard-detailsWrap">
                <h3 className="professional__peopleWrap-infoCard-detailsWrap-name">
                  Anumpma Sharma
                </h3>
                <p className="professional__peopleWrap-infoCard-detailsWrap-designation">
                  Genral Manager
                </p>
              </div>
            </div>

            <div className="professional__peopleWrap-infoCard">
              <img
                src={DirectorPhoto2}
                alt="doctor"
                className="professional__peopleWrap-infoCard-img"
              />
              <div className="professional__peopleWrap-infoCard-detailsWrap">
                <h3 className="professional__peopleWrap-infoCard-detailsWrap-name">
                  Viplav Tyagi
                </h3>
                <p className="professional__peopleWrap-infoCard-detailsWrap-designation">
                  P&O Professionals
                </p>
              </div>
            </div>

            <div className="professional__peopleWrap-infoCard">
              <img
                src={DirectorPhoto2}
                alt="doctor"
                className="professional__peopleWrap-infoCard-img"
              />
              <div className="professional__peopleWrap-infoCard-detailsWrap">
                <h3 className="professional__peopleWrap-infoCard-detailsWrap-name">
                  Radha Khanna
                </h3>
                <p className="professional__peopleWrap-infoCard-detailsWrap-designation">
                  P&O Professionals
                </p>
              </div>
            </div>

            <div className="professional__peopleWrap-infoCard">
              <img
                src={DirectorPhoto2}
                alt="doctor"
                className="professional__peopleWrap-infoCard-img"
              />
              <div className="professional__peopleWrap-infoCard-detailsWrap">
                <h3 className="professional__peopleWrap-infoCard-detailsWrap-name">
                  Radha Khanna
                </h3>
                <p className="professional__peopleWrap-infoCard-detailsWrap-designation">
                  P&O Professionals
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
