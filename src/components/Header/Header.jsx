import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://api.freelogodesign.org/files/cadfe7acb7de4235a6cfa961d1f76de6/thumb/logo_200x200.png?v=0"
        alt="logo"
      />
    </header>
  )
}

export default Header
