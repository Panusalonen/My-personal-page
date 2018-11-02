import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class App extends Component {
  render() {
      return(
         <div className="content-div">
            <Layout>
                <Header className="header" title={<Link style={{textDecoration: "none", color: "snow" }} to="/">My Portfolio</Link>} scroll>
                    <Navigation className="nav-header">
                        <Link to="/">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer className="drawer" title={<Link style={{textDecoration: "none", color: "Grey" }} to="/">My Portfolio</Link>}>
                    <Navigation className="nav-drawer">
                        <Link to="/">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
      );
    }
}

export default App;
