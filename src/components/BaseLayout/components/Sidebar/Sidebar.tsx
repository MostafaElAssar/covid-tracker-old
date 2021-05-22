import React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { Image, Layout, Menu } from 'antd';
import styled from 'styled-components';
import style from './Sidebar.style';

import { HomeFilled, DashboardFilled } from '@ant-design/icons';

const { Sider } = Layout;

interface SidebarProps extends RouteComponentProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }: SidebarProps) => (
  <Sider className={className} width={250}>
    <div>
      <Image
        width={150}
        src={`${process.env.PUBLIC_URL}/assets/images/MYTIGATE-Logo.svg`}
      />
    </div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<HomeFilled />}>
        <NavLink to={'/'} exact>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<DashboardFilled />}>
        <NavLink to={'/dashboard'} exact>
          Dashboard
        </NavLink>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default styled(withRouter(Sidebar))`
  ${style}
`;
