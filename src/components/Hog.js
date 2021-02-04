import React, { useState } from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";


const pigImageObj = {
    'Augustus Gloop': augustus_gloop,
    'Babe': babe,
    'Bailey': bailey,
    'Cherub': cherub,
    'Galaxy Note': galaxy_note,
    'Leggo My Eggo': leggo_my_eggo, 
    'Peppa': peppa, 
    'Piggy smalls': piggy_smalls,
    'Piglet': piglet,
    'Porkchop': porkchop,
    'Trouble': trouble,
    'Truffle Shuffle': truffle_shuffle,

}

function Hog({ name, specialty, greased, weight, highestMedal }) {
    const [hidden, setHidden] = useState(true)

    function handleClick(e){
        // console.log("click")
        setHidden(hidden => !hidden)
    }
    return(
        <div className="pigTile" onClick={(e) => handleClick(e)}>
            <div className="name">{name}</div>
            <img src={pigImageObj[name] }/>
            {hidden ? null : <div className="specialty">{specialty}</div>}
            {hidden ? null : <div className="greased">{greased ? "Greased" : "Not Greased"}</div>}
            {hidden ? null : <div className="weight">{weight}</div>}
            {hidden ? null : <div className="highestMedal">{highestMedal}</div>}
        </div>
    )
}

export default Hog;