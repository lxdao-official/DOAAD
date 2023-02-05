import React, { useState, useRef, useEffect } from 'react';
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
import FormProfile from '../../components/form-profile';
import { abi } from '../../abi/article';
import FormPublish from '../../components/form-publish';
import './index.less';
const { Meta } = Card;

const columns = [
  {
    title: 'Title',
    dataIndex: 'paperName',
    key: 'paperName',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Cid',
    dataIndex: 'paperCid',
    key: 'paperCid',
    render: (text) => (
      <span>
        {text.slice(0, 4)}...{text.slice(-4, -1)}
      </span>
    ),
  },
  {
    title: 'Publish Time',
    dataIndex: 'publishTime',
    key: 'publishTime',
  },
  {
    title: 'Cited Count',
    dataIndex: 'citedCount',
    key: 'citedCount',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Detail</a>
      </Space>
    ),
  },
];

export default function Article() {
  const [messageApi, contextHolder] = message.useMessage();
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const formRef = useRef();
  const profileFormRef = useRef();
  const showProfileModal = () => {
    setProfileOpen(true);
  };
  const showModal = () => {
    setOpen(true);
  };

  // read all article
  const readArticle = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      '0x5eF708FE60817c2a21DBad705B3752aB1879307E',
      abi,
      signer,
    );
    const res = await contract.getPaperList();
    let data = [];
    res.map((value, index) => {
      data.push({
        key: index,
        paperName: value[0],
        paperCid: value[1],
        citedCount: parseInt(value[2]._hex, 16),
        publishTime: new Date(
          parseInt(value[3]._hex, 16) * 1000,
        ).toLocaleDateString(),
        author: value[4],
        citeTargetList: value[5],
      });
    });
    console.log(data);
    return data;
  };

  // publish article
  const publish = async (title, cid, cidList) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
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
    const tx = await contract.publishPaper(title, cid, cidList, {
      value: ethers.utils.parseEther('' + length * 0.01),
    });
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
      const tx = await publish(values.title, cid, values.cidList);
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
  const hideProfileModal = () => {
    setProfileOpen(false);
  };
  const handleProfileOk = () => {
    formRef.current.handleSubmit().then((values) => {
      console.log('values: ', values);
    });
    // hideModal();
  };

  useEffect(() => {
    (async () => {
      const data = await readArticle();
      setList(data);
    })();
  }, []);
  return (
    <>
      {contextHolder}
      <Header />
      <div className="article">
        <Modal
          title="Detail"
          open={profileOpen}
          onOk={handleProfileOk}
          onCancel={hideProfileModal}
          okText="Confirm"
          cancelText="Cancel"
        >
          <FormProfile ref={profileFormRef} />
        </Modal>
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
                  <Button onClick={showProfileModal}>Edit</Button>,
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
              <Table columns={columns} dataSource={list} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
