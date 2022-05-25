import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import $ from 'jquery'
import { CONTACTS_URL } from './constants'

export default function UpdateContact() {
  let [contact, setContact] = useState({ name : "", email: "", mobile: '' })
  let { contactId }  = useParams();
   
  useEffect(() => {
    $.get(`${CONTACTS_URL}/${contactId}`,
      (contact) => {
        setContact(contact)
      }
    ) // get
  }, []
  )
    

  function updateContact(event) {
    // make ajax request for post 
    $.ajax(
      {
        url: `${CONTACTS_URL}/${contactId}`,
        method: 'PUT',
        data: contact,
        success: function () {
          alert("Contact Updated Successfully!")
        },
        error: function (error) {
          console.log(error)
          alert("Sorry! Could not update contact!")
        }
      }
    )
    
    event.preventDefault()
  }

  function changeValue(event) {
    var name = event.target.name;
    var value = event.target.value;
    setContact({ ...contact, [name]: value })
  }


  return (
    <>
      <h3>Update Contact</h3>

      <form onSubmit={updateContact}>
        Name <br />
        <input type="text" value={contact.name} required 
        onChange={changeValue} name="name" />
        <p></p>

        Email <br />
        <input type="email" value={contact.email} required 
        onChange={changeValue} name="email" />
        <p></p>

        Mobile <br />
        <input type="number" value={contact.mobile} 
        onChange={changeValue} name="mobile" />
        <p></p>
        <input type="submit" value="Update Contact" />
      </form>
    </>
  )
}
