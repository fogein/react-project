import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getBeers } from '../../api/api';
import cls from './BeerCard.module.css'
import { Search } from '../Search/Search.jsx';
import { PaginationBar } from '../Pagination/Pagination';

export const BeerCard = () => {

  const [beer, setBeer] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const beers = getBeers(search, page)
    beers.then(function (res) {
      setBeer(res)
    })
  }, [search, page]);


  return (

    <div className={cls.container}>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <div className={cls.cardContainer}>
        {
          beer.map((data) => {
            return <Link className={cls.bearCard} key={data.id} to={`../${data.id}`} >
              <img className={cls.bearImg} src={data.image_url ? data.image_url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52qoTpUSBUBXjGmvUnaHGaPog4LTm6hJwAg&usqp=CAU'} alt="Bear" />
              <span className={cls.name} >{data.name}</span>
              <span className={cls.description} >
                {
                  data.description.length >= 140
                    ?
                    data.description.slice(0, 139) + '...'
                    :
                    data.description
                }
              </span>
            </Link>
          })
        }
      </div>
      <PaginationBar
        page={page}
        setPage={setPage}
      />
    </div>
  )
}
