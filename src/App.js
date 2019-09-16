import React from 'react';
import Header from './components/Header.js'
import NavigationBar from './components/NavigationBar.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className='app'>
        <NavigationBar/>
        <Header/>
        <div className='projects' style={{ height:1000, backgroundImage:'linear-gradient(#212121, #848484)' }} />
      </div>
  );
}

export default App;
