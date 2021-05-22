import React from 'react';
import { Col, Layout, Row } from 'antd';
import styled from 'styled-components';
import style from './Footer.style';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }: FooterProps) => (
  <Layout.Footer className={className}>
    <Row>
      <Col>
        <span>Version: 1.1.0</span> <br />
        <a href="support@mytigate.com">support@mytigate.com</a> <br />
        <a href="https://mytigate.de/">Technical Documentation</a> <br />
      </Col>
      <Col offset={6}>
        <span>© Copyright 2019 - 2021</span> <br />
        <a href="https://mytigate.de/">MYTIGATE GmbH</a> <br />
        <span>All rights reserved</span>
      </Col>
    </Row>
  </Layout.Footer>
);

export default styled(Footer)`
  ${style}
`;
