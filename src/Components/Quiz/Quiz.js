import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData().data
    const { questions } = quiz
    // console.log(questions)
    return (
        <div>
            <h2>{quiz.name}</h2>
            {
                questions.map(x => <QuizDetails
                    key={x.id}
                    x={x}
                    questions={questions}
                ></QuizDetails>)
            }
            {
                // questions.map(x => console.log(x))
            }

        </div>
    );
};

export default Quiz;