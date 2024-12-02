import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import coupleImg1 from '../../images/couple/2.jpg'
import coupleImg2 from '../../images/couple/1.jpg'
import coupleImg3 from '../../images/couple/shape.png'
import coupleImg4 from '../../images/couple/3.jpg'
 
class CoupleSection extends Component {

    render() {
        return(
            <section className={`couple-section section-padding ${this.props.cClass}`} id="couple">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xs-12">
                            <div className="couple-area clearfix">
                                <div className="text-grid bride">
                                    <div className="couple-img">
                                        <img src={coupleImg1} alt=""/>
                                    </div>
                                    <h3>Daniel Oliver</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis give you com of system. </p>
                                    <div className="social">
                                        <ul>
                                            <li><Link to="/home3"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="middle-couple-pic">
                                    <img src={coupleImg2} alt=""/>
                                    <div className="frame-img"><img src={coupleImg3} alt=""/></div>
                                </div>
                                <div className="text-grid groom">
                                    <div className="couple-img">
                                        <img src={coupleImg4} alt=""/>
                                    </div>
                                    <h3>Sarah Margrate</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis give you com of system.</p>
                                    <div className="social">
                                        <ul>
                                            <li><Link to="/home3"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}
 
export default CoupleSection;