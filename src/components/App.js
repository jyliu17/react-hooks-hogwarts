import React, {useState} from "react";
import Nav from "./Nav";
import HogsList from "./HogsList"
import FilterHog from "./FilterHog"


import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState(true)
  
  return (
    <div className="App">

      <Nav />
      <FilterHog greased={greased} onSetGreased={setGreased}/>
      <HogsList hogs={hogs}/>
    </div>
  );
} 

export default App;
