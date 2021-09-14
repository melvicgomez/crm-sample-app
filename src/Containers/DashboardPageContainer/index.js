import React from 'react';
import styled from 'styled-components';

import CustomerDataTable from '../../Components/CustomerDataTable';

const StyledWrapper = styled.div`
  padding: 10px;

  h1 {
    color: white;
    font-size: 2em;
    font-weight: bold;
  }
  > div {
    max-width: 1366px;
    margin: auto;
  }
`;

function index() {
  return (
    <StyledWrapper>
      <div>
        <h1>CRM APP 1.0.0</h1>

        <CustomerDataTable />
      </div>
    </StyledWrapper>
  );
}

export default index;
