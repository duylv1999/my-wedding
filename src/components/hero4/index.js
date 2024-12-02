import React from 'react'
import { Link } from 'react-router-dom'
import hImg1 from '../../images/slider/shape5.png'
import hImg2 from '../../images/slider/couple.png'
import hImg3 from '../../images/slider/shape6.png'
import hImg4 from '../../images/slider/flower1.png'
import hImg5 from '../../images/slider/flower2.png'
import coupleImg from '../../images/couple-removebg.png'


const Hero4 = (props) => {
    return(
        <section className="static-hero-s2">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="text-grid bride">
                                <div className="couple-img">
                                    <img src={hImg1} alt=""/>
                                </div>
                                <h3>Nguyễn Tam Thành</h3>
                                <p>Một chàng trai đầy nhiệt huyết và đam mê tuổi trẻ. Đem lòng si mê cô gái Tam Kỳ </p>
                                <div className="social">
                                    <ul>
                                        <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100022710300394"><i className="ti-facebook"></i></a></li>
                                        <li><Link to="/#"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="middle-couple-pic">
                                <img src={coupleImg} alt="couple" style={{marginLeft: "40px"}}/>
                            </div>
                            <div className="text-grid groom">
                                <div className="couple-img">
                                    <img src={hImg3} alt=""/>
                                </div>
                                <h3>Nguyễn Thị Quỳnh Như</h3>
                                <p>Một cô gái xinh xắn, dễ thương và dạt dào tình cảm. Đem trọn trái tim trao cho chàng trai si tình </p>
                                <div className="social">
                                    <ul>
                                        <li><a target="_blank" href="https://www.facebook.com/kyttymup.nguyen"><i className="ti-facebook"></i></a></li>
                                        <li><Link to="/#"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flower-shape-1"><img src={hImg4} alt=""/></div>
            <div className="flower-shape-2"><img src={hImg5} alt=""/></div>
        </section>
    )
}

export default Hero4;