import React from 'react';

import Operations from '../Operations/Operations';

import './MainPage.css';

const MainPage = () => {
  return (
    <main className="app">
      {/* <!-- BALANCE --> */}
      <div className="balance">
        <div>
          <p className="balance__label">Current balance</p>
          <p className="balance__date">
            As of <span className="date">05/03/2037</span>
          </p>
        </div>
        <p className="balance__value">0000€</p>
      </div>

      {/* <!-- MOVEMENTS --> */}
      <div className="movements">
        <div className="movements__row">
          <div className="movements__type movements__type--deposit">2 deposit</div>
          <div className="movements__date">3 days ago</div>
          <div className="movements__value">4 000€</div>
        </div>
        <div className="movements__row">
          <div className="movements__type movements__type--withdrawal">
            1 withdrawal
          </div>
          <div className="movements__date">24/01/2037</div>
          <div className="movements__value">-378€</div>
        </div>
      </div>

      {/* <!-- SUMMARY --> */}
      <div className="summary">
        <p className="summary__label">In</p>
        <p className="summary__value summary__value--in">0000€</p>
        <p className="summary__label">Out</p>
        <p className="summary__value summary__value--out">0000€</p>
        <p className="summary__label">Interest</p>
        <p className="summary__value summary__value--interest">0000€</p>
        <button className="btn--sort">&downarrow; SORT</button>
      </div>
      

      <Operations/>

      {/* <!-- LOGOUT TIMER --> */}
      <p className="logout-timer">
        You will be logged out in <span className="timer">05:00</span>
      </p>
    </main>
  );
};

export default MainPage;