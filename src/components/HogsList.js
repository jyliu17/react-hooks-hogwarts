import Hog from "./Hog";


function HogsList({hogs}) {
    const porkersList = hogs.map((hog) => {
        return (
            <Hog  
            name={hog.name} 
            specialty={hog.specialty} 
            greased={hog.greased} 
            weight={hog.weight}
            highestMedal={hog["highest medal achieved"]} 
            hog={hog}
            />   
        )
    })
    console.log(porkersList)
    return(
        <div className="hogsList">
            <h3>List of hogs</h3>
            {porkersList} 
        </div>
    )
}

export default HogsList;