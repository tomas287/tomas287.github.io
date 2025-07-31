import { useNavigate } from 'react-router-dom';

import Header from './Header';
import './Projects.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import pomodoroTimer from '../assets/pomodoroTimer.png';
import detectionFrame from '../assets/detectionFrame.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import bootstrap from '../assets/bootstrap.png';
import p5 from '../assets/p5.png';
import nodeJs from '../assets/nodeJs.png';
import python from '../assets/python.png';
import yolo from '../assets/yolo.png';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1e1e1f',
//   ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#ffffff',
}));

const Projects = () => {
    const navigate = useNavigate();

    const handleClick = (newPage) => {
        navigate(`${newPage}`);
    };

    return (
        <div className='skillsContainer'>
            <Header></Header>
            <div className='skillsContent'>
                <div className='skillsEntry'>
                    <p><small>PROJECTS</small></p>
                    {/* <h1>Backend</h1> */}
                    <Grid container spacing={2} alignItems="stretch">
                        <Grid size={4}>
                            <Item className='projectsEntry'>
                                <img className='projectsImg' src={pomodoroTimer} onClick={() => window.open('https://tomas287.github.io/PomodoroTimer/')}></img>
                                <b onClick={() => window.open('https://tomas287.github.io/PomodoroTimer/')}>PomodoroTimer</b>
                                <p><small>Developed a Pomodoro timer web application to help users manage work and break intervals efficiently.</small></p>
                                <div className='technologies'>
                                    <div className='technologyDiv'>
                                        <img src={html}></img>
                                        <p><small>HTML/CSS</small></p>
                                    </div>
                                    <div className='technologyDiv'>
                                        <img src={js}></img>
                                        <p><small>JavaScript</small></p>
                                    </div>
                                    <div className='technologyDiv'>
                                        <img src={bootstrap}></img>
                                        <p><small>Bootstrap</small></p>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                        <Grid size={4}>
                            <Item className='projectsEntry'>
                                <img onClick={() => handleClick("/publications")} className='projectsImg' src={detectionFrame}></img>
                                <b onClick={() => handleClick("/publications")}>Smashing Insights</b>
                                <p><small>Developed a web app that focuses on improving video analysis of racket sports through the use of object detection and tracking.</small></p>
                                <div className='technologies'>
                                    <div className='technologyDiv'>
                                        <img src={html}></img>
                                        <p><small>HTML/CSS</small></p>
                                    </div>
                                    <div className='technologyDiv'>
                                        <img src={js}></img>
                                        <p><small>JavaScript</small></p>
                                    </div>
                                    <div className='technologyDiv'>
                                        <img src={bootstrap}></img>
                                        <p><small>Bootstrap</small></p>
                                    </div>
                                    <div className='technologyDiv'>
                                        <img src={p5}></img>
                                        <p><small>p5.js</small></p>
                                    </div>
                                </div>
                                <div className='technologies'>
                                    <div className='technologyDiv'>
                                        <img src={nodeJs}></img>
                                        <p><small>Node.js</small></p>
                                    </div>
                                    <div className='technologyDiv'>
                                        <img src={python}></img>
                                        <p><small>Python</small></p>
                                    </div>
                                    <div className='technologyDiv'>
                                        <img src={yolo}></img>
                                        <p><small>YOLO</small></p>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Projects;