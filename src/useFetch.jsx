import { useState, useEffect } from "react";

const useFectch = (url) => {

    const [data,setData] = useState()
    const [isPending,setIspending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setTimeout(() => {
            fetch(url)
            .then(res => { 
                if(!res.ok)
                   { throw Error ("failed to fetch your data..... :(")}
                return res.json()})
            .then(data => {
                setData(data);
                setIspending(false)
                // setError(null);
            })
            .catch( err => {
                setIspending(false);
                setError(err.message);
            })
        }, 1000);
    },[url]);
    
    return {data,isPending,error};
}

export default useFectch;