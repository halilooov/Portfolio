import React from 'react'
import classes from './Home.module.css'
import Container from '../../hoc/Container/Container';

const Home = props => {
    return (
        <Container>
            <div className={classes.Home}>
                <div>
                    <h2>
                        Nazim <br/>
                        Khalilov
                    </h2>
                    <p>
                        Web developer<br/>
                        19 years old, Moscow
                    </p>
                </div>
                <img src="https://dummyimage.com/940x360/fff/aaa" alt=""/>
            </div>
        </Container>
    )
}

export default Home