// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [blog, setBlog] = useState(null);
//   const [loadingTime, setLoadingTime] = useState(true);
//   const [error, SetError] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch(url)
//         .then((res) => {
//           if (!res.ok) {
//             throw Error("Could not find data");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           setBlog(data);
//           setLoadingTime(false);
//           SetError(false);
//         })
//         .catch((err) => {
//           SetError(err.message);
//           setLoadingTime(false);
//         });
//     }, 2000);
//   }, [url]);

//   return{blog, loadingTime, error}
// };
// export default useFetch

// Trial
// import { useEffect, useState } from "react"

// const useFetch = (url)=>{

//   const [blog, setBlog] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, SetError] = useState(true)

//   useEffect(() => {
//     setTimeout(()=>{
//       fetch(url)
//       .then(res =>{
//         if(!res.ok){
//           throw Error('Data Is Not Found')
//         }
//         return res.json()
//       })
//       .then(data =>{
//         setBlog(data)
//         setLoading(false)
//         SetError(false)
//       })
//       .catch((err)=>{
//         SetError(err.message)
//         setLoading(false)
//       })
//     }, 2000)
//   }, [url])
//   return {blog, loading, error}
// }

// export default useFetch


// import { useEffect, useState } from "react"

// const useData = (url)=>{
//   const[dataBlog, setDataBlog] = useState(null)
//   const [loadTime, setLoadTime] = useState(true)
//   const [error, setError] = useState(true)

//   useEffect(()=>{
//     setTimeout(()=>{
//       fetch(url)
//       .then((respond)=>{
//         if(!respond.ok){
//           throw Error("Can't Find This")
//         }
//         return respond.json() 
//       })
//       .then((data)=>{
//         setDataBlog(data)
//         setLoadTime(false)
//         setError(false)
//       })
//       .catch((e)=>{
//         setError(e.message)
//         setLoadTime(false)
//       })
//     }, [2000])
//   }, [url])
//   return{dataBlog, loadTime, error}

// }
// export default useData



import { useState, useEffect } from "react"

const useFetch = (url)=>{
const [blog, setBlog] = useState(null)
const [load, setLoad] = useState(true)
const [error, setError] = useState(true)

useEffect(()=>{
  const AbortPage = new AbortController()

  setTimeout(()=>{
    fetch(url, {signal: AbortPage.signal})
    .then((res)=>{
      if(!res.ok){
        throw Error ("Can't access web page")
      }
      return res.json()
    })
    .then((data)=>{
      setBlog(data)
      setError(false)
      setLoad(false)
    })
    .catch((err)=>{
      if(err.name === 'AbortError'){
      }else{
        setError(err.message)
        setLoad(false)
      }
    })
  }, 2000)

  return () => AbortPage.abort()
}, [url])
return {blog, load, error}
}
export default useFetch