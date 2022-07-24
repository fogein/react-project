import React from 'react'
import cls from './Search.module.css'
export const Search = (props) => {
  return (
    <div className={cls.container}>
      <form action="#" method="#">
        <input
          type="text"
          className={cls.input}
          name="search"
          id="search"
          value={props.search}
          placeholder="Search..."
          onChange={(e) => props.setSearch(e.target.value)}
        />
      </form>
    </div>
  )
}
