import React from 'react'
import navbarItems from './NavbarItems'

function Navbar() {
  return (
    <div>
        <ul>
        {
            navbarItems.map((item) => {
                return(
                    <li><a href={item.src}>{item.name}</a></li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default Navbar