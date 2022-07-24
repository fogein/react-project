import React from 'react'
import { Pagination } from '@mui/material'
import PaginationItem from '@mui/material/PaginationItem';
import cls from './PaginationBar.module.css' 

export const PaginationBar = (props) => {
  return (
    <div className={cls.container}>
      <Pagination
        count={Math.ceil(325 / 9)}
        page={props.page}
        color='primary'
        onChange={(_, num) => props.setPage(num)}
        renderItem={(item) => (
          <PaginationItem

            {...item}
          />
        )}
      />
    </div>
  )
}
