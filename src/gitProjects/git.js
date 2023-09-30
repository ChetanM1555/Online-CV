import './git.css';
import profileImage from './b.jpg';

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
            <p>{edu.qualification}</p>
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
                <br></br><span className="dots"> • • • • • </span>
            </li>
            ))}
        </ul>
        <br></br>
        <p><a href="gitProjects/git.js">View my Git projects</a></p>
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
        email: 'chetanmanilal1@gmail.com',
        phone: '083 981 6944',
        linkedin: '083 981 6944',
    },

    aboutMe: [
        {
        description: "I'm a dedicated Full Stack developer with expertise in Java and Python. I embrace Test-Driven Development (TDD) to ensure robust and efficient code. Git is my trusted version control tool, and I'm comfortable with collaboration. My passion lies in crafting responsive user interfaces and designing efficient server-side logic. I'm committed to clean code and staying current with industry trends. I thrive on challenges, constantly seeking innovative solutions. Outside of coding, I'm an avid learner, an enthusiast of emerging technologies, and a team player. Let's connect and build something amazing together!",
        },
    ],
    experiences: [
        {
        title: 'Race Director',
        company: 'Kenilworth Karting',
        date: 'Jan 2014 - 2017',
        description: 'Being a team leader, working with customers',
        },
        {
        title: 'Journalist/Writer',
        company: 'Value Insurance',
        date: 'Nov 2019 - Mar 2020',
        description: 'Writing for a website about',
        },
        {
        title: 'Tech Mentor',
        company: 'WeThinkCode__',
        date: 'Sep 2023 - Present',
        description: 'Helping the first years at WeThinkCode_ navigate through their first year',
        },
    ],
    education: [
        {
        qualification: 'Certificate: High School Diploma',
        school: 'Rosebank Collage',
        date: '2011',
        },
        {
        qualification: 'Certificate: Ongoing',
        school: 'WeThinkCode_',
        date: '2022 - present',
        },
    ],
    skills: ['Java','Python', 'Git', 'JavaScript', 'React', 'CSS' ],
};

const App = () => <CV data={cvData} />;

export default App;
