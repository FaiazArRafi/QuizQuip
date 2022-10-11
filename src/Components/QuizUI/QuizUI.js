import React from 'react';
import './QuizUI.css'
import Button from 'react-bootstrap/Button';

const QuizUI = ({ quiz }) => {
    const { name, logo } = quiz
    return (
        <div className='grid'>
            <div className='quiz-ui'>
                <img src={logo} alt="" />
                <h2>{name}</h2>
                <Button className='btn-quiz' variant="primary" size="lg">Start Now</Button>
            </div>
        </div>
    );
};

export default QuizUI;