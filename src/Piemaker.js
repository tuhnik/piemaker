import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function Piemaker (props){
   let [state, setState] = useState({values: null, colors: null})

   useEffect(()=>{
    console.log("updated piemaker", "props: " + props)
    let values = []
    let colors = []

    for(let o in props.data) {
      values.push(scale(props.data[o].duration, 0, 720, 0, 100));
      colors.push(generateColor(props.data[o].label));
    }
    setState({values, colors})
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
  
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
  
  const generateColor = (str) =>{
    if(str === "nothing") return "#f9f3f3a6"
    if(str === "Light") return "#f3de21"
  }
  
  
  export default Piemaker;