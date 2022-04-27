import React, { useEffect, useState } from 'react'
import Card from '../components/PicturesComp/Card/Card';

function Pictures() {
  const [data, setData] = useState()
  //Mount handling is essential for this to work
  useEffect( () => {
    let mounted = true;
    const response = fetch('/api');
    const dataInflow = response.then(res => {
      console.log(res)
      return res.json()
    });
    dataInflow.then(data => {
      console.log(data)
      if(mounted)
        setData(data.reviews)
    })
    .catch(err => console.log(err))
    return () => mounted = false;
  }, [])

  //Add ternary operator to handle lazy loading. If not used then the page will load before the data is fetched, resulting in a response that says "enable javsciprt to run this app"
  return (
    <div>{data ? 
      <Card data={data}/> : 
      <>Loading...</>}
    </div>
  )
}

export default Pictures