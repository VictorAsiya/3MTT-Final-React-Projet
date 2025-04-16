import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewBlog() {
  const [title, setTitle] = useState('')
  const [document, setDocument] = useState('')
  const [author, setAuthor] = useState('Victor Asiya')
  const [error, setError] = useState(false)
  const [load, setLoad] = useState(false)
  const back = useNavigate()
  
  const submit = (e)=>{
    e.preventDefault()
    const NewBlog = {title, document, author}
    
    setLoad(true)
    
    setTimeout(()=>{
      fetch("http://localhost:8000/data", {
        method: 'POST',
        headers: {'Content-Type': 'application/JSON'},
        body: JSON.stringify(NewBlog)
      })
      .then((res)=>{
        setLoad(false)
        if(!res.ok){
          throw Error ('Failed to add New Post to Blog')
        }
        back('/')
      })
      .catch((err)=>{
        setError(err.message)
      })
    }, 2000)
  }

  return (
    <div className='NewBlog'>
      <form>
        <input type="text" 
          value={title}
          placeholder='Add Title'
          onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea 
          placeholder='Share your thoughts'
          value={document}
          onChange={(e)=> setDocument(e.target.value)}
        />
        <select
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
        >
          <option >Victor Asiya</option>
          <option >Manfred Bassey</option>
          <option >Bishop Joe</option>
        </select>

        {!load && <button onClick={submit}>Submit</button>}
        {load && <button disabled>Loading...</button>}
      </form>

      {error && <div>{error}</div>}
    </div>
  )
}

export default NewBlog
