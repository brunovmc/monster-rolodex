import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
    };
    console.log('constructor');
  }
  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) =>
        this.setState(
          () => 
          {
            return {monsters: users};
          },
          () =>
          {
            console.log(this.state);
          }
        )
      )
  }
  render(){
    console.log('render');
    return (
      <div className="App">
        <input onChange={(event)=>
        {
          let searchInput = event.target.value.toLocaleLowerCase();
          const filteredMonsters = this.state.monsters.filter((monster)=>{
            return monster.name.toLocaleLowerCase().includes(searchInput)
          })
          console.log(filteredMonsters)    
          console.log(searchInput)
          this.setState(()=>{
            return{monsters:filteredMonsters};
          });
        }} 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
        />
        {
          // this.state.monsters.filter((monster)=>monster.name.includes(searchInput)).map((filteredMonster)=>{(console.log(filteredMonster))})
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
