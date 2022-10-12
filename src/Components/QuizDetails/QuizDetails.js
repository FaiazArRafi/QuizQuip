import React from 'react';
import QuizFInal from '../QuizFinal.js/QuizFInal';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './QuizDetails.css'

const QuizDetails = ({ x }) => {
    const { options, question } = x;

    return (
        <div className='options'>
            <h4 style={{ color: 'white' }}>{question}</h4>
            <FontAwesomeIcon className='icon' icon={faEye}></FontAwesomeIcon>
            <div className='grid-details'>
                {
                    options.map(y => <QuizFInal
                        key={y.id}
                        y={y}
                    ></QuizFInal>
                    )
                }
            </div>
        </div>
    );
};

export default QuizDetails;