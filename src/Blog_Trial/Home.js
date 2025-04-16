import React from 'react'
import useFetch from './useFetch'
import BlogList from './BlogList'

function Home() {
    const {blog, load, error} = useFetch("http://localhost:8000/data")
  return (
    <div className='Home'>
        <h2>All Blogs</h2>
      {blog && <BlogList myBlog = {blog}/>}
      {load && <div>Loading...</div>}
      {error && <div>{error}</div> }
    </div>
  )
}

export default Home
