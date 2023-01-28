import React, { useState, useRef } from 'react';
import { Row, Col, Card, Avatar, Space, Table, Tag, Button, Modal } from 'antd'
import Header from '../../components/header';
import FormPublish from '../../components/form-publish';
import './index.less'
const { Meta } = Card;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
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
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function Article() {
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
      <div className='article'>
        <Modal
          title="Publish Article"
          open={open}
          onOk={handleOk}
          onCancel={hideModal}
          okText="Confirm"
          cancelText="Cancel"
        >
          <FormPublish ref={formRef} />
        </Modal>
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
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={showModal}>Publish</Button>
            </div>
            <div style={{ marginTop: 10 }}>
              <Table columns={columns} dataSource={data} />
            </div>
          </Col>
        </Row>
      </div >
    </>
  );
};