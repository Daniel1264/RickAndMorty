import axios from "axios"
import { useEffect, useState } from "react"

// ?HOOK OF PETITIONS HTTP HOW AXIOS

function useFetch(URL) {
    
    const [response, setResponse] = useState()
    
    useEffect(() => {
        axios.get(URL)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }, [])

    return response
}

export default useFetch