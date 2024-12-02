import React, {useEffect, useState} from 'react'
import {Space, Table, Tag} from "antd";
import axios from "../../axios/axios";
import '../../css/review-section.css'
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import Button from 'react-bootstrap-button-loader';
import toast from "react-hot-toast";

const ReviewSection = (props) => {
    const [reviews, setReviews] = useState([]);
    const [acceptLoading, setAcceptLoading] = useState(false)
    const [rejectLoading, setRejectLoading] = useState(false)
    const [selectedId, setSelectedId] = useState('')

    //accept review
    const acceptReview = (_id) => {
        setSelectedId(_id);
        setAcceptLoading(true);
        axios.patch(`/reviews/${_id}`, {'status': 'Alive'})
            .then((response) => {
                setAcceptLoading(false);
                setSelectedId('');
                if (response.status === 204) {
                    toast.success('Xử lý thành công!', {position: "top-right"});
                    updateReviewList(_id, 'Alive');
                }
            }).catch(error => {
            console.error(error);
            setSelectedId('');
            setAcceptLoading(false);
            toast.error('xử lý thất bại', {position: "top-right"});
        });
    }

//cancel review
    const cancelReview = (_id) => {
        setSelectedId(_id);
        setRejectLoading(true);
        axios.patch(`/reviews/${_id}`, {'status': 'Delete'})
            .then((response) => {
                setRejectLoading(false);
                setSelectedId('');
                if (response.status === 204) {
                    toast.success('Xử lý thành công!', {position: "top-right"});
                    updateReviewList(_id, 'Delete');
                }
            }).catch(error => {
            console.error(error);
            setSelectedId('');
            setRejectLoading(false);
            toast.error('xử lý thất bại', {position: "top-right"});
        });
    }
    const columns = [
        {
            title: 'Tên người gửi',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Lời chúc',
            dataIndex: 'review',
            key: 'review',
        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: tag => (
                <>
                    {
                        tag === 'PendingConfirm' ?
                            <Tag icon={<ExclamationCircleOutlined/>} color="warning">Chờ xác nhận</Tag> :
                            <>
                                {tag === 'Alive' ?
                                    <Tag icon={<CheckCircleOutlined/>} color="success">Đã xác nhận</Tag> :
                                    <Tag icon={<CloseCircleOutlined/>} color="error">Đã huỷ</Tag>
                                }
                            </>
                    }
                </>
            ),
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    {
                        record.status === 'PendingConfirm' ?
                            <>
                                <Button type="button" loading={acceptLoading && selectedId === record._id}
                                        className="btn btn-primary"
                                        onClick={() => acceptReview(record._id)} id={record._id}>Xác nhận</Button>
                                <Button type="button" loading={rejectLoading && selectedId === record._id}
                                        className="btn btn-danger"
                                        onClick={() => cancelReview(record._id)} id={record._id}>Huỷ</Button>
                            </> : ''
                    }
                </Space>
            ),
        },
    ];

    //get all review
    useEffect(() => {
        axios.get('/reviews').then((response) => {
            if (response.status === 200) {
                setReviews(response.data.data);
            }
        }).catch(error => {
            console.error(error);
        });
    }, [])

    const updateReviewList = (_id, status) => {
        const newList = reviews.map((item) => {
            if (item._id === _id) {
                const updatedItem = {
                    ...item,
                    status: status,
                };
                return updatedItem;
            }
            return item;
        });
        setReviews(newList);
    }

    return (
        <section>
            <div className="table-section border border-info container">
                <h5 className="text-center" style={{background: 'antiquewhite'}}>Lời chúc của khách</h5>
                <Table columns={columns} dataSource={reviews} bordered={true} size={'middle'} rowKey="_id"
                       pagination={{pageSize: 4}}/>
            </div>
        </section>
    )
}

export default ReviewSection;