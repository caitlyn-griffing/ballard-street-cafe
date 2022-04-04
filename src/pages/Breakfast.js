import React from 'react'
import data from '../data/menuItems.json'
import { writeItems } from '../utils/util'
function Breakfast() {
  const items = writeItems(data, 'breakfast')
  return (
    <div>{items}</div>
  )
}

export default Breakfast