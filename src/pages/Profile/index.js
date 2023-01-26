import React from 'react';
import { Row, Col, Card, Avatar, Form } from 'antd'
const { Meta } = Card;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
export default function Profile() {
  return (
    <div className='profile'>
      <Row>
        <Col span={10}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              style={{ width: 300 }}
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<span>操作1</span>, <span>操作2</span>, <span>操作3</span>]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
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
  );
};