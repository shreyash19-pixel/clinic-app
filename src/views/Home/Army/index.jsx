import React, { useState } from 'react'
import '../../../styles/Home/Army/index.scss';
import '../../../styles/_main.scss'
import RightArrow from '../../../assets/icon_rightArrow.svg';
import Form from '../../../components/Form';
import CGHS from '../../../assets/Home/Nav/CGHS.jpeg'
import ECHS from '../../../assets/Home/Nav/ECHS.jpeg'

const Army = () => {

    const [showModal, setShowModal] = useState(false)

    showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    const handleModal = () => {
        setShowModal(true)
    }

    return (
        <section className='army'>
            <div className="army__headingWrap">
                <p className='army__headingWrap-subheading'>Our Company is Committed <br className='isBelow768' /> Earning Your Trust By Providing The Expertise </p>
            </div>

            <ul className="army__descWrap">
                <li className='army__descWrap-list'>
                    <img className="army__descWrap-list-img" src={ECHS} alt="expertise" />
                    <h2 className='army__descWrap-list-heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='army__descWrap-list-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et. Perspiciatis, ad fugit! Quia debitis explicabo, nobis quaerat ipsa veritatis similique doloremque, accusamus assumenda inventore iusto animi! Accusantium, numquam aspernatur!</p>
                </li>
                <li className='army__descWrap-list'>
                    <img className="army__descWrap-list-img" src={CGHS} alt="expertise" />
                    <h2 className='army__descWrap-list-heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='army__descWrap-list-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et. Perspiciatis, ad fugit! Quia debitis explicabo, nobis quaerat ipsa veritatis similique doloremque, accusamus assumenda inventore iusto animi! Accusantium, numquam aspernatur!</p>
                </li>
            </ul>

            <button className='army__btn c-btn arrow-anim animHover' onClick={handleModal}>
                <span className='c-btn_text'>Book now</span>
                <img
                    className='c-btn_icon'
                    width={18}
                    height={18}
                    src={RightArrow}
                    alt='right-arrow'
                />
            </button>

            {showModal && (<div className="army__modalWrap">
                <Form visible={true}  setShowModal={setShowModal} />
            </div>)}
        </section>
    )
}

export default Army
