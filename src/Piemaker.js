import React, { Component, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';


// class Piemaker extends Component {
//   state = {values: {}, colors: []}

//   componentDidMount () {
//     let values = []
//     for(let o in this.props.data) {
//       values.push(this.props.data[o]);
//     }
//     this.setState({values, colors: this.props.colors})
//    }

//    componentDidUpdate(oprops){
//      if(oprops !== this.props){
//       let values = []
//       for(let o in this.props.data) {
//         values.push(this.props.data[o]);
//       }
//       this.setState({values, colors: this.props.colors})
//      }
//    }

//   render(){
    
//     let data = [{
//       values:  this.state.values,
//       showlegend: false,
//       direction: "clockwise",
//       hole: 0.7,
//       sort: false,
//       marker: {colors: this.state.colors},
//       type: 'pie',
//       hoverinfo: "none",
//       textinfo: "none",
//       textposition: "outside",
//     }]
//     let layout = {
//       autosize: true,
//       paper_bgcolor: "rgba(0,0,0,0)",
//       clickmode: "none",
//       dragmode: "none",
//       hovermode: "none",
//       barmode: "relative",
//       font: {
//         family: "Ubuntu, Arial, Helvetica, sans-serif",
//         size: 10,
//         color: "#7f7f7f"
//       },

//       margin: {
//           t: 0,
//           b: 0,
//           l: 0,
//           r: 0
//         }
//     }

//     let config = {
//       displayModeBar: false
//     };
//     return ( <Plot style={{width: "100%", height: "100%"}} data={data} layout={layout} config={config}/>
//       );
//   }
// }


function Piemaker (props){
  let [state, setState] = useState({values: null, colors: null})

  useEffect(()=>{
  let values = []
  for(let o in props.data) {
    values.push(props.data[o]);
  }
  setState({values, colors: props.colors})
  }, [props])

  let data = [{
    values: state.values,
    showlegend: false,
    direction: "clockwise",
    hole: 0.7,
    sort: false,
    marker: {colors: state.colors},
    type: 'pie',
    hoverinfo: "none",
    textinfo: "none",
    textposition: "outside",
  }]
  let layout = {
    autosize: true,
    paper_bgcolor: "rgba(0,0,0,0)",
    clickmode: "none",
    dragmode: "none",
    hovermode: "none",
    barmode: "relative",
    font: {
      family: "Ubuntu, Arial, Helvetica, sans-serif",
      size: 10,
      color: "#7f7f7f"
    },
    margin: {
        t: 0,
        b: 0,
        l: 0,
        r: 0
      }
  }

  let config = {
    displayModeBar: false
  };

  return ( <Plot style={{width: "100%", height: "100%"}} data={data} layout={layout} config={config}/>
  );
}




  
  export default Piemaker;