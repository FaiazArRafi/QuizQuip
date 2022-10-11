import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizUI from '../QuizUI/QuizUI';
import './Home.css'

const Home = () => {
    const quizzes = useLoaderData();
    console.log(quizzes)


    return (
        <div>
            <div className='home-info'>
                <img src="https://thumbs.dreamstime.com/b/quiz-time-concept-words-made-alphabet-letters-colorful-notes-178911059.jpg" alt="quiz pic" />
                <div className='info'>
                    <h2>Quiz Instructions</h2>
                    <p><small>The quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module. No data will be collected on the website regarding your responses or how many times you take the quiz. <br />

                        Each question in the quiz is of multiple-choice or "true or false" format. Read each question carefully, and click on the button next to your response that is based on the information covered on the topic in the module. <br />

                        After responding to a question, click on the "Next Question" button at the bottom to go to the next questino. After responding to the 8th question, click on "Close" on the top of the window to exit the quiz. <br /></small></p>
                </div>
            </div>
            <div className='grid'>
                {
                    quizzes.data.map(quiz => <QuizUI
                        key={quiz.id}
                        quiz={quiz}
                    ></QuizUI>)
                }

            </div>
        </div >
    );
};

export default Home;