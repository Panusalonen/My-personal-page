import React from 'react';
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Landingpage";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Aboutme from "./Aboutme"

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;
