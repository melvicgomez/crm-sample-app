import api from '../index';

export default async (params) => {
  const response = await api
    .post(`/update-customer/${params.cust_code}`, params)
    .catch((e) => e);
  console.log(response.data);
  return response.data;
};
