import React from 'react'
import { Link } from 'react-router-dom'
import { menuList } from '../data/menu'

const Nav = () => {
  return (
    <nav id='nav' role='navigation'>
      <ul className='list'>
        {menuList.map((menu, key) => (
              <Link to={menu.src}>
                  <li key={key}>
                    <img src={menu.icon} alt='' />{menu.title}
                  </li>
              </Link>
          ))}
      </ul>
    </nav>
  )
}

export default Nav