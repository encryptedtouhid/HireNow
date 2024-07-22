import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header>
      <h1>My Web Application</h1>
      <img src="my-logo.png" alt="My Logo" />
      <SearchBar />
    </header>
  );
}

export default Header;