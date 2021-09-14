import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DatePicker, Drawer } from 'antd';

import { Form, Input, Button } from 'antd';
import moment from 'moment';

import PostNewCustomerData from '../../Stores/CustomerReducers/PostNewCustomerData';
import UpdateCustomerData from '../../Stores/CustomerReducers/UpdateCustomerData';

function index({ visible, onClose, customerData }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const params = {
      first_name: values.first_name,
      last_name: values.last_name,
      phone_number: values.phone_number,
      email: values.email,
      address: values.address,
      date_of_birth: values.date_of_birth.format('YYYY-MM-DD'),
    };

    if (customerData.cust_code)
      await dispatch(
        UpdateCustomerData.action({
          ...params,
          cust_code: customerData.cust_code,
        })
      );
    else await dispatch(PostNewCustomerData.action(params));
    onClose();
  };

  useEffect(() => {
    if (visible)
      form.setFieldsValue({
        first_name: customerData?.first_name || '',
        last_name: customerData?.last_name || '',
        address: customerData?.address || '',
        email: customerData?.email || '',
        phone_number: customerData?.phone_number || '',
        date_of_birth: customerData?.date_of_birth
          ? moment(customerData?.date_of_birth)
          : moment(),
      });
  }, [visible]);

  return (
    <Drawer
      forceRender
      title="New Customer Form"
      placement="right"
      size="large"
      onClose={onClose}
      visible={visible}
      destroyOnClose
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[
            {
              required: true,
              message: 'First name is required.',
            },
          ]}
        >
          <Input placeholder="Juan" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[
            {
              required: true,
              message: 'Last name is required.',
            },
          ]}
        >
          <Input placeholder="Dela Cruz" />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          type="email"
          rules={[
            {
              required: true,
              message: 'Email address is required.',
            },
            {
              type: 'email',
              message: 'Email address format is invalid.',
            },
          ]}
        >
          <Input placeholder="email@domain.com" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: 'Address is required.',
            },
          ]}
        >
          <Input placeholder="Metro Manila, Philippines" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone_number"
          type="number"
          rules={[
            {
              required: true,
              message: 'Phone Number is required.',
            },
            {
              pattern: /^(09)\d{9}$/gm,
              message: 'Phone number format is invalid.',
            },
          ]}
        >
          <Input placeholder="09171234567" />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="date_of_birth"
          rules={[
            {
              required: true,
              message: 'Date of Birth is required.',
            },
          ]}
        >
          <DatePicker
            size="large"
            disabledDate={(currentDate) => moment().isBefore(currentDate)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" block htmlType="submit">
            SUBMIT FORM
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default index;
