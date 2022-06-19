import React from 'react'
import classes from './ListItem.module.css'
import Stars from './Stars/Stars';

const ListItem = props => {
    return (
        <li className={classes.ListItem}>
            <img src={props.src} alt={props.alt} />
            <p>{ props.name }</p>
            <Stars count={props.count} />
        </li>
    )
}

export default ListItem