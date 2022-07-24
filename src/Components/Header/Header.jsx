import React from 'react'
import cls from './Header.module.css'

export const Header = () => {
  return (
    <header className={cls.container}>
      <span className={cls.headerTitle}>Beer Store</span>
    </header>
  )
}
