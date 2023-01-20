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
               <div>
             
                    <div>
                        <img style={{height: 150}} src={beer.image_url} alt="beer_image" />
                    </div>
    
                    <div>
                        <div>
                        <h2>{beer.name}</h2>
                        <p>{beer.attenuation_level}</p>
                        </div>
                        <div>
                        <p>{beer.tagline}</p>
                        <p>{beer.first_brewed}</p>
                        </div>
                        <p>{beer.description}</p>
                        <p>{beer.contributed_by}</p>
                    </div>

                </div>        
           )
}

export default SingleBeerBox