import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import './index.less';
const Header = () => (
  <div className='header-wrapper'>
    <div className="header-eth-operation">
      <div className="container-logo-operation">
        <div className='operation left-container'>

        </div>
      </div>
      <div >
        <ConnectButton />
      </div>
    </div>
  </div>
);

export default Header;