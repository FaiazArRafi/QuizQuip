import React from 'react';
import './QuizUI.css'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

const QuizUI = ({ quiz }) => {
    const { name, logo } = quiz

    // const navigate = useNavigate();

    // const handleNavigate = () => {
    //     navigate(`/quiz/${quiz.Id}`);
    // }

    return (
        <div className='grid-ui'>
            <div className='quiz-ui'>
                <img src={logo} alt="" />
                <h2>{name}</h2>
                <Link to={`/quiz/${quiz.id}`}><Button className='btn-quiz' variant="primary" size="lg">Start Now</Button></Link>
            </div>
        </div>
    );
};

export default QuizUI;