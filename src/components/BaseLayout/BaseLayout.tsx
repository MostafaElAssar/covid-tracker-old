import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import style from './BaseLayout.style';

interface BaseLayoutProps {
  children: any;
  className?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  className,
}: BaseLayoutProps) => (
  <Layout className={className}>
    <Sidebar />
    <Layout>
      <Header />
      <Layout.Content>
        <div>{children}</div>
      </Layout.Content>
      <Footer />
    </Layout>
  </Layout>
);

export default styled(BaseLayout)`
  ${style}
`;
