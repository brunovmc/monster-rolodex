import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '182ef233',
        },
        {
          name: 'Frank',
          id: '182ef333',
        },
        {
          name: 'Jacky',
          id: '182ff233',
        },
        {
          name: 'Andrei',
          id: '182efa33',
        },        
      ]
    };
  }
  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
