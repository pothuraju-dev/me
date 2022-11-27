//index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import sriramImage from './images/sriram.jpg'
// import cssImage from './images/css.png'
// import htmlImage from './images/html.png'
// import jsImage from './images/js.png'
// import reactImage from './images/react.png'

// const headerStyle = {
//     backgroundColor: '#61DBFB',
//     fontFamily: 'Helvetica Neue',
//     padding: 25,
//     lineHeight: 1.5
// }

// const header = (
//     <header style={headerStyle}>
//         <div className='header-wrapper'>
//             <h1>Welcome to 30 Days Of React</h1>
//             <h2>Getting Started React</h2>
//             <h3>JavaScript Library</h3>
//         </div>
//     </header>
// )

// const mainStyle = {
//     backgroundColor: '#F3F0F5'
// }

// const main = (
//     <main style={mainStyle}>
//         <p>Prerequisite to get started react.js</p>
//         <ul>
//             <li>HTML</li>
//             <li>CSS</li>
//             <li>JavaScript</li>
//         </ul>
//     </main>
// )

// const footerStyle = {
//     backgroundColor: '#61DBFB'
// }

// const footer = (
//     <footer style={footerStyle}>
//         <p>Copyright 2020</p>
//     </footer>
// )

// const app = (
//     <div>
//         {header}
//         {main}
//         {footer}
//     </div>
// )

// Injecting data to JSX element
/**
const welcome = "Welcome to 30 days of react";
const title = 'Getting Started React';
const subtitle = 'JavaScript Library'
const author = {
    firstName: 'Sriram',
    lastName: "Kumar"
};
const date = 'Oct 2, 2020'

const header = (
    <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: { date}</small>
        </div>
    </header>
)

const numOne = 3
const numTwo = 2

const result = (
    <p>
        {numOne} + {numTwo} = {numOne + numTwo}
    </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
    <p>
        {' '}
        {author.firstName} {author.lastName} is {age} years old
    </p>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
    <div>
        <img src={ sriramImage} alt='sriram image'/>
    </div>
)

const main = (
    <main>
        <div className='main-wrapper'>
            <p>
                Prerequisite to get started{' '}
                <strong>
                    <em>react.js</em>
                </strong>
                :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
            {user}
        </div>
    </main>
)

const copyRight = 'Copyright 2020'

const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p>{ copyRight}</p>
        </div>
    </footer>
)

const app = (
    <div className="app">
        {header}
        {main}
        {footer}
    </div>
)
*/

// Importing Media Objects in React
/**
import sriramImage from './images/sriram.jpg'

const user = (
    <div>
        <img src={sriramImage} alt='sriram image'/>
    </div>
)
*/

/**
const headerStyle = {
    textAlign: 'center'
}

const header = (
    <header style={headerStyle}>
        <div className='header-wrapper'>
            <h2>Front End Technologies</h2>
        </div>
    </header>
)

const main = (
    <main>
        <div className='main-wrapper'>
            <img src={cssImage} alt="css image" /> 
            <img src={htmlImage} alt="html image" /> 
            <img src={jsImage} alt="js image" /> 
            <img src={reactImage} alt="react image" /> 
        </div>
    </main>
)

const app = (
    <div className='app'>
        {header}
        {main}
    </div>
)
*/

/**
const inputsData = [
    { placeholder: "First Name", type:"text" },
    { placeholder: "Last Name",type:"text" }, 
    { placeholder: "Email" ,type:"email"},
]

const inputs = inputsData.map((input)=><input className='form-input' placeholder={input.placeholder} type={input.type}></input>)
const button = <button className='form-btn'>Subscribe</button>
const app = (
    <>
        <div className='app'>
            <h1>Subscribe</h1>
            <h3>Sign up with your email address to receive news and updates.</h3>
            {inputs}
            <div>
                {button}
            </div>
        </div>
    </>
)
*/
const profileImage = <img src={sriramImage} alt='profile image' className='profile-image' />

const user = ({ name: "Sri Ram Kumar", role: "Software Developer 2", location: 'Hyderabad', join_date:"May 12, 2022"
 });
const userBlock = (
    <div>
        <h2>{user.name}</h2>
        <p>{user.role}, {user.location}</p>
    </div>
)

const skills = ['HTML', 'CSS', 'JavaScript', 'Sass', 'React', 'Redux', 'Node', 'MongoDB', 'Python',
    'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']
const skillsBadges = skills.map((skill) => <span className='badge'>{skill}</span>)

const app = (
    <div className='app'>
        <div>
            {profileImage}
            {userBlock}
        </div>
        <div>
            <h4>Skills</h4>
            {skillsBadges}
        </div>
        <p>{ user.join_date}</p>
    </div>
)

const rootElement = document.getElementById('root')
var root = ReactDOM.createRoot(rootElement)
root.render(app)