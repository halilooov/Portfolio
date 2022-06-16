import React from 'react'
import classes from './ListItem.module.css'

const ListItem = props => {
    let linkStyle = props.active ? [classes.Link, classes.active] : [classes.Link]
    return (
        <li className={classes.ListItem}>
            <a className={linkStyle} href={props.link}>
                {props.name}
            </a>
        </li>
    )
}

export default ListItem