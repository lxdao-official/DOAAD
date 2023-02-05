import React, { forwardRef, useImperativeHandle } from 'react';
import { Form, Input } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const FormProfile = (props, ref) => {
  const [form] = Form.useForm();

  const handleSubmit = () => form.validateFields();

  useImperativeHandle(
    ref,
    () => {
      return {
        handleSubmit,
      };
    },
    [handleSubmit],
  );

  return (
    <Form {...formItemLayout} style={{ maxWidth: 600 }} form={form}>
      <Form.Item
        name="firstName"
        label="First name"
        rules={[{ required: true, message: 'Please input first name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last name"
        rules={[{ required: true, message: 'Please input last name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="university"
        label="university"
        rules={[{ required: true, message: 'Please input university' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="email"
        rules={[{ required: true, message: 'Please input university' }]}
      >
        <Input type="email" />
      </Form.Item>
    </Form>
  );
};

export default forwardRef(FormProfile);
