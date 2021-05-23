import React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { Image, Layout, Menu } from 'antd';
import styled from 'styled-components';
import { HomeFilled, DashboardFilled } from '@ant-design/icons';
import style from './Sidebar.style';

interface SidebarProps extends RouteComponentProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  className,
  location,
}: SidebarProps) => (
  <Layout.Sider className={className} width={250}>
    <div>
      <Image
        width={150}
        src={`${process.env.PUBLIC_URL}/assets/images/MYTIGATE-Logo.svg`}
      />
    </div>
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[`/${location.pathname.split('/')[1]}`]}
    >
      <Menu.Item key="/" icon={<HomeFilled />}>
        <NavLink to={'/'} exact>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/dashboard" icon={<DashboardFilled />}>
        <NavLink to={'/dashboard'} exact>
          Dashboard
        </NavLink>
      </Menu.Item>
    </Menu>
  </Layout.Sider>
);

export default styled(withRouter(Sidebar))`
  ${style}
`;
