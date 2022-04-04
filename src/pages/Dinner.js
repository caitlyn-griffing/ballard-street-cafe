import React from 'react'
import data from '../data/menuItems.json'
import { writeItems } from '../utils/util'

import Header from '../components/UtilComp/Header/Header'

function Dinner() {
  const items = writeItems(data, 'dinner')
  return (
    <div>
      <Header />
      <div>{items}</div>
    </div>
  )
}

export default Dinner