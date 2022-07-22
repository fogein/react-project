import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const BearInfo = () => {
  const {id} = useParams()
  const [oneBeer,setOneBeer] = useState([])
  useEffect(() => {
    axios.get(`https://api.punkapi.com/v2/beers/${id}`)
    .then(response => setOneBeer(response.data))
  }, [id]);
  return (
    <>
    {
      oneBeer.map((data) => {
        return <div key={data.id}>
          <h3>{data.name}</h3>
          <img src={data.image_url} alt="" />
        </div>
      })
    }
    </>
  )
}
