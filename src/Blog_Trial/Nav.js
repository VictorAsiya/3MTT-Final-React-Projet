import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='Nav'>
      <h1>Victor Blog</h1>
      <nav>
        <ul>
            <li>
                <Link to= '/'>Home</Link>
            </li>
            <li>
                <Link to ='/NewBlog/'>New Blog</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
