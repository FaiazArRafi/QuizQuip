import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2>Quiz Crackers</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to={`/quiz/${1}}`}>Quiz</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/Blog'>Blog</Link>
            </div>
        </nav >
    );
};

export default Header;