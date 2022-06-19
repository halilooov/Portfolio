import React from 'react'
import classes from './Skills.module.css'
import Container from '../../hoc/Container/Container'
import List from './List/List';

const Skills = props => {
    return (
        <Container>
            <div className={classes.Skills}>
                <h3>Skills</h3>
                <List />
            </div>
        </Container>
    )
}

export default Skills