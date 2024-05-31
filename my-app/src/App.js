import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trip To Italy</h1>
        <p>23 users saving for this goal</p>
        <p>64 users achieved this goal</p>
        <p>Users expected to achieve within a similar timeframe as you:</p>
        <div>
          <p>George <button>Follow</button></p>
          <p>Ivy <button>Follow</button></p>
        </div>
        <h2>Featured Stories & Tips</h2>
        <div>
          <p>Tim</p>
          <p>Buy round-trip tickets as soon as you know the starting date of your trip. Always keep track of the ticket price!</p>
        </div>
        <div>
          <p>Olivia</p>
          <p>If you are going to Firenze, try Trattoria Dall'oste!! It's so delicious, definitely worth the price.</p>
        </div>
        <a href="#">Read More Stories & Tips</a>
        <h2>Memory Collection</h2>
        <div>
          <p>John</p>
          <p>Freya</p>
          <p>Isabella</p>
        </div>
      </header>
    </div>
  );
}

export default App;
