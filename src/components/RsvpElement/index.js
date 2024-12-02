import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from "react-router-dom";
import axios from "../../axios/axios";
import toast from "react-hot-toast";

const RsvpElement = (props) => {
    let history = useHistory();
    const { id } = useParams();
    const [customer, setCustomer] = useState({name: ''});

    useEffect(() => {
        axios.get(`customers/${id}`).then((response) => {
            if (response.status === 200) {
                setCustomer(response.data.data);
                if(response.data.data.status !== 'WaitingConfirm'){
                    history.push('/');
                }
            }
        }).catch(error => {
            console.error(error);
            history.push('/404');
        });
    }, [])

    const updateRsvp = (status) => {
        axios.patch(`/customers/${id}`, {'status': status})
            .then((response) => {
                if (response.status === 204) {
                    toast.success('Cảm ơn phản hồi của bạn!', {position: "top-right"});
                    history.push('/');
                }
            }).catch(error => {
            console.error(error);
            toast.error('Gửi phản hồi thất bại', {position: "top-right"});
        });
    }

    return(
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h4>Xin chào {customer.name}</h4>
                                        <p>Cảm ơn bạn đã quan tâm đến lễ cưới của tụi mình</p>
                                        <ul>
                                            <li style={{textAlign: "center"}}> Bạn có thể tham gia lễ cưới của chúng mình được không. Hãy cho tụi mình biết nhé 😍<br/></li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6 col-12">
                                                        <button type="button" className="btn btn-success text-white" onClick={() => updateRsvp('Join')}>
                                                            Có thể tham gia 🤩
                                                        </button>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-12">
                                                        <button type="button" className="btn btn-danger text-white" onClick={() => updateRsvp('NotJoin')}>
                                                            Không thể tham gia 😅
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpElement;