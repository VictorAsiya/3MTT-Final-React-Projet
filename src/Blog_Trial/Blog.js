import { useParams,useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import '../App.css'

const Blog = () => {
  const { theBlog } = useParams();
  const { blog, load, error } = useFetch(`http://localhost:8000/data/${theBlog}`)
  const History = useNavigate()

  const Delete = ()=>{
    fetch('http://localhost:8000/data/' + blog.id, {
      method: 'DELETE'
    })
    .then(()=>{
      History('/')
    })

  }
  return (
    <div className="Blog">
      {blog && (
        <div >
          <article>
            <h3 style={{ fontWeight: "900" }}>{blog.title}</h3>
            <p style={{ color: "red" }}>Written by: {blog.author}</p>
            <p>{blog.document}</p>
          </article>
          <button className="delete_btn" onClick={Delete}>Delete</button>
        </div>
      )}
      {load && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Blog;
