import React, {useState} from "react";

function ListingCard({listings, onDeleteListing}) {
  const {id, description, image, location}= listings
  const [favorite, setFavorite] = useState(true)

  function handleFavorite(e) {
    setFavorite((favorite) => !favorite)
  }

  function handleDelete () {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then(()=>{
      onDeleteListing(id)
    })
  }




  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
