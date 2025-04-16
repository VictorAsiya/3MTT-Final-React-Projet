// import React from 'react'
// import { useState } from 'react'
// import Bloglist from './bloglist'

// const Home = ()=> {
//     const [blog, setBlog] = useState([
//         {
//             title: 'Jesus is Coming Back',
//             content: 'a id a quidem, blanditiixplicabo totam rem quaerat. Laudantium?',
//             author: 'Victor Asiya',
//             id: 1
//         },
//         {
//             title: 'Are you ready?',
//             content: 'a id a quidem, blanditiixplicabo totam rem quaerat. Laudantium?',
//             author: 'Gerald Asiya',
//             id: 2
//         },
//         {
//             title: 'Jesus is Coming Back',
//             content: 'a id a quidem, blanditiixplicabo totam rem quaerat. Laudantium?',
//             author: 'Victor Asiya',
//             id: 3
//         }
//     ])
//   return (
//     <div>
//       <Bloglist contents = {blog}/>
//       <Bloglist contents = {blog.filter((hello)=> hello.author === 'Victor Asiya')} />
//     </div>
//   )
// }

// export default Home


import React from 'react'
import Bloglist from './bloglist'
import { useState } from 'react'

function Home() {

  const [blog, setBlog] = useState([
    {title: 'Hello Nigeria',
      content: 'Lorem ipias odio autem excepturi! Sed corrupti ad, vel magni id ea quae!',
      author: 'Victor Asiya',
      Id: 1
    },
    {title: 'Welldone Awgu',
      content: 'Lorem ipias odio autem excepturi! Sed corrupti ad, vel magni id ea quae!',
      author: 'Bassey Etim',
      Id: 2
    },
    {title: 'Hunger dey',
      content: 'Lorem ipias odio autem excepturi! Sed corrupti ad, vel magni id ea quae!',
      author: 'Victor Asiya',
      Id: 3
    }
    
  ])

  const DeleteFile = (id)=>{
    const NewFile = () => blog.filter(blog => blog.Id !== id)
    setBlog(NewFile)
  }


  return (
    <div>
      <Bloglist Vicblog = {blog} Details = {DeleteFile}/>
      {/* <Bloglist Vicblog = {blog.filter((blog)=> blog.author === 'Victor Asiya')}/> */}
    </div>
  )
}

export default Home
