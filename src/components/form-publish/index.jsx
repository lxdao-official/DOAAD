import React, { forwardRef, useImperativeHandle } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const FormPublish = (props, ref) => {
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
        name="title"
        label="title"
        rules={[{ required: true, message: 'Please input title' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="content"
        label="content"
        rules={[{ required: true, message: 'Please input content' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.List name="cidList">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Cited ID' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: false,
                      whitespace: true,
                      message: 'Please input CID or delete this field.',
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="cited id" style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 0 ? (
                  <MinusCircleOutlined
                    style={{ marginLeft: 5 }}
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: '60%' }}
                  icon={<PlusOutlined />}
                >
                  Add Cite
                </Button>
              </div>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default forwardRef(FormPublish);
