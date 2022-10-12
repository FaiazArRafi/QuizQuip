import React from 'react';
import './QuizUI.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const QuizUI = ({ quiz }) => {
    const { name, logo, total } = quiz

    return (
        <div className='grid-ui'>
            <div className='quiz-ui'>
                <img src={logo} alt="" />
                <h2>{name}</h2>
                <h6>Total Quiz: {total}</h6>
                <Link to={`/quiz/${quiz.id}`}><Button className='btn-quiz'>Start Now</Button></Link>
            </div>
        </div>
    );
};

export default QuizUI;