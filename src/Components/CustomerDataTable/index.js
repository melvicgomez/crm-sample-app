import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Button, Input, Pagination, Table } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';

import GetAllCustomersData from '../../Stores/CustomerReducers/GetAllCustomersData';
import CustomerFormDrawer from '../CustomerFormDrawer';

const { Search } = Input;

const TableWrapper = styled.div``;

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

  const [orderBy, setOrderBy] = useState('last_name');
  const [orderByDirection, setOrderByDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(GetAllCustomersData.action({ page: 1 }));
  }, []);

  const [customerFormDrawerVisibility, setCustomerFormDrawerVisibility] =
    useState(false);

  const onTableChange = (pagination, filters, sorter, extra) => {
    if (extra.action === 'sort') {
      setOrderBy(sorter.field);
      setOrderByDirection(sorter.order === 'ascend' ? 'ASC' : 'DESC');
      dispatch(
        GetAllCustomersData.action({
          page: 1,
          search: searchKeyword,
          orderBy: sorter.field,
          orderByDirection: sorter.order === 'ascend' ? 'asc' : 'desc',
        })
      );
    }
  };

  const onCustomerSearch = (value) => {
    setCurrentPage(1);
    setSearchKeyword(value);
    dispatch(GetAllCustomersData.action({ page: 1, search: value }));
  };

  return (
    <TableWrapper>
      <div style={{ paddingBottom: 6 }}>
        <Search
          size="large"
          placeholder="Search"
          onSearch={onCustomerSearch}
          enterButton="SEARCH"
          allowClear
          style={{ paddingBottom: 20 }}
        />

        <div className="table-results-info">
          <div>
            <span>
              Total Records: <b>{customers.item?.total}</b>
            </span>
            <span style={{ marginLeft: 16 }}>
              Sorted By:{' '}
              <b>
                {columns.filter((column) => column.key === orderBy)[0].title},{' '}
                {orderByDirection}
              </b>
            </span>
          </div>

          <div>
            <Button
              type="primary"
              shape="round"
              icon={<UsergroupAddOutlined />}
              onClick={() => setCustomerFormDrawerVisibility(true)}
            >
              ADD NEW CUSTOMER
            </Button>
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
        onChange={onTableChange}
        pagination={false}
      />

      <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={customers?.item?.total || 0}
        onChange={(page) => {
          setCurrentPage(page);
          dispatch(
            GetAllCustomersData.action({
              page,
              search: searchKeyword,
              orderBy: orderBy,
              orderByDirection: orderByDirection,
            })
          );
        }}
        style={{ marginTop: 6 }}
      />

      <CustomerFormDrawer
        visible={customerFormDrawerVisibility}
        onClose={() => {
          setCustomerFormDrawerVisibility(false);
        }}
      />
    </TableWrapper>
  );
}

export default index;
