import React from 'react'
import {Link} from 'react-router-dom'

import ctaImg from '../../images/cta/1.png'

const CtaSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
      }
    return(
        <div className={`wpo-cta-section ${props.ctClass}`}>
            <div className="conatiner-fluid">
                <div className="wpo-cta-item">
                    <span><img src={ctaImg} alt=""/></span>
                    <h2>Lets Celebrate Your Love</h2>
                    <Link onClick={ClickHandler} className="theme-btn-s2" to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>

    )
}

export default CtaSection;