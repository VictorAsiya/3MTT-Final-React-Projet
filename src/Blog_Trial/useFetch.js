import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [blog, setBlog] = useState(null)
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(true)

    useEffect(()=>{
        const Abort_Page = new AbortController()
        
        setTimeout(()=>{
            fetch(url, {signal: Abort_Page.signal})
            .then((res)=>{
                if(!res.ok){
                    throw Error ('Page cannot be found')
                }
                return res.json()
            })
            .then((data)=>{
                setBlog(data)
                setLoad(false)
                setError(false)
            })
            .catch((error)=>{
                setError(error.message)
                setLoad(false)
            })
        }, 2000)
        return () => Abort_Page.abort()
        
    }, [url])
    return {blog, load, error}
}
export default useFetch