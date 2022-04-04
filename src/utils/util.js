export const writeItems = (data, type) => {   
    return data.map(({item, description, price, meal}) => {
      console.log(item)
      if(meal === type){
        return (
          //All styles and css for menu items can be made here 
          <div className="menu-item-ctn">
            <h1>{item}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <p>{meal}</p>
          </div>
        )
      } else {
        return null
      }
    }) 
  }
