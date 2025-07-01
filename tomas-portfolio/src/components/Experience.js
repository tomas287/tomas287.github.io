import arrow from '../assets/downArrow.png'
import './Experience.css';
import novaFCT from '../assets/nova fct.jpeg'
import atlantico from '../assets/atlantico.jpg'
import Header from './Header';
import { useNavigate } from 'react-router-dom';



const Experience = () => {
    const navigate = useNavigate();

    const handleClick = (newPage) => {
        navigate(`${newPage}`);
    };

    return (
        <div className="experienceContainer">
            <Header></Header>
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
                            <p className='experienceEntryTextP'>During the development of my master's thesis, which focuses on the field of computer vision, an article related to the thesis was published at the CHI 2025 conference, in Yokohama, Japan. See the <a onClick={() => handleClick("/publications")}>Publications</a> section for more information.</p>
                        </div>
                    </div>
                </div>
                <div className='scrollDiv'>
                    <p><small>SCROLL DOWN TO VIEW MORE</small></p>
                    <img src={arrow} title='Icon made by Freepik from www.flaticon.com' alt='' className="scrollArrow"></img>
                </div>
                <div className='experienceEntry'>
                    <div className='workContent'>
                        <p><small>WORK</small></p>
                        <h1>.NET Developer</h1>
                        <p><small>Apr 2022 — Jul 2022</small></p>
                        <div className='experienceEntryTextDiv'>
                            <p className='experienceEntryTextP'>During my final BSc semester, I completed a 4-month internship at Banco ATLANTICO Europa as a .NET Developer.</p>
                            <p className='experienceEntryTextP'>During the internship, I implemented a new OTP (One-Time Password) message delivery system focusing on improving security and reliability.</p>
                            <p className='experienceEntryTextP'>I worked mainly with <span>C#</span>, <span>ASP.NET</span>, and <span>Microsoft SQL Server</span>, followed <span>agile methodologies</span>, and used <span>Git</span> and <span>Azure DevOps</span> for version control and project tracking.</p>
                        </div>
                    </div>
                    <img src={atlantico} id='novaFCT'></img>
                </div>
            </div>
        </div>
    );
};

export default Experience;