function Place(places){
    return(
        <div className="place-card">
            <div className="place-card-header">
                <img className="place-card-img" src={require('../images/'+ places.img)}/>
                <div className={places.spots>7 ? "best-spot" : "d-none"}>Many spots to visit</div>
            </div>
            <div className="place-card-body">
                <h3>{places.name}</h3>
                <p>{places.description}</p>
            </div>
        </div>
    )
}
export default Place