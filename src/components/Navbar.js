import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/discovery">Discovery</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;
