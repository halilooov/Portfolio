import React from 'react'
import classes from './List.module.css'
import ListItem from './ListItem/ListItem';

const List = props => {
    return (
        <ul className={classes.List}>
            <ListItem
                name='Home'
                link='#'
            />
            <ListItem
                name='About'
                link='#'
            />
            <ListItem
                name='Skills'
                link='#'
            />
            <ListItem
                name='Portfolio'
                link='#'
            />
            <ListItem
                name='Contacts'
                link='#'
            />
        </ul>
    )
}

export default List