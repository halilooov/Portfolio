import React from 'react'
import classes from './Skills.module.css'
import Container from '../../hoc/Container/Container'

const Skills = props => {
    return (
        <Container className={classes.Skills}>
            <div>
                <h3>Skills</h3>
                <p>I work in such programs as</p>
            </div>
        </Container>
    )
}

export default Skills