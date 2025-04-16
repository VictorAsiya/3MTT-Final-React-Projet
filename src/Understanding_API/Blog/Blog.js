import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    
    const {theId} = useParams()
    const {blog, load, error} = useFetch("http://localhost:8000/data/" + theId)
    return ( 
        <div>
            {load && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {console.log(blog)}
            {blog && (
                <article>
                    
                    <h1>{blog.name}</h1>
                    <p>{blog.learn}</p>
                    <p style={{color: "red"}}>{blog.about}</p>
                </article>
            )}
            
        </div>
    );
}
 
export default BlogDetails;