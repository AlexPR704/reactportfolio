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
                    <p>
                    Goal driven and team oriented Full Stack Developer with a background in sales and customer service with a Full Stack Web Development Certificate - University of North Carolina. My time in this vigurous boot camp, I was able to acquire skills in Node.js, Express, Handlebars, SQL, JavaScript, CSS, HTML, and React. I’m able to participate and work on a diverse team while solving problems in high-stress environments to reach our goal. An expressive individual who has a desire to create applications that will be able to assist a company or individuals to make their lives easier. I want to be able to bring my technical skills and attention to detail to a company that is willing to help me grow and become a valuable asset to the team.
                    </p>
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