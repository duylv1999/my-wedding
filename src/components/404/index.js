import React from 'react'
import {Link} from 'react-router-dom'
import erimg from '../../images/error-not-found.jpeg'


const Error = (props) => {
    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src={erimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Rất tiếc! Trang này không tồn tại.</h3>
                                <p>Không tìm thấy trang yêu cầu. Vui lòng thử lại với các liên kết bên dưới!</p>
                                <Link to="/" className="theme-btn-s3">Về trang chủ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;