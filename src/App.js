import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Matchmaking from './components/Matchmaking';
import Chat from './components/Chat';
import Discovery from './components/Discovery';
import Favorites from './components/Favorites';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Matchmaking />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
