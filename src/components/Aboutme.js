import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
    render(){
        return(
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <div className="about-pic">
                            <h2>Hello There!</h2>
                            <div>
                                <img
                                    alt=""
                                    src="../images/panu2.png"
                                    style={{marginBottom: "0.5em", width: "25%", boxShadow: "0 0 5px"}}
                                    />
                                    <img
                                        alt=""
                                        src="../images/panu3.png"
                                        style={{marginBottom: "0.5em", width: "25%", boxShadow: "0 0 5px"}}
                                        />
                                        <img
                                            alt=""
                                            src="../images/panu4.png"
                                            style={{marginBottom: "0.5em", width: "25%", boxShadow: "0 0 5px"}}
                                            />
                            </div>
                            <Cell col={6}>
                                <div className="info-text">
                                    <h6>Welcome to my porftolio page! Here you can find information about myself, my work, my personal preferences and likes, etc.</h6>
                                    <p>If you would like to get more familiar with me - THAT IS AWESOME! I would like that too. :) On the "contact" section you find multiple different ways to get in touch with me.</p>
                                </div>
                            </Cell>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default About;
