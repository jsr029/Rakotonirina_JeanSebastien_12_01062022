import { useFetch } from '../Hooks'

function EndPointsUser(id) {
    const { data, isLoading, error } = useFetch (
        `http://localhost:5000/user/${id}`
    )

    return {data, isLoading, error}
}

export default EndPointsUser