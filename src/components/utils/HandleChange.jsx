import {
    useState, useEffect
} from "react";

function HandleChange(id, url) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    switch (id) {
        case 12:
        default:
            switch(url){
                case 0:
                default:
                    url = "http://localhost:5000/user/"+id;
                    break;
                case 1:
                    url = "http://localhost:5000/user/"+id+"/activity"
                    break;
                case 2:
                    url = "http://localhost:5000/user/"+id+"/average-sessions"
                    break;                
                case 3:
                    url = "http://localhost:5000/user/"+id+"/performance"
                    break;
            }
        break;
        case 18:
            switch(url){
                case 0:
                default:
                    url = "http://localhost:5000/user/"+id;
                    break;
                case 1:
                    url = "http://localhost:5000/user/"+id+"/activity"
                    break;
                case 2:
                    url = "http://localhost:5000/user/"+id+"/average-sessions"
                    break;                
                case 3:
                    url = "http://localhost:5000/user/"+id+"/performance"
                    break;
            }
        break;
        }

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchData() {
            try {
                const response = await fetch(url, {})
                const data = await response.json()
                setData(data)

            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { data, isLoading, error, url }
};

export default HandleChange;