import React from 'react'
import data from '../data/menuItems.json'
import { writeItems } from '../utils/util'

import Header from '../components/UtilComp/Header/Header'

function Breakfast() {
  const items = writeItems(data, 'breakfast')
  return (
    <div>
      <Header />
      <div>{items}</div>
    </div>
  )
}

export default Breakfast