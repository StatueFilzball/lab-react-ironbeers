import BeerImage from "../assets/beers.png"
import RandomBeerImage from "../assets/random-beer.png"
import NewBeerImage from "../assets/new-beer.png"
import { Link } from "react-router-dom"


function Homepage(){



    return(
        <div>

            <Link style={{ textDecoration: 'none' }} to={"/beers"}>
                <div className="hpBox">
                    <img src={BeerImage} alt="beer_image"/>
                    <h2>All Beers</h2>
                    <p className="greyText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={"/random-beer"}>    
            <div className="hpBox">
                    <img src={RandomBeerImage} alt="beer_image"/>
                    <h2>Random Beer</h2>
                    <p className="greyText" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={"/new-beer"}>
            <div className="hpBox">
                    <img src={NewBeerImage} alt="beer_image"/>
                    <h2>New Beer</h2>
                    <p className="greyText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </Link>

        </div>
    )
}

export default Homepage