import React from 'react'
import data from '../data/menuItems.json'
import { writeItems } from '../utils/util';//function to write items
import Header from '../components/UtilComp/Header/Header';


function Lunch() {
  const items = writeItems(data, 'lunch')
  return (
    <div>
      <Header />
      <div>{items}</div>
    </div>

  )
}

export default Lunch