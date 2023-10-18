import React, { Component } from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
      {
        name: 'Salman',
        job: 'Sales',
      },
      {
        name: 'Solaiman',
        job: 'Software Department',
      },
      {
        name: 'Zayed',
        job: 'Medical Team',
      },
      {
        name: 'Aliya',
        job: 'Marketing Dept.',
      },

    ]

    return (
      <div className="container">

        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
