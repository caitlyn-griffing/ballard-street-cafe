import React from 'react'
import data from '../data/menuItems.json'
import { writeItems } from '../utils/util';//function to write items
function Lunch() {
  const items = writeItems(data, 'lunch')
  return (
    <div>{items}</div>
  )
}

export default Lunch