import {useState} from "react";

function FilterHog({ greased, onSetGreased }) {
    
    function handleGreaseFilter(){
        onSetGreased()
    }
    
    return (
        <div className="filter">
            <h5>Greased hog filters</h5>
            <button onClick={() => console.log("click")}>All</button>
            <button>Greased</button>
            <button>Not Greased</button>
        </div>
    )
}

export default FilterHog;