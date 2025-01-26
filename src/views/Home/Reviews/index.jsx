import React from 'react'
import '../../../styles/Home/Reviews/index.scss'
import Review from '../../../assets/Home/Reviews/review-1.jpg'

const Reviews = () => {
  return (
    <section className='reviews'>
      <h2 className='reviews__heading'>Customer Reviews</h2>
      <div className="reviews__cardWrap">
        <div className="reviews__cardWrap-card">
          <img src={Review} className='reviews__cardWrap-card-img' alt="review" />
          <h3 className='reviews__cardWrap-card-name'>Michale</h3>
          <p className='reviews__cardWrap-card-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique inventore qui omnis corrupti quis adipisci aperiam ducimus reiciendis odio sunt praesentium minus hic iusto, unde quae quod tenetur maiores!</p>
        </div>

        <div className="reviews__cardWrap-card">
          <img src={Review} className='reviews__cardWrap-card-img' alt="review" />
          <h3 className='reviews__cardWrap-card-name'>Michale</h3>
          <p className='reviews__cardWrap-card-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique inventore qui omnis corrupti quis adipisci aperiam ducimus reiciendis odio sunt praesentium minus hic iusto, unde quae quod tenetur maiores!</p>
        </div>

        <div className="reviews__cardWrap-card">
          <img src={Review} className='reviews__cardWrap-card-img' alt="review" />
          <h3 className='reviews__cardWrap-card-name'>Michale</h3>
          <p className='reviews__cardWrap-card-review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut similique inventore qui omnis corrupti quis adipisci aperiam ducimus reiciendis odio sunt praesentium minus hic iusto, unde quae quod tenetur maiores!</p>
        </div>
      </div>
    </section>
  )
}


export default Reviews