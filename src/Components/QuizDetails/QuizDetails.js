import React from 'react';
import { Toast } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import QuizFInal from '../QuizFinal.js/QuizFInal';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AutohideExample from '../Toast/Toast';
import './QuizDetails.css'

const QuizDetails = ({ x, questions }) => {
    const { options, question } = x;
    // console.log(x.correctAnswer)
    const iconAnswer = (x) => {
        console.log(x.correctAnswer)
        return (x.correctAnswer)
    }
    const val = iconAnswer(x.correctAnswer)


    return (
        <div className='options'>
            <h4 style={{ color: 'white' }}>{question}</h4>
            <FontAwesomeIcon className='icon' onClick={iconAnswer(x)} icon={faEye}>{val}</FontAwesomeIcon>
            <div className='grid-details'>
                {
                    options.map(y => <QuizFInal
                        key={y.id}
                        y={y}
                        x={x}
                    ></QuizFInal>
                    )
                }
            </div>
        </div>
    );
};

export default QuizDetails;