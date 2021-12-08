import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { FooterContainer } from './containers/footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <FooterContainer />
    </div>
  );
}

export default App;
