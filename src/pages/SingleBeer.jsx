import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import SingleBeerBox from "../components/SingleBeerBox"


function SingleBeer(){

const { id } = useParams()

    return (
        <div>
        <Navbar />
        <SingleBeerBox id={id} />
        </div>
    )
}

export default SingleBeer