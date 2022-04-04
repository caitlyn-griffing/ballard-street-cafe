import React from 'react'
import data from '../data/menuItems.json'
import { writeItems } from '../utils/util';//function to write items
import Navbar from '../components/UtilComp/Navbar/Navbar';


function Lunch() {
  const items = writeItems(data, 'lunch')
  return (
    <div>
      <Navbar />
      <div>{items}</div>
    </div>

  )
}

export default Lunch