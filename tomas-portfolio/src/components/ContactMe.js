import './ContactMe.css';
import email from '../assets/email.png'
import like from '../assets/like.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/githubWhite.png'
import Header from './Header';


const ContactMe = () => {

    return (
        <div className='contactMeContainer'>
            <Header></Header>
            <div className='contactMeContent'>
                <h1>Contact Me</h1>
                <div className='textContainer'>
                    <div className='myInfo'>
                        <div className='introductionText'>
                            <h4>Get in Touch!</h4>
                            <p>I'm always open to discussing software engineering. Whether it's about a project, a job opportunity, or a friendly chat - feel free to reach out.</p>
                        </div>
                        <div className='socialsContainer'>
                            <div id='email' className='socialsContent'>
                                <b>Email:</b>
                                <a>tmc.martins@outlook.com</a>
                            </div>
                            <div id='socials' className='socialsContent'>
                                {/* <img className='indexImg' src={like}></img> */}
                                <b>Socials:</b>
                                <img onClick={() => window.open('https://www.linkedin.com/in/tom%C3%A1s-martins-9bb921360/')} src={linkedin}></img>
                                <img onClick={() => window.open('https://github.com/tomas287')} src={github}></img>
                            </div>
                        </div>
                    </div>
                    <div className='formContainer'>
                        <div className='namesContainer'>
                            <form className='names'>
                                <label><h4>First Name</h4>
                                    <textarea type="text" />
                                </label>
                            </form>
                            <form className='names' id='lastName'>
                                <label><h4>Last Name</h4>
                                    <textarea type="text" />
                                </label>
                            </form>
                        </div>
                        <div className='emailContainer'>
                            <form>
                                <label><h4>Email</h4>
                                    <textarea type="text" />
                                </label>
                            </form>
                        </div>
                        <div className='msgContainer'>
                            <form>
                                <label><h4>Message</h4>
                                    <textarea type="text" />
                                </label>
                            </form>
                        </div>
                        <div id='sendButtonDiv'>
                            <button><b>Send Email</b></button>
                        </div>
                    </div>
                        {/* <div className='namesContainer'>
                            <div className='names'>
                                <h4>First Name</h4>
                                <form>adsasd</form>
                            </div>
                            <div className='names'>
                                <h4>Last Name</h4>
                                <form>adsasd</form>
                            </div>
                        </div>
                        <div className='namesContainer'>
                            <div className='names'>
                                <h4>Email</h4>
                                <form>adsasd</form>
                            </div>
                        </div>
                        <div className='namesContainer'>
                            <div className='names'>
                                <h4>Message</h4>
                                <form>adsasd</form>
                            </div>
                        </div> */}
                </div>
            </div>
        </div>
    );
};

export default ContactMe;