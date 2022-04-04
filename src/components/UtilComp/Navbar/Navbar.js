import React from 'react'
import navbarItems from './NavbarItems'
import './Navbar.css'
function Navbar() {
  return (
    <div id='navbar'>
        <ul>
        {
            navbarItems.map(({ cName, src, name }) => {
                return(
                    <li className={cName}><a href={src}>{name}</a></li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default Navbar