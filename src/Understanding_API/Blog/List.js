// import React from 'react'

// function List({vicBlog}) {
//   return (
//     <div>
//       {vicBlog.map(vicBlog => (
//         <div style={{border: '.5vh solid grey', margin: '10px', padding: '10px' }} key={vicBlog.id}>
//           <h1>{vicBlog.name}</h1>
//           <article>{vicBlog.description}</article>
//           <p style={{color: 'red'}}>{vicBlog.price}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default List


// import React from 'react'

// function List({myBlog}) {
//   return (
//     <div>
//       {myBlog.map((myBlog)=>(
//         <div key={myBlog.id}>
//           <h1>{myBlog.name}</h1>
//           <article>{myBlog.description}</article>
//           <p>{myBlog.price}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default List


// Trial
// import React from 'react'

// function List({myBlog}) {
//   return (
//     <div>
//       {myBlog.map(myBlog =>(
//         <div key={myBlog.id}>
//           <h1>{myBlog.name}</h1>
//           <article>{myBlog.description}</article>
//           <p>{myBlog.price}</p>
//         </div>
//       ))}
      
//     </div>
//   )
// }

// export default List


// import React from 'react'

// function List({blog}) {
//   return (
//     <div>
//       {blog.map((blog)=>(
//         <div key={blog.id}>
//           <h1>{blog.name}</h1>
//           <article>{blog.description}</article>
//           <p>{blog.price}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default List


import React from 'react'
import { Link } from 'react-router-dom'

function List({myBlog}) {
  
  return (
    <div>
      {myBlog.map((myBlog)=>(
        <div key={myBlog.id}>
          <h1>{myBlog.name}</h1>
          <Link to  ={`/blog/${myBlog.id}`}>
          <button>{myBlog.about}</button>
          </Link>
          <p>{myBlog.learn}</p>
        </div>
      ))}
    </div>
  )
}

export default List
