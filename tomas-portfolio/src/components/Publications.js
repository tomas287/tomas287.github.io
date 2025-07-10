import './Publications.css';
import Header from './Header';
import arrow from '../assets/downArrow.png'
import objDetectProt from '../assets/objDetectPrototype.png'
import manualAnnotation from '../assets/manualAnnotation.png'



const Publications = () => {
    return (
        <div className="experienceContainer">
            <Header></Header>
            <div className='experienceContent'>
                <p><small>PUBLICATIONS</small></p>
                <h1>Smashing Insights: Prototyping a Video-Based System For Racket Sports</h1>
                <div className='experienceEntry'>
                    <video src={"/assets/detection.mp4"}  autoPlay loop muted playsInline id='novaFCT'/>
                    {/* <img src={novaFCT} id='novaFCT'></img> */}
                    <div className='educationContent'>
                        <p><small>ABOUT</small></p>
                        <div className='experienceEntryTextDiv'>
                            <p className='experienceEntryTextP'><a href='https://doi.org/10.1145/3706599.3719865'>This research paper</a> introduces a web-based system that focuses on improving video analysis of racket sports through the use of <span>object detection</span> and <span>tracking</span>.</p>
                            <p className='experienceEntryTextP'>It extends and builds upon the research conducted during my master's thesis.</p>
                            <p className='experienceEntryTextP'>Padel was chosen due to its recent global popularity and the unique challenges it presents to computer vision models.</p>
                            <p className='experienceEntryTextP'>This work was published in the <a href='https://chi2025.acm.org/'>ACM CHI 2025 Conference</a>, held in Yokohama, Japan.</p>
                        </div>
                    </div>
                </div>
                <div className='scrollDiv'>
                    <p><small>SCROLL DOWN TO VIEW MORE</small></p>
                    <img src={arrow} title='Icon made by Freepik from www.flaticon.com' alt='' className="scrollArrow"></img>
                </div>
                <div className='experienceEntry'>
                    <div className='workContent'>
                        <p><small>PROTOTYPE</small></p>
                        <div className='experienceEntryTextDiv'>
                            <p className='experienceEntryTextP'>A user-centered approach was used to identify user needs and assess the benefits of a video-based system for padel racket sports.</p>
                            <p className='experienceEntryTextP'>Initially, a prototype was developed with 4 functionalities to illustrate to users the possibilities for potential features that such a system could present inspired by the research in other racket sports.</p>
                            <p className='experienceEntryTextP'>Overall, participants responded positively and showed interest in video analysis features for padel.</p>
                        </div>
                    </div>
                    <img src={objDetectProt} id='novaFCT'></img>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='experienceEntry'>
                    <img src={manualAnnotation} id='novaFCT'></img>
                    <div className='educationContent'>
                        <p><small>DATASET</small></p>
                        <div className='experienceEntryTextDiv'>
                            <p className='experienceEntryTextP'>After the development and testing of the prototype, a dataset and a web application were created.</p>
                            <p className='experienceEntryTextP'>The dataset contained over 1,500 manually annotated images, randomly selected from various professional padel matches in the World Padel Tour.</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='experienceEntry'>
                    <div className='workContent'>
                        <p><small>FEATURES</small></p>
                        <h1>Object Detection</h1>
                        <div className='experienceEntryTextDiv'>
                            <p className='experienceEntryTextP'>The web application included 4 main features: object detection, player tracking, heatmaps, and player trajectories.</p>
                            <p className='experienceEntryTextP'>The object detection feature identified players, the ball, rackets, the net, and the serve lines.</p>
                        </div>
                    </div>
                    <video src={"/assets/detection.mp4"}  autoPlay loop muted playsInline id='novaFCT'/>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='experienceEntry'>
                    <video src={"/assets/playerHighlight.mp4"}  autoPlay loop muted playsInline id='novaFCT'/>
                    <div className='educationContent'>
                        <div className='withoutSmallTitle'>
                            <h1>Player Tracking</h1>
                            <p className='experienceEntryTextP'>The player tracking feature followed each player individually and highlighted the selected player's performance.</p>
                            <p className='experienceEntryTextP'>Users could switch between players and assign custom names.</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='experienceEntry'>
                    <div className='workContent'>
                        <div className='withoutSmallTitle'>
                            <h1>Heatmap</h1>
                            <p className='experienceEntryTextP'>The heatmap feature included two versions: static and dynamic.</p>
                            <p className='experienceEntryTextP'>Detection data was used to draw the court, while tracking data generated the heatmaps.</p>
                        </div>
                    </div>
                    <video src={"/assets/heatmap.mp4"}  autoPlay loop muted playsInline id='novaFCT'/>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='experienceEntry'>
                    <video src={"/assets/trajectory.mp4"}  autoPlay loop muted playsInline id='novaFCT'/>
                    <div className='educationContent'>
                        <div className='withoutSmallTitle'>
                            <h1>Player Trajectory</h1>
                            <p className='experienceEntryTextP'>The player trajectory feature is similar to the dynamic heatmap, offering a different visual representation of player movements during the game.</p>
                            <p className='experienceEntryTextP'>Feedback on all features remained positive, mirroring the results from the prototype phase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Publications;