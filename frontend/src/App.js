import React from 'react';
import logo from './assets/img/logo.svg';
import './App.css';
import Header from './pages/shared/header';
import HelloWorld from './pages/hello-world/HelloWorld';


function App() {
  return (
    <div>
       <Header />
      <HelloWorld />
    </div>
  );
}

export default App;


