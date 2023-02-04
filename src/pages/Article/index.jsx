import React, { useState, useRef } from 'react';
import * as IPFS from 'ipfs-core';
import { ethers } from 'ethers';
import { usePrepareContractWrite, useContractWrite } from 'wagmi';
import {
  Row,
  Col,
  Card,
  Avatar,
  Space,
  Table,
  Tag,
  Button,
  Modal,
  message,
} from 'antd';
import Header from '../../components/header';
import { abi } from '../../abi/article';
import FormPublish from '../../components/form-publish';
import './index.less';
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
  const [messageApi, contextHolder] = message.useMessage();
  const [open, setOpen] = useState(false);
  const formRef = useRef();
  const showModal = () => {
    setOpen(true);
  };

  // 在合约上发布文章
  const contractPublish = async (title, cid, cidList) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(abi);
    const contract = new ethers.Contract(
      '0x5eF708FE60817c2a21DBad705B3752aB1879307E',
      abi,
      signer,
    );
    const data = await contract.citeFee();
    const citeFee = parseInt(data._hex, 16);
    if (typeof cidList == 'undefined') {
      cidList = [];
    }
    const length = cidList.length;
    console.log(length);
    const tx = await contract.publishPaper(title, cid, cidList);
    return tx;
  };

  //上传数据至ipfs
  const uploadIpfs = async (value) => {
    const ipfs = await IPFS.create({ repo: 'ok' + Math.random() });
    const fileAdded = await ipfs.add(JSON.stringify(value));
    const cid = fileAdded.path;
    return cid;
  };

  const handleOk = async () => {
    try {
      const values = await formRef.current.handleSubmit();
      console.log({ values });
      const cid = await uploadIpfs(values);
      console.log({ cid });
      const tx = await contractPublish(values.title, cid, values.cidList);
      messageApi.open({
        type: 'success',
        content: 'Upload Success',
      });
      console.log(tx);
    } catch (error) {
      console.error(error);
      messageApi.open({
        type: 'error',
        content: 'Upload Failed',
      });
    }
    hideModal();
  };

  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      {contextHolder}
      <Header />
      <div className="article">
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
                actions={[
                  <span>操作1</span>,
                  <span>操作2</span>,
                  <span>操作3</span>,
                ]}
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
      </div>
    </>
  );
}
