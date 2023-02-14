import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import ListingsContainer from "./ListingsContainer";

function App() {

    const baseURL = "http://localhost:6001/listings"

    const [listingsArr, setListingArr] = useState([])
    const [search, setSearch] = useState("")
  
    useEffect(() => {
      fetch(baseURL)
        .then(res => res.json())
        .then(listingsArr => setListingArr(listingsArr))
    }, [])
  
    const filteredListings = listingsArr.filter((listing) => {
      return listing.description.toLowerCase().includes(search.toLowerCase())
    })

    function onFormSubmit(newListing){
      setListingArr([...listingsArr, newListing])
    }


  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <Form onFormSubmit={onFormSubmit} />
      <ListingsContainer listings={filteredListings}/>
    </div>
  );
}

export default App;
