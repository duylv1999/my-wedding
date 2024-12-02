import React, { Component } from "react";
import Slider from "react-slick";
import Services from '../../api/service'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'


class ServiceSection extends Component {
    
    render() {
        var settings = {
            dots: false,
            arrows: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }

        return (

            <section className={`wpo-service-section ${this.props.pbClass}`}>
                <div className="container">
                    <div className="wpo-service-active owl-carousel">
                        <Slider {...settings}>
                            {Services.map((service, sitem) => (
                                <div className="wpo-service-item" key={sitem}>
                                    <div className="wpo-service-img">
                                        <img src={service.simg1} alt=""/>
                                        <div className="wpo-service-text">
                                            <div className="s-icon">
                                                <i className={`fi  ${service.fIcon1}`}></i>
                                            </div>
                                            <Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link>
                                        </div>
                                    </div>
                                </div>
                                ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceSection;