import React from 'react'
import { Link } from 'react-router-dom'

function Error_Page() {
  return (
    <div style={{marginTop: '10vh'}}>
      <p>Page Not Found</p>
      <p><Link to={'/'}>Click</Link> to return to home page</p>
    </div>
  )
}

export default Error_Page
