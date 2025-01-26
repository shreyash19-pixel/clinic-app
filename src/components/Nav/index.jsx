import React from 'react'
import Brochure from '../../assets/pdf/dummy-pdf_2.pdf'
import Logo from '../../assets/logo.png';
import RightArrow from '../../assets/icon_rightArrow.svg';
import '../../styles/Nav/index.scss'

const Nav = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__left'>
                <img className='navbar__left-logo' src={Logo} alt='Logo' />
            </div>
            <ul className='navbar__mid'>
                <li className='navbar__mid-list'>
                    <a className='navbar__mid-list-links' href='/'>
                        Home
                    </a>
                    <a className='navbar__mid-list-links' href='/about-us'>
                        About us
                    </a>
                    <a className='navbar__mid-list-links' href='/services'>
                        Services
                    </a>
                    <a className='navbar__mid-list-links' href='/contact'>
                        Contact Us
                    </a>
                    <a className='navbar__mid-list-links' href='/photos'>
                        Photos
                    </a>
                    <a href={Brochure} className='navbar__mid-list-links' download>brochure</a>
                </li>
            </ul>
            <a href='#' className='c-btn arrow-anim animHover'>
                <span className='c-btn_text'>Contact us</span>
                <img
                    className='c-btn_icon'
                    width={18}
                    height={18}
                    src={RightArrow}
                    alt='right-arrow'
                />
            </a>
        </nav>
    )
}

export default Nav
