import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './ThankYou.css';

function ThankYou() {
    const navigate = useNavigate();

    const handleClick = (newPage) => {
        navigate(`${newPage}`);
    };

    return (
        <div id='thankYouContainer'>
            <Header></Header>
            <div id='thankYouContent'>
                <h1>Thank you!</h1>
                <p>Your message has been sent successfully.</p>
            </div>
            <div id='sendButtonDiv'>
                <button id='goToHomeBtn' onClick={() => handleClick("/profiles")}>
                    Go To Home Page
                </button>
            </div>
        </div>
    );
}

export default ThankYou;