import React from 'react'
import {Link}  from 'react-router-dom'

const HeaderTopbar = () => {
    return(	
        <section className="topbar">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-7 col-md-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-email"></i>thanhdev98@gmail.com</li>
                                <li><i className="fi flaticon-phone-call"></i> +84 0765534228</li>
                                <li><i className="fi flaticon-maps-and-flags"></i> Đà Nẵng - Quảng Nam</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100022710300394"><i className="fi flaticon-facebook-app-symbol"></i></a></li>
                                <li><a target="_blank" href="https://twitter.com/ThanhNg71968564"><i className="fi flaticon-twitter"></i></a></li>
                                <li><a target="_blank" href="https://linkedin.com/in/thanh-nguyen-tam-81b140184"><i className="fi flaticon-linkedin"></i></a></li>
                                {/*<li><a target="_blank" href="/"><i className="fi flaticon-youtube"></i></a></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderTopbar;