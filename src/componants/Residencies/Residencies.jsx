import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'

const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                <Swiper>
                    {
                        data.map((card, i) => {
                            <SwiperSlide key={i}>
                                <div className="r-card">
                                    <img src={card.image} alt="home" />

                                    <span className="secondaryText r-price">
                                        <span>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                </div>
                            </SwiperSlide>
                        })
                    }
                    <img src="" alt="sss" />
                </Swiper>
                <img src="" alt="img__" />
            </div>
        </section>
    )
};

export default Residencies