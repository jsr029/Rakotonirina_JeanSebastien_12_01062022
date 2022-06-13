import { useFetch } from '../Hooks'

function EndPointsUserAverageSessions(id) {
    const { data, isLoading, error } = useFetch (
        `http://localhost:5000/user/${id}/average-sessions`
    )

    return {data, isLoading, error}
}

export default EndPointsUserAverageSessions