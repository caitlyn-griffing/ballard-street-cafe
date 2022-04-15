import React, { useEffect } from 'react'

function Pictures() {

  useEffect( () => {
    fetch('/api')
    .then(res => {
      console.log(res.headers)
      return res.json()
    })
    .then(data => {
      console.log(data)
    })
  }, [])


  return (
    <div>dd</div>
  )
}

export default Pictures