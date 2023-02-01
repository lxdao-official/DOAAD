import React, { useState, useRef } from 'react';
import { Row, Col, Card, Avatar, Form, Modal, Button } from 'antd'
import Header from '../../components/header';
import FormProfile from '../../components/form-profile';
import './index.less';
const { Meta } = Card;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
export default function Profile() {
  const [open, setOpen] = useState(false);
  const formRef = useRef();
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    formRef.current.handleSubmit().then(values => {
      console.log('values: ', values);
    });
    // hideModal();
  }

  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Header />
      <div className='profile'>
        <Modal
          title="Profile"
          open={open}
          onOk={handleOk}
          onCancel={hideModal}
          okText="Confirm"
          cancelText="Cancel"
        >
          <FormProfile ref={formRef} />
        </Modal>
        <Row>
          <Col span={10}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                style={{ width: 300 }}
                hoverable
                actions={[<span>操作1</span>, <span>操作2</span>, <span>操作3</span>]}
              >
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Card title"
                  description="This is the description"
                />
                <Button onClick={showModal}>Edit</Button>
              </Card>
            </div>
          </Col>
          <Col span={14}>
            <Form
              style={{ maxWidth: 600 }}
              {...formItemLayout}
            >
              <Form.Item label="CID">
                <span className="ant-form-text">xxxxxxxxxxxxxxxxxxxx</span>
              </Form.Item>

              <Form.Item label="Title">
                <span className="ant-form-text">xxxxxxxxxxxxxxxxxxxx</span>
              </Form.Item>
              <Form.Item label="Content">
                <span className="ant-form-text">xxxxxxxxxxxxxxxxxxxx</span>
              </Form.Item>
              <Form.Item label="Publish Time">
                <span className="ant-form-text">xxxxxxxxxxxxxxxxxxxx</span>
              </Form.Item>
              <Form.Item label="Due Time">
                <span className="ant-form-text">xxxxxxxxxxxxxxxxxxxx</span>
              </Form.Item>
              <Form.Item label="Cited Hash">
                <span className="ant-form-text">xxxxxxxxxxxxxxxxxxxx</span>
              </Form.Item>
              <Form.Item label="Cited Count">
                <span className="ant-form-text">xxxxxxxxxxxxxxxxxxxx</span>
              </Form.Item>
              <Form.Item label="Profit">
                <span className="ant-form-text">xxxxxxxxxxxxxxxxxxxx</span>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div >
    </>
  );
};