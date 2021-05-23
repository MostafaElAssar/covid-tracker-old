import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import style from './BaseLayout.style';

interface BaseLayoutProps extends RouteComponentProps {
  children: any;
  className?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  className,
  location,
}: BaseLayoutProps) => (
  <Layout className={className}>
    <Sidebar />
    <Layout>
      <Header />
      <Layout.Content>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              {location.pathname.split('/')[1] === 'dashboard'
                ? 'Dashboard'
                : 'Home'}
            </Breadcrumb.Item>
            <Breadcrumb.Item> </Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  </Layout>
);

export default styled(withRouter(BaseLayout))`
  ${style}
`;
