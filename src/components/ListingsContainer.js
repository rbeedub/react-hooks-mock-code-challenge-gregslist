import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  const listingItems = listings.map((listing) => {
    return(
      <ListingCard key={listing.id} {...listing}/>
    )
  })
  return (
    <main>
      <ul className="cards">
        {listingItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
