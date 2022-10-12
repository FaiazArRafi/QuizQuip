import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                <img style={{ width: '2rem' }} src={`https://image.winudf.com/v2/image/c2UuZmVvbWVkaWEucXVpemthbXBlbi5mci5saXRlX2ljb25fMTUyODExMzYyN18wODY/icon.png?w=&fakeurl=1`} alt="" />
                <h2>QuizQuip</h2>
            </div>
            <div>
                <Link className='header-name' to='/'>Home</Link>
                <Link className='header-name' to={`/quiz/${1}}`}>Quiz</Link>
                <Link className='header-name' to='/statistics'>Statistics</Link>
                <Link className='header-name' to='/Blog'>Blog</Link>
            </div>
        </nav >
    );
};

export default Header;