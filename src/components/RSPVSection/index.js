import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import {Select, Space, Table, Tag} from 'antd';
import '../../css/wedding-section.css';
import {Button, Form, Modal} from 'react-bootstrap';
import axios from "../../axios/axios";
import toast from "react-hot-toast";
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";

const {Option} = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const columns = [
    {
        title: 'Tên khách mời',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Nhà',
        dataIndex: 'from',
        key: 'from',
        render: text => (
            <>
                {
                    text === 'Man' ? <a>Nhà trai</a> : <a>Nhà gái</a>
                }
            </>
        )
    },
    {
        title: 'Loại khách mời',
        dataIndex: 'customer_type',
        key: 'customer_type',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Trạng thái',
        key: 'status',
        dataIndex: 'status',
        render: tag => (
            <>
                {
                    tag === 'WaitingConfirm' ?
                        <Tag color="warning" key={tag}>
                            Chờ xác nhận
                        </Tag> :
                        <>
                            {tag === 'Join' ?
                                <Tag color="success" key={tag}>
                                    Tham gia
                                </Tag> :
                                <Tag color="error" key={tag}>
                                    Không tham gia
                                </Tag>
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
                <button className="btn btn-info" onClick={() => {navigator.clipboard.writeText("https://nhuthanhwedding.com/rsvp/customer/" + record._id)}}>Copy URL</button>
            </Space>
        ),
    },
];

const RSVPSection = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [refreshKey, setRefreshKey] = useState(0);
    const [customers, setCustomers] = useState([]);
    const [name, setName] = useState('');
    const [from, setFrom] = useState('Man');
    const [customer_type, setCustomerType] = useState('Friend');
    const [waitingCustomer, setWaitingCustomer] = useState(0);
    const [joinCustomer, setJoinCustomer] = useState(0);
    const [notJoinCustomer, setNotJoinCustomer] = useState(0);
    const [totalCustomer, setTotalCustomer] = useState(0);

    //get all customer
    useEffect(() => {
        //get all
        axios.get('/customers').then((response) => {
            if (response.status === 200) {
                setCustomers(response.data.data);
                setTotalCustomer(response.data.data.length);
            }
        }).catch(error => {
            console.error(error);
        });

        //aggregate customers
        axios.get('/customers/aggregate').then((response) => {
            if (response.status === 200) {
                const waitingCustomer =  response.data.data.find(item => item._id === 'WaitingConfirm');
                const joinCustomer =  response.data.data.find(item => item._id === 'Join');
                const notJoinCustomer =  response.data.data.find(item => item._id === 'NotJoin');
                if(waitingCustomer) setWaitingCustomer(waitingCustomer.count);
                if(joinCustomer) setJoinCustomer(joinCustomer.count);
                if(notJoinCustomer) setNotJoinCustomer(notJoinCustomer.count);
            }
        }).catch(error => {
            console.error(error);
        });
    }, [refreshKey])

    //submit from and handle
    const nameChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = () =>{
        const createCustomerDto = {
            name,
            from,
            customer_type
        };
        axios.post('/customers', createCustomerDto )
            .then(res => {
                if(res.status === 200){
                    setCustomers(customers => [ res.data.data, ...customers]);
                    setShow(false);
                    setRefreshKey(oldKey => oldKey +1)
                    toast.success('thêm thành công!', {position:"top-right"});
                }
            }).catch(error => {
                console.log(error);
                toast.error('Có lỗi xảy ra trong quá trình xử lý, vui lòng thử lại sau!', {position:"top-right"});
        });
    }

    return (
        <>
            <section className="sec-stat">
                <div className="border border-info title-stat ">
                    <h5 className="text-center " style={{background: 'antiquewhite'}}>Thống kê danh sách khách mời</h5>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 ">

                            <div className="border border-secondary sum-stat">
                                <b>Thống kê: </b>
                                <p className="style-p">Tổng cộng: {totalCustomer} khách</p>
                                <p className="style-p">Chưa xác nhận: {waitingCustomer} khách</p>
                                <p className="style-p">Tham dự: {joinCustomer} khách</p>
                                <p className="style-p">Không tham dự: {notJoinCustomer} khách</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9 ">
                            <div className="table-section border border-secondary container">
                                <Table columns={columns} dataSource={customers} bordered={true} size={'middle'} rowKey="_id"
                                       pagination={{pageSize: 6}}/>
                            </div>
                        </div>
                    </div>
                    <div className="btn-action">
                        <button className="btn btn-success" onClick={handleShow}>Thêm</button>
                        &nbsp;
                        <button className="btn btn-warning">Xuất excel</button>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Tên khách mời</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nguyễn Văn A"
                                    autoFocus
                                    onChange={nameChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Nhà</Form.Label>
                                {/*<Form.Control as="textarea" rows={3} />*/}
                                <Form.Control as="select" onChange={e => {
                                    setFrom(e.target.value);
                                }}>
                                    <option value='Man'>Trai</option>
                                    <option value='Girl'>Gái</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Loại khách mời</Form.Label>
                                {/*<Form.Control as="textarea" rows={3} />*/}
                                <Form.Control as="select" onChange={e => {
                                    setCustomerType(e.target.value);
                                }}>
                                    <option value='Friend'>Bạn bè</option>
                                    <option value='Company'>Công ty</option>
                                    <option value='DienPhong'>Điện Phong</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Lưu
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        </>
    );
}

export default RSVPSection;