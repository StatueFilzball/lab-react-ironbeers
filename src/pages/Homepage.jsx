import BeerImage from "../assets/beers.png"
import RandomBeerImage from "../assets/random-beer.png"
import NewBeerImage from "../assets/new-beer.png"
import { Link } from "react-router-dom"


function Homepage(){



    return(
        <div>

            <Link to={"/beers"}>
                <div>
                    <img src={BeerImage} alt="beer_image"/>
                    <h2>All Beers</h2>
                    <p>Lorem ipsum</p>
                </div>
            </Link>

            <Link to={"/random-beer"}>    
                <div>
                    <img src={RandomBeerImage} alt="beer_image"/>
                    <h2>Random Beer</h2>
                    <p>Lorem ipsum</p>
                </div>
            </Link>

            <Link to={"/new-beer"}>
                <div>
                    <img src={NewBeerImage} alt="beer_image"/>
                    <h2>New Beer</h2>
                    <p>Lorem ipsum</p>
                </div>
            </Link>

        </div>
    )
}

export default Homepage