// import React from 'react'

// function Bloglist(props) {
//     const write = props.contents

//   return (
//     <div>
//       {write.map((write) =>(
//         <div key={write.id} style={{border: '1px solid black', margin: '10px', padding: '10px' }} className='bloglist'>
//             <h1>{write.title}</h1>
//             <p>{write.content}</p>
//             <p style={{color: 'red'}}>{write.author}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Bloglist


// import React from 'react'

// function Bloglist({BlogSave}) {

//   return (
//     <div>
//       {BlogSave.map((BlogSave) =>(
//         <div key={BlogSave.id}>
//             <h1>{BlogSave.title}</h1>
//             <p>{BlogSave.content}</p>
//             <p style={{color: 'red'}}>{BlogSave.author}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Bloglist



import React from 'react'

function Bloglist(props) {
  const published = props.Vicblog
  const Delete = props.Details
  return (
    <div>
      {published.map((published) => (
        <div key={published.Id} style={{border: '1px solid black', margin: '10px', padding: '10px' }} className='bloglist'>
            <h1>{published.title}</h1>
            <p>{published.content}</p>
            <a href="" style={{color: 'red'}}>{published.author}</a>
            <button onClick= {()=>Delete(published.Id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Bloglist

