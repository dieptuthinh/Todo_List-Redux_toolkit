import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

Navbar.propTypes = {

};

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 bg-light justify-content-between">
            <Link to={"/"} className="navbar-brand ml-5">
                Home
            </Link>
            <div className="navbar-nav mr-5">
                <Link to={"/todo"} className="nav-item nav-link">
                    Todo List
                </Link>
                <Link to={"/note"} className="nav-item nav-link">
                    Note
                </Link>
                <Link to={"/contact"} className="nav-item nav-link">
                    Contact
                </Link>

            </div>
        </nav>



    );
}

export default Navbar;