import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from "react-router-dom";

import './ContactMe.css';
import linkedin from '../assets/linkedin.png'
import github from '../assets/githubWhite.png'
import Header from './Header';


const ContactMe = () => {
    const [state, handleSubmit] = useForm("xpwlyeyr");
    const navigate = useNavigate();
    
    if (state.succeeded) {
        navigate("/thank-you")
    }

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
                                <b>Socials:</b>
                                <img onClick={() => window.open('https://www.linkedin.com/in/tom%C3%A1s-martins-9bb921360/')} src={linkedin}></img>
                                <img onClick={() => window.open('https://github.com/tomas287')} src={github}></img>
                            </div>
                        </div>
                    </div>
                    <div className='formContainer'>
                        <form onSubmit={handleSubmit}>
                            <div className='namesContainer'>
                                <div className='names'>
                                    <label htmlFor="firstName">First Name</label>
                                    <textarea id='firstName' name='First Name'/>
                                </div>
                                <div className='names' id='lastName'>
                                    <label htmlFor="lastName">Last Name</label>
                                    <textarea id='lastName' name='Last Name'/>
                                </div>
                            </div>
                            <div className='emailContainer'>
                                <label htmlFor="email">Email</label>
                                <textarea id='email' type="email" name='Email'/>
                                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                            </div>
                            <div className='msgContainer'>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message"/>
                                <ValidationError prefix="Message" field="Message" errors={state.errors}/>
                            </div>
                            <div id='sendButtonDiv'>
                                <button type="submit" disabled={state.submitting}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;