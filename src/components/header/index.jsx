import React from 'react';
import logo from '../../assets/logo.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import './index.less';
const Header = () => (
  <div className="header-wrapper">
    <div className="header-eth-operation">
      <div className="container-logo-operation">
        <a href="/">
          <img className="logo" src={logo} />
        </a>
      </div>
      <div>
        <ConnectButton />
      </div>
    </div>
  </div>
);

export default Header;
