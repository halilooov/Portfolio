import React from 'react'
import classes from './Header.module.css'
import List from './List/List'
import Container from '../../hoc/Container/Container'

function Header() {
    return (
        <Container>
            <header className={classes.Header}>
                <List />
                <hr className={classes.Line}/>
            </header>
        </Container>
    )
}

export default Header