import React from 'react'
import Photo1 from '../../assets/Photos/photo1.jpeg'
import Photo2 from '../../assets/Photos/photo2.jpeg'
import Photo3 from '../../assets/Photos/photo3.jpeg'
import Photo4 from '../../assets/Photos/photo4.jpeg'
import Photo5 from '../../assets/Photos/photo5.jpeg'

import '../../styles/Photos/index.scss'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const Photos = () => {
    return (
        <div>
            <Nav />
            <section className='photos'>
                <img src={Photo1} alt="photos" className='photos__img' />
                <img src={Photo2} alt="photos" className='photos__img' />
                <img src={Photo3} alt="photos" className='photos__img' />
                <img src={Photo4} alt="photos" className='photos__img' />
                <img src={Photo5} alt="photos" className='photos__img' />
            </section>
            <Footer />
        </div>
    )
}

export default Photos
