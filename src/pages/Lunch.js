import React from 'react'
import data from '../data/menuItems.json'
function Lunch() {

  console.log(data)

  const writeLunchItems = () => {   
        return data.map((item) => {
        console.log(item)
        if(item.meal === 'lunch'){
          return (
            <div>
              <h1>{item.item}</h1>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p>{item.meal}</p>
            </div>
          )
        } else {
          return null
        }
      }) 
  }
  
  return (
    <div>
      <h1>LUNCH MENU</h1>
     {writeLunchItems()}
    </div>
  )
}

export default Lunch