import React from 'react';
import ContactForm from '../ContactFrom'


const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-maps-and-flags"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Địa chỉ</h2>
                                            <p>Điện Dương - Điện Bàn - Quảng Nam</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email</h2>
                                            <p>thanhdev98@gmail.com</p>
                                            <p>nhubemo1999@gmail.com</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Điện thoại</h2>
                                            <p>+84 0765534228</p>
                                            <p>+84 0393654105</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        {/*<div className="wpo-contact-title">*/}
                        {/*    <h2>Bạn có câu hỏi nào cho buổi lễ của chúng mình không?</h2>*/}
                        {/*    <p>Cảm ơn sự quan tâm của bạn, chúc một ngày tốt lành</p>*/}
                        {/*</div>*/}
                        {/*<div className="wpo-contact-form-area">*/}
                        {/*    <ContactForm/>*/}
                        {/*</div>*/}
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.6028293057175!2d108.30325631407761!3d15.929865147390812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314211a40f259ff7%3A0x1710a8144a91e7f2!2sCafe%20Thanh%20T%C3%B9ng!5e0!3m2!1svi!2sus!4v1649942784129!5m2!1svi!2sus"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
