import React from "react";
import ListContacts  from "./ListContacts";
import AddContact  from "./AddContact";
import SearchContacts  from "./SearchContacts";
import UpdateContact from "./UpdateContact";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

export default function Contacts() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* default child with index*/}
                    <Route index element={<ListContacts />} />
                    {/* child components */}
                    <Route path="list" element={<ListContacts />} />
                    <Route path="add" element={<AddContact />} />
                    <Route path="edit/:contactId" element={<UpdateContact />} />
                    <Route path="search" element={<SearchContacts />} />
                  
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


function Layout() {
    return (
        <div className="container">
            <h2>Contacts</h2>
            <nav className="nav navbar-expand-sm bg-primary">
                <Link className="nav-link text-white" to="/list">List Contacts</Link>
                <Link className="nav-link text-white" to="/search">Search Contacts</Link>
                <Link className="nav-link text-white" to="/add">Add Contact</Link>
            </nav>

            <p></p>
            {/* child component is placed in Outlet */}
            <Outlet />
        </div>
    )
}