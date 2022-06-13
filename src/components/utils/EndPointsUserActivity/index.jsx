import { useFetch } from '../Hooks'

function EndPointsUserActivity(id) {
    const { data, isLoading, error } = useFetch (
        `http://localhost:5000/user/${id}/activity`
    )

    return {data, isLoading, error}
}

export default EndPointsUserActivity