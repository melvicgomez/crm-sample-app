import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { useHistory } from 'react-router';

const StyledWrapper = styled.section`
  background-color: #2d3436;
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
      <div className="flex-wrapper">
        <div className="welcome-wrapper">
          <div className="page-highlight-icon">🚧</div>
          <h1>404 PAGE NOT FOUND</h1>
          <div>
            <Button
              onClick={() => {
                history.push('/');
              }}
            >
              ⬅ RETURN HOME
            </Button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default index;
