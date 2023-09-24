import './App.css';
import profileImage from './b.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Set the viewport meta tag programmatically
const metaTag = document.createElement('meta');
metaTag.name = 'viewport';
metaTag.content = 'width=device-width, initial-scale=1';
document.getElementsByTagName('head')[0].appendChild(metaTag);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



const Header = ({ name, title }) => (
  <header>
    <div className="profile-picture">
      <img src={profileImage} alt="Profile" />
    </div>
    <h1>{name}</h1>
    <p>{title}</p>
  </header>
);

const Experience = ({ experiences }) => (
  <section className="experience">
    <h2>Experience</h2>
    <ul>
      {experiences.map((experience, index) => (
        <li key={index}>
          <h3>{experience.title}</h3>
          <p>{experience.company}</p>
          <p>{experience.date}</p>
          <p>{experience.description}</p>
        </li>
      ))}
      <div className="moving-character"></div>
    </ul>



  </section>
);

const AboutMe = ({ aboutMe }) => (
  <section className="experience">
    <h2>About Me:</h2>
    <div className="about-me-content">
      <ul>
        {aboutMe.map((aboutMe, index) => (
          <p key={index}>{aboutMe.description}</p>
        ))}
      </ul>
      <div className="moving-character1"></div>
    </div>
  </section>
);

const Education = ({ education }) => (
  <section className="education">
    <h2>Education</h2>
    <ul>
      {education.map((edu, index) => (
        <li key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.school}</p>
          <p>{edu.date}</p>
        </li>
      ))}
    </ul>
    <div className="moving-character2"></div>

  </section>
);


const CV = ({ data }) => (
  <div className="centered-content">
    <div className="skills">
      <Header name={data.name} title={data.title} />
      <div className="contact-details">
        <h2>Contact Details:</h2>
        <ul>
          <li>Email: {data.contact.email}</li>
          <li>Phone: {data.contact.phone}</li>
        </ul>
      </div>
      <h2>Skills:</h2>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <span className="dots"> • • • • • </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="content-column">
      <AboutMe aboutMe={data.aboutMe} />
      <Experience experiences={data.experiences} />
      <Education education={data.education} />
    </div>
  </div>
);



const cvData = {
  name: 'Chetan Manilal',
  title: 'Software Developer',

  contact: {
    email: 'chetan@example.com',
    phone: '+1234567890',
  },

  aboutMe: [
    {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  experiences: [
    {
      title: 'Changes',
      company: 'Kenilworth Karting',
      date: 'Jan 2014 - 2017',
      description: 'Being a team leader, working with customers',
    },
    {
      title: 'Race Director',
      company: 'Kenilworth Karting',
      date: 'Jan 2014 - 2017',
      description: 'Being a team leader, working with customers',
    },
  ],
  education: [
    {
      qualification: 'nqf 6',
      school: 'WeThinkCode_',
      date: '2022 - 2023',
    },
    {
      qualification: 'nqf 6',
      school: 'WeThinkCode_',
      date: '2022 - 2023',
    },
  ],
  skills: ['JavaScript', 'React', 'Git', 'Java', 'Python'],
};

const App = () => <CV data={cvData} />;

export default App;
