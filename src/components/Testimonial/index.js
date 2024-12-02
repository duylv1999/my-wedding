import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial_avatar from '../../images/testimonial/testimonial_avatar.jpg'
import tsImg2 from '../../images/testimonial/shape.png'
import tsImg3 from '../../images/testimonial/shape2.png'
import axios from "../../axios/axios";

class Testimonial extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        axios.get('/reviews/accepted').then((response) => {
            if(response.data.data.length !== 0) {
                this.setState({ reviews: response.data.data });
            }
        }).catch(error => {
            console.error('Error', error);
        });
    }
    
    render() {
        var settings = {
            dots: true,
            arrows: false,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
        };

        return (
            <section className="wpo-testimonials-section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="wpo-testimonials-img" style={{marginLeft: '80px'}}>
                                <img src={testimonial_avatar} alt="testimonial_avatar"/>
                                <div className="wpo-testimonials-img-shape">
                                    <img src={tsImg2} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1 col-12">
                            <div className="wpo-testimonials-wrap">
                                <h2  style={{color: 'pink'}}>Lời chúc của khách</h2>
                                <div className="wpo-testimonials-active owl-carousel">
                                    <Slider {...settings}>
                                        {this.state.reviews.map((tstml, tsm) => (
                                            <div className="wpo-testimonials-item" key={tsm}>
                                                <p>{tstml.review}</p>
                                                <div className="wpo-testimonial-info">
                                                    {/*<div className="wpo-testimonial-info-img">*/}
                                                    {/*    <img src={tstml.tstImg} alt=""/>*/}
                                                    {/*</div>*/}
                                                    <div className="wpo-testimonial-info-text">
                                                        <h5>Bạn: {tstml.name}</h5>
                                                        <span>Thời gian: { (new Date(tstml.create_date)).toLocaleDateString()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-testimonials-shape">
                    <img src={tsImg3} alt=""/>
                </div>
            </section>
        )
    }
}

export default Testimonial;