import React from "react";
import Container from "../components/Container";

function About() {
    return (
        <Container>
            <div className="row m-2 p-4">
                <div className="col-md">
                    <img src="/assets/images/aboutAlex.png" id="aboutImg" alt="Alexander Garcia" />    
                </div>
                <div className="col-md">  
                    <h3>
                    Thank you for taking the time to come view my portfolio page. I am 26 years old and I have decided to take control of my future to improve myself. I am currently attending UNCC Full Stack Developer Bootcamp.
                    </h3>
                </div>
            </div>
            <div className="skillList text-left">
                <h4 className="p-2">Technical Skills</h4> 
                <div className="row"> 
                    <div className="col-md">
                        <ul>
                            <li>Node.js</li>
                            <li>HTML and CSS, along with using CSS frameworks</li>
                            <li>JavaScript, ES6 and jQuery</li>
                            <li>MySQL and Sequelize</li>
                        </ul> 
                    </div>
                    <div className="col-md">
                        <ul>
                            <li>Web API's</li>
                            <li>React.js</li>
                            <li>MongoDB and Mongoose</li>
                        </ul> 
                    </div>
                </div>
            </div>
        </Container>
    );
  }


export default About;