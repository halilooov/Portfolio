import React from 'react'
import classes from './ListItem.module.css'

const ListItem = props => {
    return (
        <li className={classes.ListItem}>
            <a className={classes.Link} href={props.link}>
                {props.name}
            </a>
        </li>
    )
}

export default ListItem