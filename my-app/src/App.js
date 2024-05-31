import React from 'react';
import './App.css';

/* Import the default placeholder profile picture. Copyright-free from the web. */
import profilePic from './blank_profile_picture.png';

function App() {
  return (
    <div className="App">
      <header className="App-header header-size">
        <h1>Trip To Italy</h1>
        <p className="text-size">23 users saving for this goal</p>
        <p className="text-size">64 users achieved this goal</p>
        <p className="text-size">Users expected to achieve within a similar timeframe as you:</p>
        <div className="profile-container">
          <div className="profile">
            <p className="profile-name">George</p>
            <img src={profilePic} alt="George's profile" className="profile-pic" />
            <button>Follow</button>
          </div>
          <div className="profile">
            <p className="profile-name">Ivy</p>
            <img src={profilePic} alt="Ivy's profile" className="profile-pic" />
            <button>Follow</button>
          </div>
        </div>
        <h2>Featured Stories & Tips</h2>
        <div className="profile-tip">
          <img src={profilePic} alt="Tim's profile" className="profile-pic-tip" />
          <p className="profile-name-tip">Tim</p>
        </div>
        <p className="text-size">Buy round-trip tickets as soon as you know the starting date of your trip. Always keep track of the ticket price!</p>
        <div className="profile-tip">
          <img src={profilePic} alt="Olivia's profile" className="profile-pic-tip" />
          <p className="profile-name-tip">Olivia</p>
        </div>
        <p className="text-size">If you are going to Firenze, try Trattoria Dall'oste!! It's so delicious, definitely worth the price.</p>
        <a href="#">Read More Stories & Tips</a>
        <h2>Memory Collection</h2>
        <div>
          <p className="text-size">John</p>
          <p className="text-size">Freya</p>
          <p className="text-size">Isabella</p>
        </div>
      </header>
    </div>
  );
}

export default App;