import api from '../index';

export default async (params) => {
  const response = await api
    .get(`${process.env.REACT_APP_API_URL}/customer`, {
      params,
    })
    .catch((e) => e);

  console.log(response.data);

  return response.data;
};
