import React from 'react'
import classes from './Stars.module.css'
import Star from './Star/Star'


const Stars = props => {
    const stars = Array(5)
        .fill(<Star active={true} />, 0, props.count)
        .fill(<Star />, props.count)
    return (
        <ul className={classes.Stars}>
            { stars }
        </ul>
    )
}

export default Stars