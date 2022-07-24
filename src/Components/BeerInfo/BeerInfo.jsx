import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import cls from './BeerInfo.module.css'

export const BeerInfo = () => {
  const { id } = useParams()
  const [oneBeer, setOneBeer] = useState([])
  useEffect(() => {
    axios.get(`https://api.punkapi.com/v2/beers/${id}`)
      .then(response => setOneBeer(response.data))
  }, [id]);
  return (
    <>
      <Link className={cls.button} to={`/`}>&#8592;</Link>
      <div className={cls.container}>

        {
          oneBeer.map((data) => {
            return <div className={cls.cardContainer} key={data.id}>
              <img className={cls.image} src={data.image_url} alt="" />
              <h3>{data.name}</h3>
              <div className={cls.cardDeskription}>
                <span>{data.tagline}</span>
                <span>{data.description}</span>
                <span>{data.abv}</span>
                <span>{data.food_pairing}</span>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}
