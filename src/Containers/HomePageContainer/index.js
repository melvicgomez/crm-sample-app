import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  background-color: rgb(192, 47, 29);
  height: 100vh;
  margin: 0px;
  padding: 0px;
  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  h1,
  p {
    text-align: center;
    color: white;
  }

  > .welcome-wrapper {
    max-width: 600px;
    padding: 0px 10px;
  }

  > .flex-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function index() {
  const history = useHistory();

  return (
    <StyledWrapper>
      <div class="flex-wrapper">
        <div class="welcome-wrapper">
          <h1>Welcome to CRM APP 1.0.0</h1>
          <p>Melvic Gomez made it with ❤ just for you.</p>
          <div>
            <Button
              type="primary"
              onClick={() => {
                history.push('/home');
              }}
            >
              GO TO APP
            </Button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default index;
