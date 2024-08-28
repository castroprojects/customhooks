import {useEffect, useState} from "react"


function useFetcher(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err)=>{
            setErr(err);
        }).finally(()=>{
            setLoading(false);
        });
        console.log(data);
    }, [url])
    return {data, loading, err};
}

export default useFetcher;