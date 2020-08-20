import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <header className='center'>
            <img src={logo} alt='logo'></img>
            <h2 style={{fontFamily: " Lucida Console, Monaco, monospace"}}>Character Finder </h2>
        </header>
    )
}

export default Header
