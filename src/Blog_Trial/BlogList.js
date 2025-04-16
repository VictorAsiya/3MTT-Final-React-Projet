import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

function BlogList({myBlog}) {
  return (
    <div className='BlockList_Main'>
      {myBlog.map((myBlog)=>(
          <div className='BlogList' key={myBlog.id}>
            <Link to={`/blog/${myBlog.id}`}>             
            <h3 style={{color: "red"}}>{myBlog.title}</h3>
            <p>{myBlog.author}</p>
            </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
