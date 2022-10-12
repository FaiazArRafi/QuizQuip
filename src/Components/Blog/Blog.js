import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='qAndA'>
                <h5>Q: What is the purpose of React Router ?</h5>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br />

                    React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. <br /></p>
            </div>

        </div>
    );
};

export default Blog;