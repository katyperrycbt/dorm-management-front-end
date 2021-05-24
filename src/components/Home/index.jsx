/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React, { useEffect, useState } from 'react';
import { enquireScreen } from 'enquire-js';

import Nav2 from './Nav2';
import Banner3 from './Banner3';
import Content8 from './Content8';
import Content9 from './Content9';
import Content10 from './Content10';
import Content11 from './Content11';
import Content12 from './Content12';
import Footer2 from './Footer2';

import {
  Nav20DataSource,
  Banner30DataSource,
  Content80DataSource,
  Content90DataSource,
  Content100DataSource,
  Content110DataSource,
  Content120DataSource,
  Footer20DataSource,
} from './data.source';
import './less/antMotionStyle.less';

import { useHistory } from 'react-router-dom';

let isMobiles;
enquireScreen((b) => {
  isMobiles = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

const Home = () => {

  const [isMobile, setIsMobile] = useState(isMobiles);
  const [show, setShow] = useState(!location.port);

  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(!!b);
    });

    if (location.port) {
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
  });

  const history = useHistory();
  const profile = JSON.parse(localStorage.getItem('user'));

  if (!profile) {
    history.push('/login');
    return <></>;
  }


  const children = [
    <Nav2
      id="Nav2_0"
      key="Nav2_0"
      dataSource={Nav20DataSource}
      isMobile={isMobile}
    />,
    <Banner3
      id="Banner3_0"
      key="Banner3_0"
      dataSource={Banner30DataSource}
      isMobile={isMobile}
    />,
    <Content8
      id="Content8_0"
      key="Content8_0"
      dataSource={Content80DataSource}
      isMobile={isMobile}
    />,
    <Content9
      id="Content9_0"
      key="Content9_0"
      dataSource={Content90DataSource}
      isMobile={isMobile}
    />,
    <Content10
      id="Content10_0"
      key="Content10_0"
      dataSource={Content100DataSource}
      isMobile={isMobile}
    />,
    <Content11
      id="Content11_0"
      key="Content11_0"
      dataSource={Content110DataSource}
      isMobile={isMobile}
    />,
    <Content12
      id="Content12_0"
      key="Content12_0"
      dataSource={Content120DataSource}
      isMobile={isMobile}
    />,
    <Footer2
      id="Footer2_0"
      key="Footer2_0"
      dataSource={Footer20DataSource}
      isMobile={isMobile}
    />,
  ];
  return (
    <div
      className="templates-wrapper"
      style={{width: '100%', position: 'absolute', left: 0}}
    >
      {show && children}
    </div>
  );

}

export default Home;
