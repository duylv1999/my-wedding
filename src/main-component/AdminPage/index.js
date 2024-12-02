import React from 'react';
import 'antd/dist/antd.css';
import ReviewSection from "../../components/ReviewSection";
import auth from "../../components/auth";
import { useHistory } from "react-router-dom";
import FeatureSection from "../../components/FeatureSection";
import RSPVSection from "../../components/RSPVSection";

const AdminPage = () => {
    let history = useHistory();
    const logOut = (props) => {
        auth.logged_out(() => {
            history.push('/')
        });
    }
    return (
        <>
            <div className="row" style={{margin: '0px'}}>
                <div className="col-4"></div>
                <h1 className="text-center col-4">Quản lý ứng dụng</h1>
                <div className="col-4 text-end" style={{padding: '5px 2px 0 0'}}>
                    <button className="btn btn-secondary" onClick={logOut}>Đăng xuất</button>
                </div>
            </div>
            <ReviewSection/>
            <RSPVSection/>
            <FeatureSection/>
        </>
    )
};

export default AdminPage;