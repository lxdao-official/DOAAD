import React from 'react';
import logo from '../../assets/logo.png';
import './index.less';
const Header = () => (
  <div className='header-wrapper'>
    <div className="header-eth-operation">
      <div className="container-logo-operation">
        <a href='/'>
          <img className='logo' src={logo} />
        </a>
        <div className='operation left-container'>

        </div>
      </div>
      <div className='operation right-container'>

      </div>
    </div>
  </div>
);

export default Header;