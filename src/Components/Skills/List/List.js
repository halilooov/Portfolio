import React from 'react'
import classes from './List.module.css'
import ListItem from './ListItem/ListItem'
import html_css from '../../../assets/html_css.png'
import react from '../../../assets/react.png'
import js from '../../../assets/js.png'
import figma from '../../../assets/figma.png'

const List = props => {
    return (
        <ul className={classes.List}>
            <ListItem
                name='HTML and CSS'
                src={html_css}
                alt='HTML&CSS'
                count={4}
            />
            <ListItem
                name='JavaScript'
                src={js}
                alt='JavaScript'
                count={4}
            />
            <ListItem
                name='React'
                src={react}
                alt='React'
                count={4}
            />
            <ListItem
                name='Figma'
                src={figma}
                alt='Figma'
                count={4}
            />
        </ul>
    )
}

export default List