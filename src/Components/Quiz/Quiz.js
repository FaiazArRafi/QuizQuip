import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData().data
    const { questions } = quiz
    return (
        <div>
            <h2>{quiz.name}</h2>
            {
                questions.map(x => <QuizDetails
                    key={x.id}
                    x={x}
                ></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;