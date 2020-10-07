import React from 'react';
import icon from './Image/icon.svg';
import './App.css';

const TopBar = () => {
  return (
    <div className="Top-bar">
      <img src={icon} className="App-logo" alt="logo" />
      <h2 className="Top-text">Пульс АТИ</h2>
    </div>
  );
}

export default TopBar;