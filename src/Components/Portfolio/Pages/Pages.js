import React from 'react'
import classes from './Pages.module.css'
import Page from './Page/Page'
import Page1 from './../../../assets/Page1.png'
import Page2 from './../../../assets/Page2.png'
import Page3 from './../../../assets/Page3.png'
import Page4 from './../../../assets/Page4.png'
import Page5 from './../../../assets/Page5.png'

const Pages = props => {
    return (
        <ul className={classes.Pages}>
            <Page
                link='https://halilooov.github.Sio/layout1'
                img={Page1}
                alt='Page 1'
                title='Online fashion store - Homepage'
            />
            <Page
                link='https://halilooov.github.Sio/layout-with-bootstrap-and-SCSS'
                img={Page2}
                alt='Page 2'
                title='Store - Concept'
            />
            <Page
                link='https://halilooov.github.io/aim-game'
                img={Page3}
                alt='Page 3'
                title='AIM game'
            />
            <Page
                link='https://halilooov.github.Sio/layout-with-bootstrap-and-SCSS'
                img={Page4}
                alt='Page 4'
                title='Hover board'
            />
            <Page
                link='https://halilooov.github.Sio/layout-with-bootstrap-and-SCSS'
                img={Page5}
                alt='Page 5'
                title='Slider concept'
            />
        </ul>
    )
}

export default Pages

// https://halilooov.github.Sio/layout-with-bootstrap-and-SCSS
// https://halilooov.github.Sio/layout1
// https://github.com/halilooov
// https://halilooov.github.io/aim-game
// https://halilooov.github.io/hoverSboard
// https://halilooov.github.io/slider-up-down