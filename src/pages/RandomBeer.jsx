import RandomBeerBox from "../components/RandomBeerBox"
import Navbar from "../components/Navbar";

function RandomBeer(props){
const {beers} = props
const beerPicker = Math.floor((beers.length * Math.random() + 1))
const beer = beers[beerPicker]

    return(
        <div>
<Navbar />
<RandomBeerBox beer={beer} />

        </div>
        )
}

export default RandomBeer