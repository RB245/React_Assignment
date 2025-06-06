import react from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
    return (
        <nav className='Navbar'>
            <div class="nav-logo border">
                <div class="logo"></div>
            </div>
            <div class="nav-search">
                <select className='search-select'>
                    <option>All</option>
                </select>
                <input placeholder='Search' class="search-input"></input>
            </div>
            <ul className='links'>
                <li><a href="/">Home</a></li>
                <li><a href="/offers">Deals</a></li>
                <li><a href="#">My Cart</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;