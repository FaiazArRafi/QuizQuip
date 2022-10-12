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
            <div className='qAndA'>
                <h4>Q: How does Context API works ?</h4>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br />
                    React.createContext() returns a consumer and a provider. "Provider" is a component that provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. "Consumer" as it happens is a component that consumes and uses the state.
                </p>
            </div>

        </div>
    );
};

export default Blog;