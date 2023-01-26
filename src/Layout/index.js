import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import './index.css';

export default function Layout() {
  return (
    <div className="doadd-container">
      <Header />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}