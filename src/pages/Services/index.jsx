import React, {useState} from "react";
import "../../styles/Services/index.scss";
import ServicesImg from "../../assets/Services/lowerLimb.jpeg";
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import '../../styles/Home/Army/index.scss'

const Services = () => {
  // Array of services data

   const [showModal, setShowModal] = useState(false)
  
    showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  
    const handleModal = () => {
      setShowModal(true)
    }
  const services = [
    {
      id: 1,
      name: "Prosthesis for Lower Limb",
      description:
        "Losing a limb can be a life-changing experience, but it shouldn't limit your ability to live a fulfilling and active life. At P&O International, we commit ourselves to providing advanced lower limb prosthetic solutions to empower individuals to regain mobility, independence, and confidence",
      imgSrc: ServicesImg,
    },
    {
      id: 2,
      name: "Advanced Prosthetics",
      description:
        "The loss of an upper limb can be a real challenge, challenging both daily activities and the quality of life. P&O International is committed to offering advanced solutions for upper limb prosthetics in terms of functionality, independence, and confidence.",
      imgSrc: ServicesImg,
    },
    {
      id: 3,
      name: "Cosmetic Restoration",
      description:
        "At P&O International, we understand the profound impact that physical appearance can have on a person’s self-esteem and overall well-being. Our Cosmetic Restoration service is dedicated to restoring the natural look and function of body parts that may have been lost due to injury, illness, or congenital conditions.",
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
    <div>
      <Nav />
      <section className="services">
        <h1 className="services__title">Our Services</h1>
        <p className="services__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus, placeat cumque quasi qui, saepe eius incidunt modi repellendus consequuntur blanditiis expedita ipsa perferendis voluptatum veritatis sapiente, fugit quos tenetur.
        </p>
        <div className="services__content">
          {services.map((service) => (
            <div className="services__card" key={service.id}>
              <div className="services__card-image">
                <img
                  src={service.imgSrc}
                  alt={service.name}
                  className="services__card-img"
                />
              </div>
              <div className="services__card-description">
                <h3 className="services__card-description-title">{service.name}</h3>
                <p className="services__card-description-text">{service.description}</p>
                <button className="services__card-description-btn" onClick={handleModal}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
        {showModal && (<div className="services__modalWrap">
          <Form visible={true} setShowModal={setShowModal} />
        </div>)}
      </section>
      <Footer />
     
    </div>
  );
};

export default Services;
