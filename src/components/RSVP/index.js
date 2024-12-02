import React, {Component, useState} from 'react'
import SectionTitle from '../SectionTitle'
import vec2 from '../../images/contact/2.png'
import cdcr from '../../images/cdcr.png'
import axios from "../../axios/axios";
import toast, { Toaster } from 'react-hot-toast';
import ReCAPTCHA from "react-google-recaptcha";

const ReviewForm = (props) => {
    const recaptchaRef = React.useRef();
    const [name, setName]=  useState('');
    const [review, setReview] =  useState('');
    const [errorName, setErrorName] =  useState('');
    const [errorReview, setErrorReview] =  useState('');

    const changeInputNameHandler = (e) => {
        setErrorName('');
        setName(e.target.value);
    }

    const changeInputReviewHandler = (e) => {
        setErrorReview('');
        setReview(e.target.value);
    }

    const onSubmitWithReCAPTCHA = async (e) => {
        e.preventDefault();
        let validData = true;

        const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if (name === '') {
            setErrorName("Vui lòng nhập tên");
            validData = false;
        }else if(format.test(name)){
            setErrorName("Vui lòng nhập tên không chứa ký tự đặc biệt");
            validData = false;
        }

        //validate review
        if (review === '') {
            setErrorReview("Vui lòng nhập lời chúc của bạn");
            validData = false;
        }// After null checking, check length
        else if (review.length < 8) {
            setErrorReview("Lời chúc của bạn không đủ dài");
            validData = false;
        }

        if (name !== '' && review !== '' && validData) {
            const reCaptchaToken = await recaptchaRef.current.executeAsync();
            const createReviewDto = {
                name,
                review,
                reCaptchaToken
            };

            axios.post('/reviews', createReviewDto )
                .then(res => {
                    setName('');
                    setReview('');
                    window.grecaptcha.reset();
                    toast.success('Lời chúc của bạn đã được gủi thành công!', {position:"top-right"});
                }).catch(error => {
                window.grecaptcha.reset();
                if(error.response.status === 429){
                    toast.error('Thao tác quá nhanh, vui lòng thử lại sau!', {position:"top-right"});
                }else{
                    toast.error('Có lỗi xảy ra trong quá trình xử lý, vui lòng thử lại sau!', {position:"top-right"});
                }
            });
        }
    }

    return (
        <form onSubmit={onSubmitWithReCAPTCHA} className="form">
            <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LeR770fAAAAAP6YUSK9LiXYLDPeDbfpyC5bcw_l"
                theme="light"
                badge="bottomleft"
            />
            <div className="row">
                <div>
                    <div className="form-field">
                        <input value={name} onChange={changeInputNameHandler} className="form-control" type="text" name="name" placeholder="Tên"/>
                        <p>{errorName ? errorName : ''}</p>
                    </div>
                </div>
                <div>
                    <div className="form-field">
                        <input onChange={changeInputReviewHandler} value={review} type="text" className="form-control" name="review" placeholder="Lời chúc của bạn"/>
                        <p>{errorReview ? errorReview : ''}</p>
                    </div>
                </div>
                <div className="submit-area">
                    <div className="form-submit">
                        <button type="submit" className="theme-btn-s3">Gửi</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

class RSVP extends Component {
    render() {
        return(
            <section className="wpo-contact-section section-padding" id="RSVP">
                <div className="container">
                    <div className="wpo-contact-section-wrapper">
                        <div className="wpo-contact-form-area">
                            <SectionTitle topTitle={'Chia sẻ của bạn'} MainTitle={'Gửi gắm tình cảm của bạn đến với chúng mình'}/>
                            <ReviewForm/>
                            <div className="border-style"></div>
                        </div>
                        <div className="vector-1">
                            <img src={cdcr} alt=""/>
                        </div>
                        <div className="vector-2">
                            <img src={vec2} alt=""/>
                        </div>
                    </div>
                </div>
                <Toaster/>
            </section>
        )
    }
}
export default RSVP;