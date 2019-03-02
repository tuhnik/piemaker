import React, { useState, useEffect, useRef } from "react";
import Piemaker from "./Piemaker.js";

function App(props) {
  let [state, changeState] = useState({ data: {x: 0, y: 100}, colors: [], speed: 1});





  useEffect(() => {
    console.log("App mounted");
  }, []);


  useInterval(() => {
    let newstate = {...state}
    let data = newstate.data
    data.x += newstate.speed
    data.y -= newstate.speed

    if(data.x > 99) {
      data.x = 0
      data.y = 100
      newstate.colors[0] = getRandomColor()
      newstate.colors[1] = getRandomColor()
    }

    changeState(newstate)
  }, 100);

 
 
  const sliderChanged = (e) => {
    let newstate = {...state}
    newstate.speed =  parseInt(e.target.value)
    changeState(newstate)
  }

  if (!state.data) return <span />;
  return (
    <div className="App" style={{ width: "25%"}}>
      <Piemaker data={state.data} colors={state.colors}/>
      <div className="data"><b>{JSON.stringify(state, null, 4).replace(/"/gi, "")}</b></div>
      <input type="range" min="0" max="25" value={state.speed} onChange={sliderChanged}/>
    </div>
  );
}

export default App;


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  });

  // set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}