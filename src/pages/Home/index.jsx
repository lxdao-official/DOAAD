/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav2 from './Nav2';
import Banner3 from './Banner3';
import Feature3 from './Feature3';
import Content9 from './Content9';
import Teams1 from './Teams1';
import Footer2 from './Footer2';

import {
  Nav20DataSource,
  Banner30DataSource,
  Feature30DataSource,
  Feature30DataSourceEn,
  Content90DataSource,
  Teams10DataSource,
  Footer20DataSource,
  Content90DataSourceEn,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
      locale: 'en',
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  onLocaleChange = (val) => {
    console.log('locale change  ======> : ', val);
    this.setState({ locale: val });
  }

  render() {
    const { locale } = this.state;
    const children = [
      <Nav2
        id="Nav2_0"
        key="Nav2_0"
        locale={locale}
        dataSource={Nav20DataSource({ onLocaleChange: this.onLocaleChange })}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_0"
        key="Banner3_0"
        locale={locale}
        dataSource={Banner30DataSource({ locale })}
        isMobile={this.state.isMobile}
      />,
      <Feature3
        id="Feature3_0"
        key="Feature3_0"
        locale={locale}
        dataSource={locale === 'cn' ? Feature30DataSource : Feature30DataSourceEn}
        isMobile={this.state.isMobile}
      />,
      <Content9
        id="Content9_0"
        key="Content9_0"
        locale={locale}
        dataSource={locale === 'cn' ? Content90DataSource : Content90DataSourceEn}
        isMobile={this.state.isMobile}
      />,
      <Teams1
        id="Teams1_0"
        key="Teams1_0"
        locale={locale}
        dataSource={Teams10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer2
        id="Footer2_0"
        key="Footer2_0"
        locale={locale}
        dataSource={Footer20DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
