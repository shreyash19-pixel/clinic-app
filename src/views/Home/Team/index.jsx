import React, { useState } from "react";
import "../../../styles/Home/Team/index.scss";
import DoctorImg1 from "../../../assets/Home/Team/doctor-1.jpg";
import DoctorImg2 from "../../../assets/Home/Team/doctor-2.jpg";
import DoctorImg3 from "../../../assets/Home/Team/doctor-3.jpg";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Anumpma Sharma", designation: "General Manager", imgSrc: DoctorImg1 },
    { id: 2, name: "Viplav Tyagi", designation: "P&O Professionals", imgSrc: DoctorImg2 },
    { id: 3, name: "Radha Khanna", designation: "P&O Professionals", imgSrc: DoctorImg3 },
    { id: 4, name: "John Doe", designation: "Senior Specialist", imgSrc: DoctorImg1 },
    { id: 5, name: "Jane Smith", designation: "Technician", imgSrc: DoctorImg2 },
    { id: 6, name: "Michael Brown", designation: "Consultant", imgSrc: DoctorImg3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const nextSlide = () => {
    if (currentIndex < teamMembers.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="professional">
      <div className="professional__headingWrap">
        <h2 className="professional__headingWrap-heading">Team of Professionals</h2>
        <p className="professional__headingWrap-subheading">
          We are proud to be at the forefront of the prosthetics and orthotics industry in India, 
          with a growing network of clinics and service centers dedicated to providing exceptional care and support.
        </p>
      </div>
      <div className="professional__slider">
        <button
          className={`professional__btn professional__btn-prev ${currentIndex === 0 ? "disabled" : ""}`}
          onClick={prevSlide}
        >
          &lt;
        </button>
        <div className="professional__slider-wrapper">
          <div
            className="professional__slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {teamMembers.map((member) => (
              <div className="professional__peopleWrap-infoCard" key={member.id}>
                <img src={member.imgSrc} alt={member.name} className="professional__peopleWrap-infoCard-img" />
                <div className="professional__peopleWrap-infoCard-detailsWrap">
                  <h3 className="professional__peopleWrap-infoCard-detailsWrap-name">{member.name}</h3>
                  <p className="professional__peopleWrap-infoCard-detailsWrap-designation">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`professional__btn professional__btn-next ${
            currentIndex === teamMembers.length - cardsToShow ? "disabled" : ""
          }`}
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Team;
