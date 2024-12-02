import React , {useState} from "react";
import '../../css/feature-section.css'
import axios from "../../axios/axios";
import toast, { Toaster } from 'react-hot-toast';
import Button from 'react-bootstrap-button-loader';

const FeatureSection = (props) => {
    const [resetImageLoading, setResetImageLoading] = useState(false)

    const resetImage = async () => {
        setResetImageLoading(true);
        await axios.post('/images', {})
            .then(res => {
                if(res.status === 201){
                    toast.success('Xử lý thành công!', {position: "top-right"});
                }
                setResetImageLoading(false);
            }).catch(error => {
                setResetImageLoading(false);
                console.log(error)
                toast.error('Có lỗi xảy ra trong quá trình xử lý, vui lòng thử lại sau!', {position: "top-right"});
            });
    }
    return(
        <section className="sec-stat">
            <div className="border border-info title-stat mg-system">
                <h5 className="text-center" style={{background: 'antiquewhite'}}>Chức năng hệ thống</h5>

                <div className="btn-feature">
                    <Button type="button" className="btn btn-warning btn-mg-right"  onClick={resetImage} loading={resetImageLoading}>Reset Ảnh</Button>
                    {/*<button type="button" className="btn btn-warning btn-mg-right">Reset Ảnh</button>*/}
                </div>
            </div>
            <Toaster/>
        </section>
    )
}

export default FeatureSection;