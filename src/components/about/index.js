import React from 'react'
import {Link} from 'react-router-dom'
import abimg from '../../images/about/1.png'
import abimg2 from '../../images/about/2.png'
import abimg3 from '../../images/about/shape.png'
import abimg4 from '../../images/about/thumb.png'
import Roll from 'react-reveal/Roll';


const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="wpo-about-section section-padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-12">
                    <div className="wpo-about-wrap">
                        <div className="wpo-about-item">
                            <div className="wpo-about-img">
                                <img src={abimg} alt=""/>
                            </div>
                        </div>
                        <div className="about-single-item">
                            <Roll left>
                                <div className="wpo-about-item-s2">
                                    <div className="wpo-about-img">
                                        <img src={abimg2} alt=""/>
                                    </div>
                                </div>
                            </Roll>
                        </div>
                        <div className="ab-shape">
                            <img src={abimg3} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-12">
                    <div className="wpo-about-text">
                        <div className="wpo-about-icon">
                            <div className="icon">
                                <img src={abimg4} alt=""/>
                            </div>
                        </div>
                        <div className="wpo-about-icon-content">
                            <h2>Planner of Your Perfect Wedding</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                that it has a more-or-less normal distribution of letters, as opposed to using
                            </p>
                            <p>
                                Content here, content here', making it look like readable English. Many desktop
                                publishing packages and web page editors now use Lorem Ipsum as their default
                                model text.</p>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn-s3" >More About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;