import React from 'react'
import data from '../data/menuItems.json'
import { writeItems } from '../utils/util'

import Navbar from '../components/UtilComp/Navbar/Navbar'

function Dinner() {
  const items = writeItems(data, 'dinner')
  return (
    <div>
      <Navbar />
      <div>{items}</div>
    </div>
  )
}

export default Dinner