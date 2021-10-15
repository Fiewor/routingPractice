import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    
    const [click, setClick] = useState(false)

    return(
        <nav>
           <h3>Johnny-Putty</h3>
            <ul className='nav-links'>
                <Link onClick={ () => setClick(true) } style={click ? navStyle : null} to='/'>
                    <li>Home</li>
                </Link>
                <Link onClick={ () => setClick(true) } style={click ? navStyle : null} to='/about'>
                    <li>About</li>
                </Link>
                <Link onClick={ () => setClick(true) } style={click ? navStyle : null} to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav