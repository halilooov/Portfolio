import React from 'react'
import classes from './Portfolio.module.css'
import Container from '../../hoc/Container/Container';
import Pages from './Pages/Pages';

const Portfolio = props => {
    return (
        <div className={classes.Portfolio}>
            <Container>
                <h3>Portfolio</h3>
                <Pages />
            </Container>
        </div>
    )
}

export default Portfolio

