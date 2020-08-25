import React from "react";




function Header() {
    const nav = {
        backgroundColor: 'black',
        height: "6em",
        
    };
    
    var phantom = {
        display: 'block',
        padding: '20px',
        height: '100px',
        width: '100%',
    }
    return(
        <div>
        <nav className="navbar fixed-top navbar-expand-md justify-content-end" style={nav}>
            <h3 id="nameHead">| Alexander Garcia | Email: alexg97343@gmail.com</h3>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-caret-square-down fa-2x navLinks"></i>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                <a className="navbar-brand navLinks" href="/about">About</a>
                <a className="navbar-brand navLinks" href="/portfolio">Portfolio</a>
                <a className="navbar-brand navLinks" href="/contact">Contact</a>
            </div>
        </nav>
        <div style={phantom} />
        </div>
    );
}

export default Header;