import React from 'react'
import { Link } from 'react-router-dom';
import cls from './BearCard.module.css'

export const BearCard = ({ bear }) => {
  return (
    <div className={cls.container}>
    <div className={cls.cardContainer}>
      {
        bear.map((data) => {
          return <Link className={cls.bearCard} key={data.id} to={`../${data.id}`} >
            <img className={cls.bearImg} src={data.image_url} alt="Bear" />
          </Link>
        })
      }
      </div>
    </div>
  )
}
