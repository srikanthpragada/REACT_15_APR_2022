import React, { useState } from 'react'

export default function Contacts() {
    const [contacts, setContacts] = useState([])

    function addContact(contact) {
        setContacts([...contacts, contact])
        //console.log(contacts)
    }

    function deleteContact(index) {
        let selectedContacts = contacts.filter((c, idx) => idx !== index)
        setContacts(selectedContacts)
    }

    return (
        <>
            <h2>Contacts</h2>
            <AddContact add={addContact} />
            <p></p>
            {contacts.length > 0 ? <ListContacts deleteFun={deleteContact} contacts={contacts}/> : null }
        </>
    )
}

function AddContact(props) {
    const [contact, setContact] = useState({ name: '', email: '' })

    function addContact(e) {
        e.preventDefault()
        props.add(contact)

    }

    function changeValue(e) {
        let name = e.target.name  // it can be name or email 
        let value = e.target.value
        setContact({ ...contact, [name]: value })
    }

    return (
        <>
            <form onSubmit={addContact}>
                Name <br />
                <input type="text" name="name" required
                    value={contact.name}
                    onChange={changeValue}></input>
                <p></p>
                Email <br />
                <input type="email" name="email" required
                    value={contact.email}
                    onChange={changeValue}></input>
                <p></p>
                <button>Add</button>
            </form>
        </>
    )
}

function ListContacts(props) {
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.contacts.map((c, idx) =>
                            <tr key={idx}>
                                <td>{c.name}</td>
                                <td>{c.email}</td>
                                <td>
                                    <button onClick={ () => props.deleteFun(idx)}>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>

            </table>
        </>
    )
}