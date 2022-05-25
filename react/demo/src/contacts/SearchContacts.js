import React, { useState } from 'react'
import { CONTACTS_URL } from './constants'
import $ from 'jquery'
import { useNavigate } from "react-router-dom";

export default function SearchContacts() {
  const [contacts, setContacts] = useState([])
  const [searchText, setSearchText] = useState()
  const [done, setDone] = useState(false)
  let navigate = useNavigate();

  function changeValue(event) {
    setSearchText(event.target.value)
  }

  function searchContacts() {
    // make an ajax request for contacts 
    const URL = `${CONTACTS_URL}?name_like=${searchText}`
    // URL and success callback 
    $.get(URL,
      (result) => {
        setContacts([...result])
        setDone(true)
      }
    ) // get
  }

  function removeContact(id) {
    setContacts(contacts.filter(c => c.id !== id))
  }

  function deleteContact(id) {
    // Make AJAX request to server to delete contact with given id 
    $.ajax(
      {
        url: `${CONTACTS_URL}/${id}`,
        method: 'delete',
        success: function () {
          alert("Contact deleted successfully!")
          //getContacts();
          removeContact(id)
        },
        error: function (error) {
          console.log(error)
          alert("Sorry! Could not delete contact!")
        }
      }
    )

  }

  function editContact(id) {
    navigate(`/edit/${id}`)
  }

  return (
    <>
      <h3>Search Contacts</h3>
      Name <input type="text" value={searchText} onChange={changeValue} />
      <button onClick={searchContacts}>Search</button>
      <p></p>
      {done && contacts.length > 0 ?
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map((contact) =>
                <tr key={contact.id}>
                  <td>{contact.name} </td>
                  <td>{contact.email} </td>
                  <td>{contact.mobile} </td>
                  <td className="text-center"
                    style={{ width: '20%' }}>
                    <button onClick={() => deleteContact(contact.id)}
                      className="btn btn-danger">Delete</button>
                    <button onClick={() => editContact(contact.id)}
                      className="btn btn-info">Edit</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        : done ? <h4>Sorry! No Contacts Found!!</h4> : null
      }
    </>





  )
}
