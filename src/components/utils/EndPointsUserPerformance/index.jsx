import { useFetch } from '../Hooks'

function EndPointsUserPerformance(id) {
    const { data, isLoading, error } = useFetch (
        `http://localhost:5000/user/${id}/performance`
    )

    return {data, isLoading, error}
}

export default EndPointsUserPerformance