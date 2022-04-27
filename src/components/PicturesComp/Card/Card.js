import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div>
        {props.data.map((review, index) => {
        return (
          <div key={index}>
            <h1>{review.author_name}</h1>
            <p>{review.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Card