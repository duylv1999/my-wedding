import React from 'react'

import SectionTitleS2 from '../SectionTitleS2'

import shape from '../../images/story/shape.png'

import dating from '../../images/story/dating.jpg'

import engagement from '../../images/story/engagement.jpg'

import wedding_announcement from '../../images/story/wedding_announcement.jpg'

import first_meet from '../../images/story/first_meet.jpg'

const StorySection = (props) => {
    return(
        <section className="story-section section-padding" id="story">
            <div className="container">
                <SectionTitleS2 MainTitle={'Câu chuyện tình yêu của chúng mình'}/>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="story-timeline">
                            <div className="round-shape"></div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="story-text right-align-text">
                                        <h3>Lần đầu gặp gỡ</h3>
                                        <span className="date">From 2017</span>
                                        <p style={{textAlign: "justify"}}>Bắt nguồn từ niềm đam mê sáo trúc, chúng mình đã gặp nhau và có nhiều khoảnh khắc vui vẻ trong suốt một thời gian dài</p>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder">
                                        <img src={first_meet} alt="" className="img img-responsive"/>
                                        <div className="story-shape-img">
                                            <img src={shape} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder right-align-text left-site">
                                        <img src={dating} alt="" className="img img-responsive"/>
                                        <div className="story-shape-img">
                                            <img src={shape} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"/>
                                    </span>
                                    <div className="story-text">
                                        <h3>Những buổi hẹn hò đằm thắm</h3>
                                        {/*<span className="date">24-12-2018</span>*/}
                                        <p style={{textAlign: "justify"}}>Tụi mình đã có những buổi hẹn hò thật tuyệt vời, nắm tay nhau đi khắp mọi nơi với sự hạnh phúc vô bờ bến.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12 text-holder right-heart">
                                    <span className="heart">
                                        <i className="fi flaticon-calendar"/>
                                    </span>
                                    <div className="story-text right-align-text">
                                        <h3>Đính hôn</h3>
                                        <span className="date">19-04-2022</span>
                                        <p style={{textAlign: "justify"}}>Lễ đính hôn diễn ra trong không khí đầm ấm với sự góp mặt của quan viên hai họ, minh chứng cho tình yêu đôi lứa</p>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder right-align-text">
                                        <img src={engagement} alt="" className="img img-responsive" />
                                        <div className="story-shape-img">
                                            <img src={shape} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder video-holder left-site">
                                        <img src={wedding_announcement} alt="" className="img img-responsive"/>
                                        <div className="story-shape-img">
                                            <img src={shape} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-dove"/>
                                    </span>
                                    <div className="story-text">
                                        <h3>Về chung một nhà</h3>
                                        <span className="date">18-07-2022</span>
                                        <p style={{textAlign: "justify"}}>Ngày chúng mình chung đôi, sánh bước trên lễ đường và dìu nhau về tổ ấm đong đầy hạnh phúc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-wedding-rings"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection;