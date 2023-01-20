import axios from "axios"
import { useEffect, useState } from "react"

function SingleBeerBox(props){

const {id} = props
const [beer, setBeer] = useState({})

useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => {
            setBeer(response.data)
            console.log("RESPONSEDATA===>", response.data)
        })
}, [id])



    return (        
        <div className="card mb-3" style={{maxWidth: 540}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={beer.image_url} style={{height: "fit-content"}} className="img-fluid rounded-start" alt="beer_image" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <h5 className="card-title">{beer.name}</h5>
            <p className="card-text"><small className="text-muted">{beer.attenuation_level}</small></p>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <p className="card-text greyText">{beer.tagline}</p>
              <p className="card-text"><small className="text-muted">{beer.first_brewed}</small></p>
            </div>
            <p className="card-text greyText">{beer.description}</p>
      
              <p className="card-text"><small className="text-muted">Created by: {beer.contributed_by}</small></p>
            </div>
          </div>
        </div>
      </div> 
           )
}

export default SingleBeerBox