import React, { useState } from "react"

function Form( {onFormSubmit} ) {

    const initialData = {
        description:'',
        image:'',
        location:''
    }

    const [formData, setFormData] = useState(initialData)

    const handleFormChange = (e) => {
        setFormData({ ...formData,
            [e.target.name]: e.target.value })
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        fetch(`http://localhost:6001/listings`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then(onFormSubmit)
            
            .then(setFormData(initialData))
    }

  return (
    
    <form onSubmit={handleFormSubmit}>
      <input
        value={formData.description}
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleFormChange}
      />
      <input
        value={formData.image}
        type="text"
        name="image"
        placeholder="Image"
        onChange={handleFormChange}
      />
      <input
        value={formData.location}
        type="text"
        name="location"
        placeholder="Location"
        onChange={handleFormChange}
      />
      <input className="" type="submit" value="Add Listing"/>
    </form>
  )
} 


export default Form;

































// function handleFormChange(e) {
//     setFormData({
//         ...formData,
//         [e.target.name]: e.target.value
//     })
// }

// function handleFormSubmit(e) {
//     e.preventDefault()
//     setFormData(initialData)

//     fetch("http://localhost:6001/listings", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     })
//         .then(res => res.json())
//         .then(onFormSubmit)
// }