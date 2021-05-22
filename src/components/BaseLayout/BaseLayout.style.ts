import { css } from 'styled-components';

export default css`
  >.ant-layout{
    margin-left: 250px; 
    height: 100%;
    background: #fff;
    .ant-layout-content {
      height: calc(100vh - 188px);
      >div {
        text-align: center; 
        border: 4px solid #f0f2f5;
        height: 100%
      }
    }
  }
`;
