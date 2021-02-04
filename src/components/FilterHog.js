import { useState } from "react";

function FilterHog({ greased, onSetGreased, filteredHogs }) {
  function handleGreaseFilter(event) {

    console.log(event.target)
    // filteredHogs(event.target.option)
  }

const grease = {
    "All": filteredHogs
}

  return (
    <div class="dropdown">
      <select onChange={() => handleGreaseFilter()}>
        Dropdown
        <option classNAme="All">All</option>
        <option classNAme="Grease">Greased</option>
        <option classNAme="Not Greased">Not Greased</option>
      </select>
    </div>
  );
}

export default FilterHog;

// <div className="filter">
//     <h5>Greased hog filters</h5>
//     <button onClick={() => console.log("click")}>All</button>
//     <button onClick={() => console.log("click")}>Greased</button>
//     <button onClick={() => console.log("click")}>Not Greased</button>
// </div>
