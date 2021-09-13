import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetAllCustomersData from '../../Stores/CustomerReducers/GetAllCustomersData';

function index() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(GetAllCustomersData.action({ page: 1 }));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{JSON.stringify(customers)}</p>
    </div>
  );
}

export default index;
