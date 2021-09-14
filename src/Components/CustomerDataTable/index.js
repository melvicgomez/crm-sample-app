import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetAllCustomersData from '../../Stores/CustomerReducers/GetAllCustomersData';

import { Input, Table } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const TableWrapper = styled.div`
  h1 {
    color: white;
    font-size: 2em;
    font-weight: bold;
  }
`;

function index() {
  const columns = [
    {
      title: 'Customer Code',
      dataIndex: 'cust_code',
      key: 'cust_code',
      sorter: (a, b) => a.cust_code >= b.cust_code,
      showSorterTooltip: false,
    },
    {
      title: 'Name',
      dataIndex: 'last_name',
      key: 'last_name',
      sorter: (a, b) => a.last_name > b.last_name,
      defaultSortOrder: 'descend',
      showSorterTooltip: false,
      render: (text, record) => (
        <span>
          {record.last_name}, {record.first_name}
        </span>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email > b.email,
      showSorterTooltip: false,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
      sorter: (a, b) => a.phone_number > b.phone_number,
      showSorterTooltip: false,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address > b.address,
      showSorterTooltip: false,
    },
    {
      title: 'Date of Birth',
      dataIndex: 'date_of_birth',
      key: 'date_of_birth',
      sorter: (a, b) => a.date_of_birth > b.date_of_birth,
      showSorterTooltip: false,
    },
  ];

  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  const [sortBy, setSortBy] = useState('last_name');
  const [orderBy, setOrderBy] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    dispatch(GetAllCustomersData.action({ page: 1 }));
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('pagination', pagination);
    console.log('sorter', sorter);
    console.log('extra', extra);

    switch (extra.action) {
      case 'paginate':
        break;
      case 'sort':
        setSortBy(sorter.field);
        setOrderBy(sorter.order === 'ascend' ? 'ASC' : 'DESC');
        dispatch(
          GetAllCustomersData.action({
            page: 1,
            search: searchKeyword,
            orderBy: sorter.field,
            orderByDirection: sorter.order === 'ascend' ? 'asc' : 'desc',
          })
        );
        break;
      default:
        break;
    }
  };

  const onSearch = (value) => {
    setSearchKeyword(value);
    dispatch(GetAllCustomersData.action({ page: 1, search: value }));
  };

  return (
    <TableWrapper>
      <div style={{ paddingBottom: 6 }}>
        <h1>CRM APP 1.0.0</h1>
        <Search
          size="large"
          placeholder="Search"
          onSearch={onSearch}
          enterButton="Search"
          allowClear
          style={{ paddingBottom: 20 }}
        />

        <div className="table-results-info">
          <div>
            Total Records Found: <b>{customers.item?.total}</b>
          </div>
          <div>
            Sorted By:{' '}
            <b>
              {columns.filter((column) => column.key === sortBy)[0].title},{' '}
              {orderBy}
            </b>
          </div>
        </div>
      </div>
      <Table
        scroll={{ x: 600 }}
        rowKey={(rec) => rec.cust_code}
        columns={columns}
        dataSource={customers.item?.data || []}
        bordered={true}
        loading={customers.loading}
        onChange={onChange}
        pagination={{ position: ['bottomCenter'] }}
      />
    </TableWrapper>
  );
}

export default index;
