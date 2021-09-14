import api from '../index';

export default async (params) => {
  const response = await api.post('/customer', params).catch((e) => e);

  return response.data;
};
