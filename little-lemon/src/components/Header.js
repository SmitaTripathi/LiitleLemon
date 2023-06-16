import React from 'react';

const Nav =() => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};



function Header() {
  return (
    <header>
        <img src="https://www.48hourslogo.com/oss/works/2022/01/12/135536140395/115168_45900_7388b824-b2f0-4ffa-ae56-58d13a637de8.jpg" alt="little lemon logo"/>
        <Nav/>
    </header>
  );
}

export default Header;