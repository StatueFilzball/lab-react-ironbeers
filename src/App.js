import './App.css';
import { Routes, Route } from 'react-router-dom';
import Beers from "./pages/Beers"
import Homepage from "./pages/Homepage"
import NewBeer from "./pages/NewBeer"
import RandomBeer from "./pages/RandomBeer"
import SingleBeer from "./pages/SingleBeer"
import axios from "axios"
import { useState, useEffect } from 'react';





function App() {

  const [beers, setBeers] = useState([])

  useEffect(() => {
      axios.get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
              setBeers(response.data)
          })
  }, [])

  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Homepage />}></Route>
  <Route path="/beers" element={<Beers />}></Route>
  <Route path="/beers/:id" element={<SingleBeer />}></Route>
  <Route path="/random-beer" element={<RandomBeer beers={beers}/>}></Route>
  <Route path="/new-beer" element={<NewBeer />}></Route>
</Routes>

    </div>
  );
}

export default App;
