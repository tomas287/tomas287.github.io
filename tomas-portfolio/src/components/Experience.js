import user from '../assets/userBackground.png'; 
import logo from '../assets/logo.png';
import './Experience.css';
import novaFCT from '../assets/nova fct.jpeg'



const Experience = () => {
    return (
        <div className="experienceContainer">
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
            <div className='experienceContent'>
                <p><small>EXPERIENCE</small></p>
                <h1>My professional and academic background</h1>
                <div className='experienceEntry'>
                    <img src={novaFCT} id='novaFCT'></img>
                    <div className='educationContent'>
                        <p><small>EDUCATION</small></p>
                        <h1>Master's Degree in Computer Science</h1>
                        <p><small>Sep 2019 — Jan 2025</small></p>
                        <div className='experienceEntryTextDiv'>
                            <p className='experienceEntryTextP'>Graduated from NOVA School of Science and Technology in 2025 with a Master's Degree in Computer Science.</p>
                            <p className='experienceEntryTextP'>The course provided a strong foundation in both theorical and practical aspects of Computer Science and Engineering, while also focusing on collaborative projects that mirror professional environments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;