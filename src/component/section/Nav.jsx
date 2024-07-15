import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav id='nav' role='navigation'>
      <ul className='list'>
      <li>
          <Link to={'/'}>HOmeeee</Link>
        </li>
        <li>
          <Link to={'/Dtpform1'}>Dtpform1</Link>
        </li>
        <li>
          <Link to={'/Dtpform2'}>Dtpform2</Link>
        </li>
        <li>
          <Link to={'/Dtpform3'}>Dtpform3</Link>
        </li>
        <li>
          <Link to={'/Dtpform4'}>Dtpform4</Link>
        </li>
        <li>
          <Link to={'/Dtpform5'}>Dtpform5</Link>
        </li>
        <li>
          <Link to={'/Dtpform6'}>Dtpform6</Link>
        </li>
        <li>
          <Link to={'/Dtpform7'}>Dtpform7</Link>
        </li>
        <li>
          <Link to={'/Dtpform8'}>Dtpform8</Link>
        </li>
        <li>
          <Link to={'/Dtpform9'}>Dtpform9</Link>
        </li>
        <li>
          <Link to={'/Dtpform10'}>Dtpform10</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav