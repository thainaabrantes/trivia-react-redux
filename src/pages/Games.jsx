import React, { Component } from 'react';
import Header from '../components/Header';
import Timer from '../components/Timer';

class Games extends Component {
  render() {
    return (
      <section>
        <div>
          <Header />
          <Timer />
          <h1>Games</h1>
        </div>
      </section>
    );
  }
}

export default Games;
