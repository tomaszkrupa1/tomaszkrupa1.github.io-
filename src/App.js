import React from 'react';
import './App.css';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main className="App-main">
          <PortfolioSection />
        </main>
      </div>
    </div>
  );
}

export default App;