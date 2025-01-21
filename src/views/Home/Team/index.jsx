import React from 'react'
import '../../../styles/Home/Team/index.scss';
import DoctorImg1 from '../../../assets/Home/Team/doctor-1.jpg'
import DoctorImg2 from '../../../assets/Home/Team/doctor-2.jpg'
import DoctorImg3 from '../../../assets/Home/Team/doctor-3.jpg'

const Team = () => {
  return (
    <section className='team'>
        <div className="team__headingWrap">
            <h2 className='team__headingWrap-heading'>Team of Professionals</h2>
            <p className='team__headingWrap-subheading'>We are proud to be at the forefront of the prosthetics and orthotics industry in India, with a growing network of clinics and service centers dedicated to providing exceptional care and support.</p>
        </div>
        <div className="team__peopleWrap">
            <div className="team__peopleWrap-infoCard">
                <img src = {DoctorImg1} alt = "doctor" className='team__peopleWrap-infoCard-img' />
                <div className="team__peopleWrap-infoCard-detailsWrap">
                    <h3 className='team__peopleWrap-infoCard-detailsWrap-name'>Anumpma Sharma</h3>
                    <p className='team__peopleWrap-infoCard-detailsWrap-designation'>Genral Manager</p>
                </div>
            </div>

            <div className="team__peopleWrap-infoCard">
                <img src = {DoctorImg2} alt = "doctor" className='team__peopleWrap-infoCard-img' />
                <div className="team__peopleWrap-infoCard-detailsWrap">
                    <h3 className='team__peopleWrap-infoCard-detailsWrap-name'>Viplav Tyagi</h3>
                    <p className='team__peopleWrap-infoCard-detailsWrap-designation'>P&O Professionals</p>
                </div>
            </div>

            <div className="team__peopleWrap-infoCard">
                <img src = {DoctorImg3} alt = "doctor" className='team__peopleWrap-infoCard-img' />
                <div className="team__peopleWrap-infoCard-detailsWrap">
                    <h3 className='team__peopleWrap-infoCard-detailsWrap-name'>Radha Khanna</h3>
                    <p className='team__peopleWrap-infoCard-detailsWrap-designation'>P&O Professionals</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team
