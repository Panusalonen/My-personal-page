import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid className="resume-grid">
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign: "center"}}>
                            <img
                                alt="avatar"
                                src="../images/me.png"
                                style={{borderRadius:"50%", width: "75%", height: "auto", boxShadow: "0 0 5px"}}
                            />
                        </div>
                        <h2 style={{marginTop: "1em"}}>Panu Salonen</h2>
                        <h4 style={{color: "grey"}}>Web Developer</h4>
                        <hr style={{borderTop: "3px solid snow", width: "100%"}}/>
                        <p>Passionate to meet new people from different backgrounds. I have background in economics and entrepreneurship and recently turned a new page in my career as a developer.</p>
                        <p>I hope to join to an organization with a purposeful idea to which I could contribute with excitement. I am closely interested in sustainability as well as new technology and innovations.</p>
                        <hr style={{borderTop: "3px solid snow", width: "100%"}}/>
                        <h5>Address</h5>
                        <p>Dronheimer straße, Berlin GER</p>
                        <h5>Phone</h5>
                        <p>+358 (0) 44 501 6610</p>
                        <h5>Email</h5>
                        <p>panusalonen@gmail.com</p>
                        <h5>Webpages</h5>
                        <p>https://www.linkedin.com/in/panusalonen<br/>https://www.github.com/panusalonen</p>
                        <hr style={{borderTop: "3px solid snow", width: "100%"}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2008}
                            endYear={2013}
                            schoolName="University Of Turku"
                            degree="Economics Undergrad."
                            schoolDescription="Major in Management, Minor in Corporate Law"
                            />
                        <Education
                            startYear={2018}
                            endYear={2018}
                            schoolName="Spiced Academy"
                            degree="Full-Stack Web Developer | Certificate"
                            schoolDescription="Full-Stack Web Developer bootcamp course in Berlin. During the course I finished several projects with different development frameworks and libraries. Main focus on JavaScript (including ES6), HTML5/CCS3, Node+Express, React+Redux, Vue, Handlebars, PostgreSQL, Socket.io, Three.js, Canvas, Git, Heroku."
                        />
                        <hr style={{borderTop: "3px solid", width: "100%"}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2016}
                            endYear={2017}
                            jobName="Investment Advisor"
                            companyName="Alexandria Broker Firm"
                            jobDescription="Commissioned investment advising for newly acquired customers. I sold investments, funds, planned savings and insurances such as Generali for private customers and entrepreneurs."
                            />
                        <Experience
                            startYear={2014}
                            jobName="Promoter | DJ | Event Manager"
                            companyName="Basement Grey Records"
                            jobDescription="Promotion, event production, event management and marketing."
                            />
                        <Experience
                            startYear={2013}
                            endYear={2016}
                            jobName="Personal Assistant"
                            companyName="Turku City"
                            jobDescription="Personal assistant to a girl with cerebral palsy."
                            />
                        <Experience
                            startYear={2012}
                            endYear={2013}
                            jobName="Delivery Driver"
                            companyName="Green Courier Oy"
                            jobDescription="Driver in a small delivery company."
                            />
                        <Experience
                            startYear={2010}
                            endYear={2011}
                            jobName="Marketing Assistant"
                            companyName="Lingsoft Language Services Oy"
                            jobDescription="Assisting in company’s marketing execution, re-speaking and working with the new technology related to captioning and translations."
                        />
                        <hr style={{borderTop: "3px solid", width: "100%"}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill="HTML5/CSS3"
                            progress={90}
                            />
                        <Skills
                            skill="UI/UX/Design"
                            progress={90}
                            />
                        <Skills
                            skill="JavaScript"
                            progress={80}
                            />
                        <Skills
                            skill="Node+Express"
                            progress={75}
                            />
                        <Skills
                            skill="Jquery"
                            progress={70}
                            />
                        <Skills
                            skill="React"
                            progress={70}
                        />
                        <Skills
                            skill="Vue"
                            progress={60}
                        />
                        <Skills
                            skill="ES6"
                            progress={60}
                        />
                        <hr style={{borderTop: "3px solid", width: "100%"}}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default Resume;
