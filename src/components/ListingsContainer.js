import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {
 

  function handleListingDelete(id) {
    const updatedListings = listings.filter(
      (listing) => 
      listing.id !==id
    )
    setListings(updatedListings)
  }


  return (
    <main>

      <ul className="cards"> 
        {listings.map((l) => {
          return (<ListingCard
          key={l.id}
          listings={l}
          onDeleteListing={handleListingDelete}
            />)
        })
      }
      </ul>
    </main>
  );
}

export default ListingsContainer;
