import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import './ProfileView.css';
import experienceImg from '../assets/experience.jpg';
import skillsImg from '../assets/skills.jpg';
import projectImg from '../assets/projects.jpg';
import publicationsImg from '../assets/publications.jpg';
import contactMeImg from '../assets/contactMe.jpg';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

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
  {name: 'Experience', season: 'S1 E1', img: experienceImg, path: 'experience'},
  {name: 'Skills', season: 'S1 E2', img: skillsImg, path: 'skills'},
  {name: 'Projects', season: 'S1 E3', img: projectImg, path: 'projects'},
//   {name: 'Publications', season: 'S1 E4', img: publicationsImg, path: 'publications'},
  {name: 'Contact Me', season: 'S1 E5', img: contactMeImg, path: 'contact-me'},
];

const ProfileView = () => {
    const navigate = useNavigate();
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

    const handleClick = (newPage) => {
        navigate(`/${newPage}`);
    };

    return (
        <div>
            <Header></Header>
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
                                    onClick={() => handleClick(item.path)}
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