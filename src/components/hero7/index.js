import React from 'react'
import thiepmung from '../../images/thiepmung.jpg'

const Hero7 = (props) => {
    return(
        <section className="static-hero-s3">
    <div className="hero-container">
        <div className="hero-inner">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="wpo-event-item">
                            <div className="wpo-event-text">
                                <img className="invitation-shadow" src={thiepmung}  alt={'thiep_mung'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </section>
    )
}

export default Hero7;