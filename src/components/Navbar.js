import React, { Component } from "react";
import "./Navbar.css"

export default class Navbar extends Component {
    render() {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <a className="active_link" href="/dashboard">Admin</a>
                <a href="/profile">Profile</a>
                <a href="/flashcards">Deck</a>    
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a href="/" className="button is-primary">
                            <strong>Register</strong>
                        </a>
                        <a href="/login" className="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    )
 }
}
