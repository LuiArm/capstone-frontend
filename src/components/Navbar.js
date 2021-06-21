import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav_icon">
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a className="active_link" href="/dashboard">Admin</a>
                <a href="/study">Study</a>
                <a href="/flashcards">Deck</a>
                
            </div>
        </nav>

    )
}

export default Navbar;