import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        };
}
    toggleCategories(){
        if (this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: "20em", margin: "auto"}}>
                    <CardTitle style={{color: "black", height: "15em", background:
                        `url(../images/connect4.png) center / cover`}}>#1 Connect4
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    </CardText>
                    <CardActions>
                        <Button colored href="https://www.github.com/panusalonen">GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" style={{color: "black"}}/>
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{minWidth: "20em", margin: "auto"}}>
                    <CardTitle src="../public/calculator.png" style={{color: "black", height: "15em", background:
                        "url(../images/calculator.png) center / cover" }}>#2 Calculator
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    </CardText>
                    <CardActions>
                        <Button colored href="https://www.github.com/panusalonen">GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" style={{color: "black"}}/>
                    </CardMenu>
                </Card>            )
        } else if(this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{minWidth: "20em", margin: "auto"}}>
                    <CardTitle style={{color: "black", height: "15em", background:
                        "url(../images/weather-app.png) center / cover" }}>#3 Weather App
                    </CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    </CardText>
                    <CardActions>
                        <Button colored href="https://www.github.com/panusalonen">GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" style={{color: "black"}}/>
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{minWidth: "20em", margin: "auto"}}>
                    <CardTitle style={{color: "black", height: "15em", background:
                        "url(../images/petition.png) center / cover" }}>#4 Petition
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    </CardText>
                    <CardActions>
                        <Button colored href="https://www.github.com/panusalonen">GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" style={{color: "black"}}/>
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 4) {
            return (
                <Card shadow={5} style={{minWidth: "20em", margin: "auto"}}>
                    <CardTitle style={{color: "black", height: "15em", background:
                        "url(../images/social-network.png) center / cover" }}>#5 Social Network
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" style={{color: "black"}}/>
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 5) {
            return (
                <Card shadow={5} style={{minWidth: "20em", margin: "auto"}}>
                    <CardTitle style={{color: "black", height: "15em", background:
                        "url(../images/imageboard.png) center / cover" }}>#6 Imageboard
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    </CardText>
                    <CardActions>
                        <Button colored href="https://www.github.com/panusalonen">GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" style={{color: "black"}}/>
                    </CardMenu>
                </Card>             )
        } else if(this.state.activeTab === 6) {
            return (
                <Card shadow={5} style={{minWidth: "20em", margin: "auto"}}>
                    <CardTitle style={{color: "snow", height: "15em", background:
                        "url(../images/photographer-page.png) center / cover" }}>#7 Photographer Page
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    </CardText>
                    <CardActions>
                        <Button colored href="https://www.github.com/panusalonen">GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" style={{color: "snow"}}/>
                    </CardMenu>
                </Card>             )
        } else if(this.state.activeTab === 7) {
            return (
                <Card shadow={5} style={{minWidth: "20em", margin: "auto"}}>
                    <CardTitle style={{color: "black", height: "15em", background:
                        "url(../images/spotify.png) center / cover" }}>#8 Spotify API
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    </CardText>
                    <CardActions>
                        <Button colored href="https://www.github.com/panusalonen">GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" style={{color: "black"}}/>
                    </CardMenu>
                </Card>             )
        } else if (this.state.activeTab === 8) {
            return (
                <Card shadow={5} style={{minWidth: "20em", margin: "auto"}}>
                    <CardTitle style={{color: "black", height: "15em", background:
                        "url() center / cover" }}>#9 Misc
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    </CardText>
                    <CardActions>
                        <Button colored href="https://www.github.com/panusalonen">GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" style={{color: "black"}}/>
                    </CardMenu>
                </Card>
            )
        }
    }
    render(){
        return(
            <div className="categry-tabs">
                <Tabs
                    style={{background: "snow"}}
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })}
                    ripple>
                    <Tab>Connect4</Tab>
                    <Tab>Calculator</Tab>
                    <Tab>Weather App</Tab>
                    <Tab>Petition</Tab>
                    <Tab>Social Network</Tab>
                    <Tab>Imageboard</Tab>
                    <Tab>Photographer Page</Tab>
                    <Tab>Spotify API</Tab>
                    <Tab>Misc</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
};

export default Projects;
