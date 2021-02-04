import React, {useState} from "react";
import Nav from "./Nav";
import HogsList from "./HogsList"
import FilterHog from "./FilterHog"


import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState(true)
  const filteredHogs = hogs.filter((hog) => greased ? hog.grease : false)

  return (
    <div className="App">

      <Nav />
      <FilterHog filteredHogs={filteredHogs}/>
      <HogsList hogs={hogs}/>
    </div>
  );
} 

export default App;
