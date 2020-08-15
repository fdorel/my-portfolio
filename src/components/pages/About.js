import React from 'react';
import Hero from '../Hero';
import Content from '../Content'

function About(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content className="centerText">
                <p className="display-4">Skills and knowledge that I use for Web Development</p>
                {/* Inspired by https://codepen.io/vikassingh1111/pen/xBPmbL */}
                <ul className="justify-content-center tilesWrap">
                    <li>
                        <h2>001</h2>
                        <h3>HTML5 and CSS3</h3>
                        <p>
                        HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it.<br/><br/>
                        HTML5 is the fifth and current major version of HTML, and subsumes XHTML. The current standard, the HTML Living Standard is developed by WHATWG,
                        which is made up of the major browser vendors (Apple, Google, Mozilla, and Microsoft), with the Living Standard also existing in an abridged version.
                        </p>
                        <br/><h6>Source: https://en.wikipedia.org/wiki/HTML5</h6>
                    </li>
                    <li>
                        <h2>02</h2>
                        <h3>Javascript and jQuery</h3>
                        <p>
                        Javascript, often abbreviated as JS, is a high-level, just-in-time compiled, object-oriented programming language that conforms
                        to the ECMAScript specification.
                        JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.<br/><br/>
                        Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages
                        and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated
                        JavaScript engine to execute it.
                        <br/><br/>jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling,
                        CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. Web analysis indicates that it is the most widely
                        deployed JavaScript library by a large margin,
                        having 3 to 4 times more usage than any other JavaScript library.<br/><br/>
                        jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications.
                        jQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library.
                        </p>
                        <br/><h6>Source: https://en.wikipedia.org/wiki/JavaScript<br/>https://en.wikipedia.org/wiki/JQuery</h6>
                    </li>
                    <li>
                        <h2>03</h2>
                        <h3>React and Material UI</h3>
                        <p>
                        React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook
                        and a community of individual developers and companies.<br/><br/>
                        React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly
                        changing data that needs to be recorded. <br/><br/>However, fetching data is only the beginning of what happens on a web page, which is
                        why complex React applications usually require the use of additional libraries for state management, routing, and interaction
                        with an API: Redux, React Router and axios are examples of such libraries.
                        <br/><br/>Material-UI is the world's most popular React UI framework. It is available as an npm package. Material-UI was designed
                        with the Roboto font in mind. You can start using Material-UI with minimal Front-end infrastructure, which is great for prototyping.
                        </p>
                        <br/><h6>Source: https://en.wikipedia.org/wiki/React_(web_framework)<br/>https://material-ui.com/getting-started/installation/</h6>
                    </li>
                </ul>
            </Content>

        </div>
    )
}

export default About
