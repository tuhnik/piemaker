import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class App extends Component {
    state= {values: null, colors: null}
    componentDidMount() {
        
      let values = []
      let colors = []
  
      for(let o in this.props.data) {
        values.push(scale(this.props.data[o].duration, 0, 720, 0, 100));
        colors.push(generateColor(this.props.data[o].label));
      }
  
      this.setState({values, colors})
      
    }
    render() {
      var data = [{
        values: this.state.values,
        showlegend: false,
        direction: "clockwise",
        hole: 0.4,
        sort: false,
        marker: {colors: this.state.colors},
        type: 'pie'
      }]
      return ( <Plot style={{width: this.props.width, height: this.props.height}}data={data}/>
      );
    }
  }
  
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
  
  const generateColor = (str) =>{
    if(str === "nothing") return "#ebebeb"
    if(str === "Light") return "yellow"
  }
  
  
  export default App;