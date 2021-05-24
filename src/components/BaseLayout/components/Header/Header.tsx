import React from "react";
import { Layout } from "antd";
import { NotificationFilled, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import style from "./Header.style";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }: HeaderProps) => (
  <Layout.Header className={className}>
    <NotificationFilled />
    <UserOutlined />
    <a href="mailto:demo@mytigate.com">demo@mytigate.com</a>
  </Layout.Header>
);

export default styled(Header)`
  ${style}
`;
