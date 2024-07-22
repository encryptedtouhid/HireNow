import React from 'react';
import logo from './assets/img/logo.svg';
import './App.css';
import Header from './pages/shared/header';
import Footer from './pages/shared/footer';
import HelloWorld from './pages/hello-world/HelloWorld';


function App() {
  return (
    <div>
       <Header />
      <HelloWorld />
      <Footer />
    </div>
  );
}

export default App;


