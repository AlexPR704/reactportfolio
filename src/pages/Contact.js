import React from "react";
import Container from "../components/Container";

function Contact() {
    return(
        <Container>
            <div className="row mt-3">
                <div className="col-md mr-3">
                    <h2 id="contactHead">Get in touch with Me</h2>
                    <form action="https://formspree.io/xzbgpyaw" method="POST">
                        <label>Name: <input type="text" name="name" /></label><br />
                        <label>Email: <input type="text" name="_replyto" /></label><br />
                        <label>Message: <textarea name="message"></textarea></label><br />
                        <button type="submit" className="btn btn-light">Send</button>
                    </form>
                </div>
                <div className="col-md contactLinks ml-3">
                    <div className="contactBtn">
                        <a href="mailto:alexg97343@gmail.com">
                            <i className="fas fa-envelope fa-2x contactIcon"></i><br />
                            <span className="cLink">alexg97343@gmail.com</span>
                        </a>
                    </div>
                    <div className="contactBtn">
                        <a href="tel:980-233-0280">
                            <i className="fas fa-phone-square fa-2x contactIcon"></i><br />
                            <span className="cLink">980-233-0280</span>
                        </a>
                    </div>
                    <div className="contactBtn">
                        <a href="https://docs.google.com/document/d/1wtc8T6Iza-smwNFPrRL45X1Jdg5FhffbynO2zAZM-YE/edit?usp=sharing"  target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-file fa-2x contactIcon"></i><br />
                            <span className="cLink">Resume</span>
                        </a>
                    </div>  
                    <div className="contactBtn">
                        <a href="https://github.com/AlexPR704"  target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github fa-2x contactIcon"></i><br />
                            <span className="cLink">Github</span>
                        </a>
                    </div>
                    <div className="contactBtn">
                        <a href="https://www.linkedin.com/in/alexg704/"  target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x contactIcon"></i><br />
                            <span className="cLink">LinkedIn</span>
                        </a>
                    </div>  
                </div>
            </div>
        </Container>
    );
}

export default Contact;