import React from 'react';
import styled from 'styled-components';

import CustomerDataTable from '../../Components/CustomerDataTable';

function index() {
  const StyledWrapper = styled.div`
    background-color: rgb(192, 47, 29);
    height: 100vh;
    padding: 20px 0px;
    > div {
      max-width: 1366px;
      margin: auto;
    }
  `;

  return (
    <StyledWrapper>
      <div>
        <CustomerDataTable />
      </div>
    </StyledWrapper>
  );
}

export default index;
