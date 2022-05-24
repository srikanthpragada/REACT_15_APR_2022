import React, { useState, useEffect } from 'react'
import { CONTACTS_URL } from './constants'
import $ from 'jquery'


export default function ListContacts() {
    const [contacts, setContacts] = useState([])

    useEffect(function () {
        getContacts();
    }, [])

    function getContacts() {
        // URL and success callback 
        $.get(CONTACTS_URL,
            (result) => {
                setContacts(result)
            }
        ) // get
    }

    function removeContact(id) {
       // remove contact object with given id from contacts array 

    }

    function deleteContact(id) {
        // Make AJAX request to server to delete contact with given id 
        $.ajax(
            {
                url: `${CONTACTS_URL}/${id}`,
                method: 'delete',
                success: function () {
                    alert("Contact deleted successfully!")
                    getContacts();
                    // removeContact(id)
                },
                error: function (error) {
                    console.log(error)
                    alert("Sorry! Could not delete contact!")
                }
            }
        )

    }
    
    return (
      <>
       <h4>List of Contacts</h4>
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
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
      </>
  )
}
