import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Card, Avatar, Form, Modal, Button, Spin } from 'antd';
import Header from '../../components/header';
import FormProfile from '../../components/form-profile';
import { ethers } from 'ethers';
import * as IPFS from 'ipfs-core';
import { abi } from '../../abi/article';
import './index.less';
import { useParams } from 'react-router-dom';
const { Meta } = Card;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({
    title: '',
    cid: '',
    citedCount: '',
    publishTime: '',
    author: '',
    citeTargetList: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const formRef = useRef();
  const showModal = () => {
    setOpen(true);
  };

  const readIpfs = async (cid) => {
    const ipfs = await IPFS.create({ repo: 'ok' + Math.random() });
    console.log(cid);
    const stream = ipfs.cat(cid);
    const decoder = new TextDecoder();
    let str = '';

    for await (const chunk of stream) {
      // chunks of data are returned as a Uint8Array, convert it back to a string
      str += decoder.decode(chunk, { stream: true });
    }
    const data = JSON.parse(str);
    return data;
  };
  console.log(loading);

  // read all article
  const readArticle = async () => {
    setLoading(true);

    let article = {};
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      '0x5eF708FE60817c2a21DBad705B3752aB1879307E',
      abi,
      signer,
    );
    const res = await contract.getPaper(id);
    console.log(res);
    article['title'] = res[0];
    article['cid'] = res[1];
    article['citedCount'] = parseInt(res[2]._hex, 16);
    article['publishTime'] = new Date(
      parseInt(res[3]._hex, 16) * 1000,
    ).toLocaleDateString();
    article['author'] = res[4];
    article['citeTargetList'] = res[5];

    const data = await readIpfs(res[1]);
    console.log({ data });
    article['content'] = data.content;
    setData(article);
    console.log(article);
    setLoading(false);
    // return data;
  };

  const handleOk = () => {
    formRef.current.handleSubmit().then((values) => {
      console.log('values: ', values);
    });
    // hideModal();
  };

  const hideModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    (async () => {
      readArticle();
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
                style={{ width: 300 }}
                hoverable
                // actions={[
                //   <span>操作1</span>,
                //   <span>操作2</span>,
                //   <span>操作3</span>,
                // ]}
              >
                <Meta
                  avatar={<Avatar src="https://i.pravatar.cc/300" />}
                  title="Jaquan Koepp"
                  description={data.author}
                />
                <p>Education Level: Bachelor's Degree</p>
                <p>University: Erie Community College</p>
                <p>Email: eroob@yahoo.com</p>
              </Card>
            </div>
          </Col>
          <Spin spinning={loading}>
            <Col span={14}>
              <Form style={{ minWidth: 600 }} {...formItemLayout}>
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
                {/* <Form.Item label="Due Time">
                <span className="ant-form-text">{data.}</span>
              </Form.Item> */}
                {/* <Form.Item label="Cited Hash">
                <span className="ant-form-text"></span>
              </Form.Item> */}
                <Form.Item label="Cited Count">
                  <span className="ant-form-text">{data.citedCount}</span>
                </Form.Item>
                {/* <Form.Item label="Profit">
                <span className="ant-form-text">{}</span>
              </Form.Item> */}
              </Form>
            </Col>
          </Spin>
        </Row>
      </div>
    </>
  );
}
