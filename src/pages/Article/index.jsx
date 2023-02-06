import React, { useState, useRef, useEffect } from 'react';
import * as IPFS from 'ipfs-core';
import { ethers } from 'ethers';
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
  Spin,
  message,
} from 'antd';
import Header from '../../components/header';
import FormProfile from '../../components/form-profile';
import { abi } from '../../abi/article';
import FormPublish from '../../components/form-publish';
import './index.less';
import { readIpfs, uploadIpfs, retrieve } from '../../util';
import config from '../../config';
import { useAccount } from 'wagmi';
import { data } from 'browserslist';
const { Meta } = Card;

const columns = [
  {
    title: 'Title',
    dataIndex: 'paperName',
    key: 'paperName',
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
        <a href={`/detail/${record.id}`}>Detail</a>
      </Space>
    ),
  },
];

export default function Article() {
  const [messageApi, contextHolder] = message.useMessage();
  const { address, isConnecting, isDisconnected } = useAccount();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    university: '',
    email: '',
    profit: '',
  });
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
    const contract = new ethers.Contract(config.articleContract, abi, signer);
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
        id: value[4],
        author: value[5],
        citeTargetList: value[6],
      });
    });
    return data;
  };

  // publish article
  const publish = async (title, cid, cidList) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(config.articleContract, abi, signer);
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
  const updateProfile = async (cid) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(config.articleContract, abi, signer);
    const tx = await contract.setAuthorIntro(cid);
    return tx;
  };
  const readProfile = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(config.articleContract, abi, signer);
    const cid = await contract.AuthorIntro(address);
    const balance = await contract.AuthorBalance(address);
    const data = await retrieve(cid);
    data['profit'] = ethers.utils.formatEther(balance._hex);
    return data;
  };

  const handleOk = async () => {
    try {
      const values = await formRef.current.handleSubmit();
      const cid = await uploadIpfs(values);
      const tx = await publish(values.title, cid, values.cidList);
      messageApi.open({
        type: 'success',
        content: 'Upload Success',
      });
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
  const handleProfileOk = async () => {
    try {
      const values = await profileFormRef.current.handleSubmit();
      const cid = await uploadIpfs(values);
      const tx = await updateProfile(cid);
      messageApi.open({
        type: 'success',
        content: 'Upload Success',
      });
    } catch (error) {
      console.error(error);
      messageApi.open({
        type: 'error',
        content: 'Upload Failed',
      });
    }
    hideProfileModal();
  };

  useEffect(() => {
    (async () => {
      const data = await readArticle();
      setList(data);
      setLoading(true);
      const profile = await readProfile(address);
      setProfile(profile);
      setLoading(false);
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
                loading={loading}
                className="card"
                style={{ width: 300 }}
                hoverable
                actions={[<Button onClick={showProfileModal}>Edit</Button>]}
              >
                <Meta title={profile?.firstName + ' ' + profile?.lastName} />
                <p>
                  {'address: ' +
                    address?.slice(0, 8) +
                    '...' +
                    address?.slice(-8, -1)}
                </p>
                <p>{'email: ' + profile?.email}</p>
                <p>{'university: ' + profile?.university}</p>
                <div className="container">
                  <div className="left">
                    <div className="label">Articles</div>
                    <div className="data">{list.length}</div>
                  </div>
                  <div className="right">
                    <div className="label">Profit</div>
                    <div className="data">{profile.profit}</div>
                  </div>
                </div>
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
