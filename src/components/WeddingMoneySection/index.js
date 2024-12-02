import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Select, Table, InputNumber, Tag, Space, Button} from 'antd';
import '../../css/wedding-section.css'

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
    },
    {
        title: 'Số lượng',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Đơn vị',
        dataIndex: 'unit',
        key: 'unit',
    },
    {
        title: 'Trạng thái',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = '';
                    switch(tag){
                        case 'Return':
                            color = 'volcano';
                            break;
                        case 'Receive':
                            color = 'green';
                            break;
                        default:
                            color = 'yellow';
                            break;
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Hành động',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <button className="btn btn-info">Sửa</button>
                <button className="btn btn-danger">Xoá</button>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        quantity: '4',
        from: 'nhà trai',
        unit: 'chỉ',
        tags: ['Receive', 'Return'],
    },
    {
        key: '2',
        name: 'Jim Green',
        quantity: '100.000',
        from: 'nhà trai',
        unit: 'vnd',
        tags: ['Receive'],
    },
    {
        key: '3',
        name: 'Joe Black',
        quantity: '0.5',
        from: 'nhà gái',
        unit: 'chỉ',
        tags: ['Receive'],
    },
    {
        key: '4',
        name: 'Joe Black',
        quantity: '100.000',
        from: 'nhà gái',
        unit: 'vnd',
        tags: ['Receive'],
    },
    {
        key: '5',
        name: 'Joe Black',
        quantity: '100.000',
        from: 'nhà gái',
        unit: 'vnd',
        tags: ['Receive'],
    },
    {
        key: '6',
        name: 'Joe Black',
        quantity: '100.000',
        from: 'nhà trai',
        unit: 'vnd',
        tags: ['Receive'],
    },
    {
        key: '7',
        name: 'Joe Black',
        quantity: '100.000',
        from: 'nhà trai',
        unit: 'vnd',
        tags: ['Receive'],
    },
];

class WeddingMoneySection extends React.Component {
    formRef = React.createRef();

    componentDidMount() {
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        //     .then(res => {
        //         const persons = res.data;
        //         this.setState({ persons });
        //     })
    }

    onFinish = (values) => {
        console.log(values);
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    // onFill = () => {
    //     this.formRef.current.setFieldsValue({
    //         note: 'Hello world!',
    //         unit: 'male',
    //     });
    // };

    render() {
        const suffixSelector = (
            <Form.Item name="suffix"
                       noStyle
                       rules={[
                           {
                               required: true,
                               message: 'vui lòng chọn đơn vị tiền tệ!',
                           },
                       ]}>
                <Select
                    style={{
                        width: 70,
                    }}
                >
                    <Option value="vnd">VND</Option>
                    <Option value="gold">Chỉ</Option>
                </Select>
            </Form.Item>
        );
        return (
            <>
                <section className="sec-stat" >
                    <div className="border border-info title-stat ">
                        <h5 className="text-center " style={{background: 'antiquewhite'}}>Thống kê tiền mừng + chi phí đám cưới</h5>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 ">
                                <div className="border border-secondary" style={{margin: '5px 10px 10px 10px'}}>
                                    <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish} className="form-khach">
                                        <Form.Item
                                            name="note"
                                            label="Tên khách"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập tên khách mời!',
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                        <Form.Item
                                            name="money"
                                            label="Số tiền"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập số tiền mừng!',
                                                },
                                            ]}
                                        >
                                            <InputNumber
                                                addonAfter={suffixSelector}
                                                placeholder="Vui lòng nhập 1 số. Hệ thống sẽ tự động x 100.000"
                                                style={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Form.Item>
                                        <Form.Item {...tailLayout}>
                                            <Button type="primary" htmlType="submit">
                                                Lưu
                                            </Button>
                                            <Button htmlType="button" onClick={this.onReset}>
                                                Làm mới
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                                <div className="border border-secondary sum-stat">
                                        <b>Tổng cộng: </b>
                                        <p className="style-p">Tiền mừng: 99,000,000 vnd</p>
                                        <p className="style-p">Vàng: 35 chỉ</p>
                                        <p className="style-p">Khấu trừ chi phí: 50,000,000</p>
                                        <p className="style-p">Còn lại: 49,000,000</p>


                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9 ">
                                <div className="table-section border border-secondary container">
                                    <Table columns={columns} dataSource={data} bordered={true} size={'middle'} pagination={{ pageSize: 4}} />
                                </div>
                            </div>
                        </div>
                        <div className="btn-action">
                            <button className="btn btn-success">Xuất excel</button>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WeddingMoneySection;