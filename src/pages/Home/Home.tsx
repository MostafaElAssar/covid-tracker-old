import React from 'react';
import { Image } from 'antd';
import styled from 'styled-components';
import style from './Home.style';

interface HomeProps {
  className?: string;
}

const Home: React.FC<HomeProps> = ({ className }: HomeProps) => (
  <div className={className}>
    <Image src={`${process.env.PUBLIC_URL}/assets/images/MYTIGATE-Logo.svg`} />
  </div>
);

export default styled(Home)`
  ${style}
`;
