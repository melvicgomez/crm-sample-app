import api from '../index';
import { notification } from 'antd';

export default async (params) => {
  const response = await api
    .post(`/update-customer/${params.cust_code}`, params)
    .catch((e) => e);

  if (response.message) {
    notification.error({
      message: `Oops, Something Went Wrong! [${response.status}]`,
      description:
        "There's problem updating the customer's record. Please contact the administrator.",
    });
    return Promise.reject(response);
  } else {
    notification.success({
      message: 'Record Updated!',
      description: `You updated ${params.last_name}, ${params.first_name}'s customer details.`,
    });
    return response.data;
  }
};
