import React from 'react'
import data from '../data/menuItems.json'
import { writeItems } from '../utils/util'
function Dinner() {
  const items = writeItems(data, 'dinner')
  return (
    <div>
     {items}
    </div>
  )
}

export default Dinner