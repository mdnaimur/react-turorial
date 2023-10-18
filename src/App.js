import React, { Component } from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
  state = {
    characters: [
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

    ],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  };

  render() {

    const { characters } = this.state
    return (
      <div className="container">

        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

export default App;
