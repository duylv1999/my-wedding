import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-4.jpg'
import hero2 from '../../images/slider/slide-5.jpg'
import hero3 from '../../images/slider/slide-6.jpg'

import heros1 from '../../images/slider/shape3.png'
import heros2 from '../../images/slider/shape4.png'



class Hero3 extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="wpo-hero-slider wpo-hero-slider-s2">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <Slider {...settings}>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>Sarah & Daniel</h2>
                                            </div>
                                            <div className="slide-text">
                                                <p>We Are Getting Married Nov 22,2021</p>
                                            </div>
                                            <div className="border-1"></div>
                                            <div className="border-2"></div>
                                            <div className="border-3"></div>
                                            <div className="border-4"></div>
                                            <div className="s-img-1"><img src={heros1} alt="" /></div>
                                            <div className="s-img-2"><img src={heros2} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>Sarah & Daniel</h2>
                                            </div>
                                            <div className="slide-text">
                                                <p>We Are Getting Married Nov 22,2021</p>
                                            </div>
                                            <div className="border-1"></div>
                                            <div className="border-2"></div>
                                            <div className="border-3"></div>
                                            <div className="border-4"></div>
                                            <div className="s-img-1"><img src={heros1} alt="" /></div>
                                            <div className="s-img-2"><img src={heros2} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>Sarah & Daniel</h2>
                                            </div>
                                            <div className="slide-text">
                                                <p>We Are Getting Married Nov 22,2021</p>
                                            </div>
                                            <div className="border-1"></div>
                                            <div className="border-2"></div>
                                            <div className="border-3"></div>
                                            <div className="border-4"></div>
                                            <div className="s-img-1"><img src={heros1} alt="" /></div>
                                            <div className="s-img-2"><img src={heros2} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero3;