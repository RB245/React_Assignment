import react from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
    return (
        <nav className='Navbar'>
            <ul className='links'>
                <li><a href="/">Home</a></li>
                <li><a href="#">My Cart</a></li>
                <li><a href="/offers">Offers</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;