import React from 'react'
import Simg from '../../images/section-title2.png'


const SectionTitleS2 = (props) => {
    return(
        <div className="row">
            <div className="wpo-section-title-s2">
                <div className="section-title-simg">
                    <img src={Simg} alt=""/>
                </div>
                <h2>{props.MainTitle}</h2>
                <h5>Yêu một người là để nhìn thấy tất cả sự kỳ diệu của họ, và nhắc nhở họ về điều đó khi họ đã quên</h5>
                <div className="section-title-img">
                    <i className="fi flaticon-calendar"></i>
                    {/*<div className="round-ball"></div>*/}
                </div>
            </div>
        </div>
    )
}

export default SectionTitleS2;