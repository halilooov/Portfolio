import React from 'react'
import classes from './Page.module.css'

const Page = props => {
    return (
        <li className={classes.Page}>
            <a href={props.link}>
                <img src={props.img} alt={props.alt} />
                <p>{props.title}</p>
            </a>
        </li>
    )
}

export default Page