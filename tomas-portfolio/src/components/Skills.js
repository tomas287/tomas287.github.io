import Header from './Header';
import './Skills.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import java from '../assets/java.png';
import python from '../assets/python.png';
import cSharp from '../assets/cSharp.png';
import cPlus from '../assets/cPlus.png';
import kotlin from '../assets/kotlin.png';
import c from '../assets/c.png';
import nodeJs from '../assets/nodeJs.png';
import dotnet from '../assets/dotnet.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import bootstrap from '../assets/bootstrap.png';
import yolo from '../assets/yolo.png';
import opencv from '../assets/opencv.png';
import p5 from '../assets/p5.png';
import sql from '../assets/sql.png';
import microsoftsql from '../assets/microsoftsql.png';
import agile from '../assets/agile.png';
import github from '../assets/github.png';
import devops from '../assets/devops.png';
import docker from '../assets/docker.png';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1e1e1f',
//   ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#ffffff',
}));

const Skills = () => {
    return (
        <div className='skillsContainer'>
            <Header></Header>
            <div className='skillsContent'>
                <div className='skillsEntry'>
                    <p><small>SKILLS</small></p>
                    <h1>Backend</h1>
                    <Grid container spacing={2} alignItems="stretch">
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={java}></img>
                                <b>Java</b>
                                <p><small>Main language used during BSc to teach object-oriented programming (OOP) principles.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={python}></img>
                                <b>Python</b>
                                <p><small>Used in many courses throughout the degree, as well as in my master's thesis.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={cSharp}></img>
                                <b>C#</b>
                                <p><small>Main language used during my internship at Banco ATLANTICO Europa and also in some university courses.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={dotnet}></img>
                                <b>.NET</b>
                                <p><small>Main framework used during my internship at Banco ATLANTICO Europa.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={nodeJs}></img>
                                <b>Node.js</b>
                                <p><small>Used in some courses throughout the degree, as well as in my master's thesis.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={kotlin}></img>
                                <b>Kotlin</b>
                                <p><small>Used in some courses throughout the degree.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={cPlus}></img>
                                <b>C++</b>
                                <p><small>Used in some courses throughout the degree.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={c}></img>
                                <b>C</b>
                                <p><small>Used in some courses throughout the degree.</small></p>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
                <div className='skillsEntry'>
                    <h1>Frontend</h1>
                    <Grid container spacing={2}>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={html}></img>
                                <b>HTML/CSS</b>
                                <p><small>Used in many courses throughout the degree, as well as in my master's thesis.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={js}></img>
                                <b>JavaScript</b>
                                <p><small>Used in many courses throughout the degree, as well as in my master's thesis.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={react}></img>
                                <b>React</b>
                                <p><small>Used in some courses throughout the degree.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={bootstrap}></img>
                                <b>Bootstrap</b>
                                <p><small>Used in some courses throughout the degree, as well as in my master's thesis.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={p5}></img>
                                <b>p5.js</b>
                                <p><small>Used during my master's thesis.</small></p>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
                <div className='skillsEntry'>
                    <h1>Computer Vision</h1>
                    <Grid container spacing={2}>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={yolo}></img>
                                <b>YOLO</b>
                                <p><small>Computer vision model used during my master's thesis.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={opencv}></img>
                                <b>OpenCV</b>
                                <p><small>Used in some courses throughout the degree.</small></p>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
                <div className='skillsEntry'>
                    <h1>Databases</h1>
                    <Grid container spacing={2}>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={sql}></img>
                                <b>SQL</b>
                                <p><small>Used during my internship at Banco ATLANTICO Europa, as well as in some courses throughout the degree.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={microsoftsql}></img>
                                <b>Microsoft SQL Server</b>
                                <p><small>Used during my internship at Banco ATLANTICO Europa, as well as in some courses throughout the degree.</small></p>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
                <div className='skillsEntry'>
                    <h1>Other Tools & Methodologies</h1>
                    <Grid container spacing={2}>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={agile}></img>
                                <b>Agile Methodologies</b>
                                <p><small>Used during my internship at Banco ATLANTICO Europa, as well as in some courses throughout the degree.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={github}></img>
                                <b>GitHub</b>
                                <p><small>Used during my internship at Banco ATLANTICO Europa, as well as in many courses throughout the degree.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={devops}></img>
                                <b>Azure DevOps</b>
                                <p><small>Used during my internship at Banco ATLANTICO Europa.</small></p>
                            </Item>
                        </Grid>
                        <Grid size={3}>
                            <Item className='itemEntry'>
                                <img className='skillsImg' src={docker}></img>
                                <b>Docker</b>
                                <p><small>Used in some courses throughout the degree.</small></p>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Skills;