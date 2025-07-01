import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import user from '../assets/userBackground.png'; 
import './Header.css';


const Header = () => {
    const navigate = useNavigate();

    const handleClick = (newPage) => {
        navigate(`${newPage}`);
    };

    return (
        <div className="profileHeader">
            <img className='logoHeader' alt='' src={logo}></img>
            <div className='menuOptions'>
                <a onClick={() => handleClick("/profiles")}>Home</a>
                <a onClick={() => handleClick("/experience")}>Experience</a>
                <a onClick={() => handleClick("/skills")}>Skills</a>
                <span>Projects</span>
                <span>Publications</span>
                <span>Contact Me</span>
            </div>
            <div>
                <img src={user} title='Icon made by Freepik from www.flaticon.com' alt='' className="changeProfile"></img>
            </div>
        </div>
    );
};

export default Header;