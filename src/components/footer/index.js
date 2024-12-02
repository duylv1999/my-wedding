import React from 'react'
import {Link}  from 'react-router-dom'
import Projects from '../../api/projects'
import Logo from '../../images/logo.png'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src={Logo} alt="logo"/>
                            </div>
                            <p style={{textAlign: "justify"}}>Cảm ơn bạn đã ghé thăm trang web lưu giữ đầy kỷ niệm ngọt ngào của chúng mình</p>
                            <p style={{textAlign: "justify"}}>Nếu bạn không thể đến tham dự ngày vui của chúng mình. Bạn có thể chúc mừng và gửi gắm tình cảm của bạn thông qua:</p>
                            <p><b>BIDV: 56010001518687 Nguyen Tam Thanh</b></p>
                            <p><b>Techcombank: 19037252623010 Nguyen Thi Quynh Nhu</b></p>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100022710300394">
                                        <i className="ti-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://twitter.com/ThanhNg71968564">
                                        <i className="ti-twitter-alt"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-2  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Danh mục</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/album/engagement_ceremony">Lễ đính hôn</Link></li>
                                <li><Link onClick={ClickHandler} to="/album/wedding_ceremony">Lễ cưới</Link></li>
                                <li><Link onClick={ClickHandler} to="/album/pre_wedding">Ảnh cưới</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Liên hệ</Link></li>
                                <li><Link onClick={ClickHandler} to="/invitation">Thiệp mời</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Liên hệ</h3>
                            </div>
                            <div className="contact-ft">
                                <p style={{textAlign: "justify"}}>Bạn có câu hỏi nào cho buổi lễ của chúng mình không?</p>
                                <ul>
                                    <li><i className="fi flaticon-email"></i>thanhdev98@gmail.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+84 0765534228</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Hình ảnh tiêu biểu</h3>
                            </div>
                            <ul className="d-flex">
                                {Projects.slice(0,6).map((project, pitem) => (
                                    <li key={pitem}><img src={project.pimg1} alt=""/></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy;Copyright ThanhDeveloper 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;