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
      <Link className={cls.button} to={`/home`}>&#8592;</Link>
      <div className={cls.container}>

        {
          oneBeer.map((data) => {
            return <div className={cls.cardContainer} key={data.id}>
              <img className={cls.image} src={data.image_url} alt="" />
              <h3 className={cls.name} >{data.name}</h3>
              <span className={cls.tagline} >{data.tagline}</span>
              <span className={cls.abv} >Alcohol strength:{data.abv}%</span>
              <div className={cls.cardDeskription}>
                <h3 className={cls.descriptionTitle}>Description</h3>
                <span>{data.description}</span>
                <h3 className={cls.descriptionTitle}>Food pairing</h3>
                <span>{data.food_pairing}</span>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}
