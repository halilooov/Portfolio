import React from 'react'
import classes from './About.module.css'
import Container from '../../hoc/Container/Container';

const About = props => {
    return (
        <div className={classes.About}>
            <Container>
                <div className={classes.Info}>
                    <h3>About me</h3>
                    <p>
                        Hi, I'm Nazim – web-developer from Moscow. <br/>
                        I'm interested in web development and everything connected with it.
                        <br/><br/>
                        I'm studying at courses "Informatics and Computer Engineering" in MTUCI.
                        <br/><br/>
                        Ready to implement excellent projects
                        with wonderful people.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default About