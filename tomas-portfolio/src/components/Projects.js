import Header from './Header';
import './Projects.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import pomodoroTimer from '../assets/pomodoroTimer.png';
import detectionFrame from '../assets/detectionFrame.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1e1e1f',
//   ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#ffffff',
}));

const SmallItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#313131ff',
//   ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#ffffff',
  padding: '8px',
}));

const Projects = () => {
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
                                <img className='projectsImg' src={pomodoroTimer}></img>
                                <b>PomodoroTimer</b>
                                <p><small>Developed a Pomodoro timer web application to help users manage work and break intervals efficiently.</small></p>
                                {/* <Grid container spacing={2} marginTop={1.5} alignItems="stretch">
                                    <Grid size={1000}>
                                        <SmallItem className='technologies'>
                                            <p><small>a</small></p>
                                        </SmallItem>
                                    </Grid>
                                    <Grid size={1000}>
                                        <SmallItem className='technologies'>
                                            <p><small>a</small></p>
                                        </SmallItem>
                                    </Grid>
                                </Grid> */}
                            </Item>
                        </Grid>
                        <Grid size={4}>
                            <Item className='projectsEntry'>
                                <img className='projectsImg' src={detectionFrame}></img>
                                <b>Smashing Insights</b>
                                <p><small>Developed a web application that focuses on improving video analysis of racket sports through the use of object detection and tracking.</small></p>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Projects;