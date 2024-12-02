import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, withRouter} from "react-router-dom";
import axios from "../../axios/axios";
import './style.scss';
import auth from "../../components/auth";
import { getToken } from "../../components/common/Common";
import toast, {Toaster} from "react-hot-toast";

const LoginPage = (props) => {
    useEffect(() => {
        if(auth.isAuthenticated() || getToken() != null) {
            props.history.push('/admin')
        }
    }, [])

    const [value, setValue] = useState({
        username: '',
        password: '',
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };


    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = (e) => {
        // const userRegex = /^user+.*/gm;
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();

            const username = value.username;
            const password = value.password;

            //code api here
            if (username !== '' && password !== '') {
                // const reCaptchaToken = await recaptchaRef.current.executeAsync();
                const loginUserDto = {
                    username,
                    password
                };

                axios.post('/auth/login', loginUserDto )
                    .then(res => {
                        setValue({
                            username: '',
                            password: '',
                            // remember: false
                        });
                        localStorage.setItem('userLogged', res.data.data.username);
                        localStorage.setItem('token', res.data.data.token);
                        auth.logged_in(() => {
                            props.history.push('/admin');
                        });
                        toast.success('Đăng nhập thành công', {position: "top-right"});
                    }).catch(error => {
                    if(error.response.status === 429) {
                        toast.error('Quá nhiều request. Vui lòng thử lại sau', {position: "top-right"});
                    }else{
                        toast.error('Đăng nhập thất bại', {position: "top-right"});
                    }
                });
            }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Đăng nhập</h2>
                <p className="text-danger">Chức năng này chỉ khả dụng với chủ trang web</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="username"
                                // value={value.username}
                                variant="outlined"
                                name="username"
                                label="Tên tài khoản"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('username', value.username, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                // value={value.password}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Mật khẩu"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit">Đăng nhập</Button>
                            </Grid>
                            <Link to="/">
                                <Grid className="formFooter">
                                    <Button fullWidth className="cBtnTheme" type="button">Trở về</Button>
                                </Grid>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div>
            </Grid>
            <Toaster/>
        </Grid>
    )
};

export default withRouter(LoginPage);