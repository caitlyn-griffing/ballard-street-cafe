import React from 'react'
import data from '../data/menuItems.json'
function Breakfast() {

  console.log(data)

  const writeBreakfastItems = () => {   
        return data.map((item) => {
        console.log(item)
        if(item.meal === 'breakfast'){
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
      <h1>BREAKFAST MENU</h1>
     {writeBreakfastItems()}
    </div>
  )
}

export default Breakfast