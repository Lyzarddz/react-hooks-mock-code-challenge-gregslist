import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")
  const[listings, setListings] = useState([])


  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((resp) => resp.json())
    .then((data) => setListings(data)
    )
  },[])

  const listingCards = listings
  .filter((listing) =>  
  listing.description.toLowerCase().includes(search.toLowerCase()))


  function handleSearch(newSearch){
    setSearch(newSearch)
  }
  

  return (
    <div className="app">
      <Header onSearch={handleSearch} listingCards={listingCards}/>
      <ListingsContainer search={search} listings={listingCards} setListings={setListings}/>
    </div>
  );
}

export default App;
