import React from 'react'
import data from '../data/menuItems.json'
import { writeItems } from '../utils/util'

import Navbar from '../components/UtilComp/Navbar/Navbar'

function Breakfast() {
  const items = writeItems(data, 'breakfast')
  return (
    <div>
      <Navbar />
      <div>{items}</div>
    </div>
  )
}

export default Breakfast