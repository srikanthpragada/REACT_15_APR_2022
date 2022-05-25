import React, {useState} from 'react'
import $ from 'jquery'
import { CONTACTS_URL } from './constants'

export default function AddContact() {
  let [contact, setContact] = useState({ name : "", email: "", mobile: '' })

  function changeValue(event) {
    var name = event.target.name;
    var value = event.target.value;
    setContact({ ...contact, [name]: value })
  }

  function addContact(event) {
    event.preventDefault()
    // make ajax request for post 
    $.ajax(
      {
        url: CONTACTS_URL,
        method: 'post',
        data: contact,
        success: function () {
          alert("Contact Added Successfully!")
          // Clear textboxes by resetting contact object 
          setContact({ name: "", email: "", mobile: '' })
        },
        error: function (error) {
          alert("Sorry! Could not add contact!")
        }
      }
    )
    
    
  }


  return (
    <>
      <h3>Add New Contact</h3>

      <form onSubmit={addContact}>
        Name <br />
        <input type="text" value={contact.name} required  autocomplete='false'
             onChange={changeValue} name="name" />
        <p></p>

        Email <br />
        <input type="email" value={contact.email} required autoComplete='false'
            onChange={changeValue} name="email" />
        <p></p>

        Mobile <br />
        <input type="number"  value={contact.mobile} 
            onChange={changeValue} name="mobile" />
        <p></p>
        <input type="submit" value="Add Contact" />
      </form>
    </>
  )
}

