import React from 'react';
import { Toast } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

import AutohideExample from '../Toast/Toast';
import './QuizDetails.css'

const QuizDetails = ({ x, questions }) => {
    const { options, question } = x;
    // console.log(questions)

    let message;
    const handle = () => {

        questions.map(x => x.correctAnswer === options.map(y => y) ? message = <p style={{ color: 'white' }}>'yes'</p> : message = <p style={{ color: 'white' }}>'no'</p>)

        console.log()

        // questions === questions.correctAnswer ? <p>"yes"</p> : <p>'sorry'</p>
        // if (questions[0].options[0] === questions[0].correctAnswer) {
        //      style={{ color: 'white' }}>Please, buy at least one item !!!</p>
        // }
        // else {
        //      = 
        // }


    }


    return (
        <div className='options'>
            <h4 style={{ color: 'white' }}>{question}</h4>
            <div className='grid-details'>
                {
                    options.map(y => <div className='option-grid'
                        key={y.id}>
                        <Toaster />
                        <div >
                            <button onClick={handle()} className='btn-opt' size="lg">{y}</button>
                        </div>
                    </div>)

                }


                {message}
            </div>
        </div>
    );
};

export default QuizDetails;