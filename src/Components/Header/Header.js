import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2>Quiz Crackers</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/quiz'>Quiz</Link>
            </div>
        </nav>
    );
};

export default Header;