import React, { useState, useEffect } from "react";
import "../../../styles/Home/Service/index.scss";
import ServicesImg from "../../../assets/Services/Hand Orthotics.jpeg";
import { RiMentalHealthLine } from "react-icons/ri";
import { RiMicroscopeLine } from "react-icons/ri";
import { RiHospitalLine } from "react-icons/ri";

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

  const [showModal, setShowModal] = useState(false)

  showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  const handleModal = () => {
    setShowModal(true)
  }


  return (
    <section className="service">
      <h2 className="service__heading">Our Special service</h2>
      <p className="service__subheading">
        We emphasize the importance of personalized care for our patients, delivering the most comfortable and functional customised prosthetic device possible to fit your needs.
      </p>
      <div class="service__grid">
        <div class="service__card">
          <span><RiMentalHealthLine />
          </span>
          <h4>MAT-SCAN TECHNOLOGY</h4>
          <p>We work with health professionals in various disciplines and with clients of all ages:
            Pediatric physiotherapists and children with disabilities Sports physicians and athletes
            Podiatrists with diabetic patients Orthopaedic surgeons in fracture clinics Doctors in
            hospital Intensive Care Units.</p>
        </div>
        <div class="service__card">
          <span><RiMicroscopeLine /></span>
          <h4>Pediatric Evaluation</h4>
          <p>We have a team of pediatricians, orthopaedic surgeons, rehab, amputation doctors, senior P&amp;O professionals,
            occupational therapists, physiotherapists and psychologists. Our organization is more focused/specialized
            regarding the cerebral palsy (CP) delayed mild stone children, CTEV, C.D.H., and congenital absence of upper
            and lower limbs, Perthes disease, Erb's palsy, corneal congenital disorder, etc.</p>
        </div>
        <div class="service__card">
          <span><RiHospitalLine /></span>
          <h4>ANAPLASTOLOGY</h4>
          <p>
            We emphasize the importance of personalized care for our patients,
            delivering the most comfortable and functional customised prosthetic device possible
            to fit your needs. Our experienced practitioners use current technologies and innovate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
