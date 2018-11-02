import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
    render(){
        return(
            <div className="contact-div"style={{width: "100%", margin: "auto"}}>
                <Grid className="contact-grid">
                <Cell col={6}>
                    <h1>Hey, It's me!</h1>
                    <img
                        alt="avatar"
                        src="../images/avatar.png"
                        style={{height: "20em", borderRadius: "50%", boxShadow: "0 0 5px black"}}
                        />
                    <p
                        style={{width:"80%", margin: "auto", paddingTop:"1em"}}>
                        Questions? Answers? Offers? Ideas? Just let me know what you have in mind and we take it from there! Available for work, freelancing, co-operation, brainstorming or just plain good old hang-around.<br/><strong style={{fontWeight: "bold"}}>Hit me up!</strong>
                    </p>
                </Cell>
                <Cell col={6}>
                    <h1>Contact</h1>
                    <hr/>
                    <div>
                    <List>
                        <ListItem>
                            <ListItemContent icon="phone" style={{fontFamily: "Rubik", color: "grey"}}>+358 44 501 6610</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="phone" style={{fontFamily: "Rubik", color: "grey"}}>SkypeID: Panusalonen_1</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="email" style={{fontFamily: "Rubik", color: "grey"}}>panusalonen@gmail.com</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="webpage" style={{fontFamily: "Rubik", color: "grey"}}>www.github.com/panusalonen</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="webpage" style={{fontFamily: "Rubik", color: "grey"}}>www.linkedin.com/in/panusalonen</ListItemContent>
                        </ListItem>
                    </List>
                    </div>
                </Cell>
                </Grid>
            </div>
        )
    }
};

export default Contact;
