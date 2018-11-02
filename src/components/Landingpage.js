import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
    render(){
        return(
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            className="landing-image"
                            alt="avatar"
                            src="../images/panu.png"
                            style={{marginBottom: "0.5em", boxShadow: "0 0 5px", borderRadius: "50%"}}
                            />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML5/CSS3 | Frameworks | ES6 | JavaScript | Frontend | Design | Etc</p>
                            <div className="social-links">
                                {/* LINKEDIN */}
                                <a href="https://www.linkedin.com/in/panusalonen" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* GITHUB */}
                                <a href="https://www.github.com/panusalonen" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* FB */}
                                <a href="https://www.facebook.com/salosen.panu" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default Landing;
