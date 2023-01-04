import React from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'

const NavBarForm = (props) => {
    return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <NavBarChild />
        </div>
    )
}

export default NavBarForm
