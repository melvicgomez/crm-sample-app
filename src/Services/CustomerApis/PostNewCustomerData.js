import api from '../index';
import { notification } from 'antd';
export default async (params) => {
  const response = await api.post('/customer', params).catch((e) => e);

  if (response.message) {
    notification.error({
      message: `Oops, Something Went Wrong! [${response.status}]`,
      description:
        "There's problem creating a new customer record. Please contact the administrator.",
    });
    return Promise.reject(response);
  } else
    notification.success({
      message: 'Added Record Successfully!',
      description: `You added ${params.last_name}, ${params.first_name} in the record.`,
    });
  return response.data;
};
