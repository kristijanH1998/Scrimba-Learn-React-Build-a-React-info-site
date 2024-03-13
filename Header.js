function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="image" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header();