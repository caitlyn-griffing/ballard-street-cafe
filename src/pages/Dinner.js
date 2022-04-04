import React from 'react'
import data from '../data/menuItems.json'
function Dinner() {

  console.log(data)

  const writeDinnerItems = () => {   
        return data.map((item) => {
        console.log(item)
        if(item.meal === 'dinner'){
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
      <h1>DINNER MENU</h1>
     {writeDinnerItems()}
    </div>
  )
}

export default Dinner