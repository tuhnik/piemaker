import React, { Component } from 'react';
import Piemaker from "./Piemaker.js"
import json from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Piemaker data={json[1].data} width={500} height={500}/>
      </div>
    );
  }
}


export default App;
