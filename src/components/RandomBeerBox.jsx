function RandomBeerBox(props){

const {beer} = props
console.log(beer)


    return (        
               <div style={{display: "flex"}}>
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

export default RandomBeerBox