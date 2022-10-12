
import React from 'react';
import { Alert } from 'react-bootstrap';

const QuizFInal = ({ y, x }) => {

    const { options, question, correctAnswer } = x;
    console.log(y)

    let message;
    // questions.map(x => x.correctAnswer);

    const handle = (y, { correctAnswer }) => {
        y === correctAnswer ? message = <p style={{ color: 'white' }}>'no'</p> : message = <p style={{ color: 'white' }}>'no'</p>

        // console.log(y)
        // (=== y ? 
    }
    return (
        <div>

            <div >
                <button onClick={() => handle(y, { correctAnswer })} className='btn-opt' size="lg">{y}</button>
            </div>
            {message}
        </div>
    );
};

export default QuizFInal;