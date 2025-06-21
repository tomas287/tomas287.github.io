import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import user from '../assets/userBackground.png'; 
import './ProfileView.css';
import logo from '../assets/logo.png';
import experienceImg from '../assets/experience.jpg';
import skillsImg from '../assets/skills.jpg';
import projectImg from '../assets/projects.jpg';
import contactMeImg from '../assets/contactMe.jpg';

const profileContent = {
    recruiter: {
        video: "/assets/se7en.mp4",
    },
    developer: {
        video: "/assets/mr-robot2.mp4"
    },
    friend: {
        video: "/assets/breaking-bad.mp4"
    },
};

const forYouItems = [
  {name: 'Experience', season: 'S1 E1', img: experienceImg},
  {name: 'Skills', season: 'S1 E2', img: skillsImg},
  {name: 'Projects', season: 'S1 E3', img: projectImg},
  {name: 'Contact Me', season: 'S1 E4', img: contactMeImg},
];

const ProfileView = () => {
    const { type } = useParams();
    const profile = profileContent[type];
    const aboutMeRef = useRef(null);

    if (!profile) {
        return <p>Profile not found.</p>;
    }

    const scrollToAboutMe = (e) => {
        e.preventDefault();
        aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <div className="profileHeader">
                <img className='logoHeader' alt='' src={logo}></img>
                <div className='menuOptions'>
                    <span>Home</span>
                    <span>Experience</span>
                    <span>Skills</span>
                    <span>Projects</span>
                    <span>Publications</span>
                    <span>Contact Me</span>
                </div>
                <div>
                    <img src={user} title='Icon made by Freepik from www.flaticon.com' alt='' className="changeProfile"></img>
                </div>
            </div>
            <div className="profileView">
                <video src={profile.video}  autoPlay loop muted playsInline className="profileVideo"/>
 
                <div className='profileVideoText'>
                    <h1>Tomás Martins - Computer Science Major</h1>
                    <p>Hi, I'm Tomás — a Computer Science major passionate about building creative and practical software. <a href='#' onClick={scrollToAboutMe}>Scroll down</a> to learn more about me, my experience, and the projects I've worked on.</p>
                    <div className='buttonsDiv'>
                        <button id='resume' onClick={() => window.open('https://drive.google.com/drive/folders/1jCzgGlVudGqlpwu9kI20hoI65aSJfjuF?usp=drive_link')}>▶ <b>Resume</b></button>
                        <button id='linkedin' onClick={() => window.open('https://linkedin.com/in/tomás-martins-9bb921360')}><b>Linkedin</b></button>
                    </div>
                </div>
            </div>
            <div className='moreAboutMeContainer'>
                <div className='forYouContainer'>
                    <h2>For You</h2>
                    <div id='forYouContent' ref={aboutMeRef} className='forYouContent'>
                        {forYouItems.map((item) => (
                                  <div
                                    key={item.name}
                                    className="item"
                                    // onClick={() => handleClick(profile.name)}
                                  >
                                    <img src={item.img} alt={item.name} className="itemImg"></img>
                                    <div>{item.season} <b>{item.name}</b></div>
                                  </div>
                                ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;