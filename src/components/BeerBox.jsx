import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from 'react';


function BeerBox(props) {


const [beers, setBeers] = useState([])

useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            setBeers(response.data)
        })
}, [])


    return (
        <div>
            {beers.map((beer) => {
                return <div key={beer._id}>
                
                <Link to={`/beers/${beer._id}`}>
                <div style={{display: "flex"}}>
                    <div>
                        <img style={{height: 150}} src={beer.image_url} alt="beer_image" />
                    </div>
    
                    <div >
                        <h2>{beer.name}</h2>
                        <p>{beer.tagline}</p>
                        <p>Created by: {beer.name}</p>
                    </div>
                    </div>
                </Link>
                </div>
            })}
        </div>
    )

}

export default BeerBox

