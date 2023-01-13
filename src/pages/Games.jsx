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
        </div>
      </section>
    );
  }
}

export default Games;
