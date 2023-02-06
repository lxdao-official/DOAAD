import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Card, Avatar, Form, Modal, Button, Spin } from 'antd';
import Header from '../../components/header';
import FormProfile from '../../components/form-profile';
import { ethers } from 'ethers';
import { abi } from '../../abi/article';
import './index.less';
import { readIpfs, retrieve } from '../../util';
import config from '../../config';
import { useParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
const { Meta } = Card;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
export default function Detail() {
  const { id } = useParams();
  const { address, isConnecting, isDisconnected } = useAccount();
  const [data, setData] = useState({
    title: '',
    cid: '',
    citedCount: 0,
    publishTime: '',
    author: '',
    citeTargetList: [],
    content: '',
  });
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    university: '',
    email: '',
    profit: 0,
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const formRef = useRef();
  const showModal = () => {
    setOpen(true);
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

  // read all article
  const readArticle = async () => {
    let article = {};
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(config.articleContract, abi, signer);
    const res = await contract.getPaper(id);
    console.log(res);
    article['title'] = res[0];
    article['cid'] = res[1];
    article['citedCount'] = parseInt(res[2]._hex, 16);
    article['publishTime'] = new Date(
      parseInt(res[3]._hex, 16) * 1000,
    ).toLocaleDateString();
    article['id'] = parseInt(res[4]._hex, 16);
    article['author'] = res[5];

    article['citeTargetList'] = await Promise.all(
      res[6].map(async (value, index) => {
        const title = await readArticleTitle(value);

        return {
          id: value,
          title: title,
        };
      }),
    );
    const data = await retrieve(res[1]);
    article['content'] = data.content;

    return article;
  };
  const readArticleTitle = async (id) => {
    let article = {};
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(config.articleContract, abi, signer);
    const res = await contract.getPaper(id);
    return res[0];
  };

  const hideModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      const article = await readArticle();
      setData(article);
      const profile = await readProfile(article['author']);
      setProfile(profile);
      setLoading(false);
    })();
  }, []);
  return (
    <>
      <Header />
      <div className="profile">
        <Row>
          <Col span={10}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                loading={loading}
                className="card"
                style={{ width: 300 }}
                hoverable
              >
                <Meta title={profile?.firstName + ' ' + profile?.lastName} />
                <p>
                  {'address: ' +
                    data['author']?.slice(0, 8) +
                    '...' +
                    data['author']?.slice(-8, -1)}
                </p>
                <p>{'email: ' + profile?.email}</p>
                <p>{'university: ' + profile?.university}</p>
                <div className="container">
                  <div className="label">Profit</div>
                  <div className="data">{profile.profit}</div>
                </div>
              </Card>
            </div>
          </Col>
          <Spin spinning={loading}>
            <Col span={14}>
              <Form style={{ width: 600 }} {...formItemLayout}>
                <Form.Item label="CID">
                  <span className="ant-form-text">{data.cid}</span>
                </Form.Item>
                <Form.Item label="Title">
                  <span className="ant-form-text">{data.title}</span>
                </Form.Item>
                <Form.Item label="Content">
                  <span className="ant-form-text">{data.content}</span>
                </Form.Item>
                <Form.Item label="Publish Time">
                  <span className="ant-form-text">{data.publishTime}</span>
                </Form.Item>
                <Form.Item label="Cited Count">
                  <span className="ant-form-text">{data.citedCount}</span>
                </Form.Item>
                <Form.Item label="Cited Article">
                  {data.citeTargetList.map((value, index) => {
                    return (
                      <div>
                        <a key={index} href={`/detail/${value.id}`}>
                          {'[' + (index + 1) + ']. '} {value.title}
                        </a>
                      </div>
                    );
                  })}
                </Form.Item>
              </Form>
            </Col>
          </Spin>
        </Row>
      </div>
    </>
  );
}
