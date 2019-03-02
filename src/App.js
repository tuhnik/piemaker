import React, { useState, useEffect } from "react";
import Piemaker from "./Piemaker.js";
import json from "./data.json";

function App(props) {
  let [state, changeData] = useState({ data: null });

  useEffect(() => {
    console.log("App mounted");
    changeData({ data: json[0].data });
    let interval = window.setInterval(()=>{
      console.log(state.data)
    }, 5000)

    return () => window.clearInterval(interval);
  }, []);

  useEffect(()=>{
    
  })
 


  if (!state.data) return <span />;
  return (
    <div className="App" style={{ width: "50%", height: "600px" }}>
      <Piemaker data={state.data} />
    </div>
  );
}

export default App;
