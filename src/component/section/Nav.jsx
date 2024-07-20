import React from 'react'
import { Link } from 'react-router-dom'
import { menuList } from '../data/menu'

const Nav = () => {
  return (
    <nav id='nav' role='navigation'>
      <ul className='list'>
        {menuList.map((menu, key) => (
            <li key={key}>
                <Link to={menu.src}>
                  <img src={menu.icon} alt='' /><span>{menu.title}</span>
                </Link>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav