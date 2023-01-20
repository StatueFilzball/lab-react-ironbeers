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
                
                <Link style={{ textDecoration: 'none' }} to={`/beers/${beer._id}`}>

                    <div key={beer._id} className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={beer.image_url} style={{height: "150px"}} className="img-fluid rounded-start" alt="beer_image" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text greyText">{beer.tagline}</p>
        <p className="card-text"><small className="text-muted">Created by: {beer.name}</small></p>
      </div>
    </div>
  </div>
</div>
                </Link>
                </div>
            })}
        </div>
    
    


    
    
    
    
    
    
    
    )

}

export default BeerBox

