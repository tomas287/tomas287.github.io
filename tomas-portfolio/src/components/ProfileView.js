import React from 'react';
import { useParams } from 'react-router-dom';
import user from '../assets/userBackground.png'; 
import './ProfileView.css';
import logo from '../assets/logo.png';

const profileContent = {
    recruiter: {
        video: "/assets/se7en.mp4",
        // logo: "/assets/logo.png"
    },
    developer: {
        video: "/assets/mr-robot2.mp4"
    },
    friend: {
        video: "/assets/breaking-bad.mp4"
    },
};

const ProfileView = () => {
    const { type } = useParams();
    const profile = profileContent[type];

    if (!profile) {
        return <p>Profile not found.</p>;
    }

    return (
        <div>
            <div className="profileHeader">
                <img className='logoHeader' src={logo}></img>
                <div>
                    <p>Home</p>
                    <p>Experience</p>
                    <p>Skills</p>
                    <p>Projects</p>
                    <p>Contact Me</p>
                </div>
                <div>
                    <img src={user} className="profileImg"></img>
                </div>
            </div>
            <div className="profileView">
                <video src={profile.video}  autoPlay loop muted playsInline className="profileVideo"/>
 
                <div className='profileVideoText'>
                    <h1>Tomás Martins - Computer Science Major</h1>
                    <p>Hi, I'm Tomás — a Computer Science major passionate about building creative and practical software. Scroll down to learn more about me, my experience, and the projects I've worked on.</p>
                    <div className='buttonsDiv'>
                        <button id='resume' onClick={() => window.open('https://linkedin.com/in/tomás-martins-9bb921360')}>▶ <b>Resume</b></button>
                        <button id='linkedin' onClick={() => window.open('https://linkedin.com/in/tomás-martins-9bb921360')}><b>Linkedin</b></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;