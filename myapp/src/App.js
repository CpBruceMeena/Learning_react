import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component{

  state = {
    ninjas: [
      {name: 'Ram', age:30, belt: 'black', id:1},
      {name: 'Sam', age:35, belt: 'Red', id:2},
      {name: 'Col', age:23, belt: 'temp', id:3}
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
