import React from 'react'
/*import { useFetch } from '../components/utils/Hooks'*/
import UsePerformanceData from '../components/UserPerformanceData'
import HandleChange from '../components/utils/HandleChange'

function GetUserPerformance({ id }) {
    /*const url = window.location.href
    const id = url.split('=')[1]
    const { data, isLoading, error } = useFetch(
		`http://localhost:5000/user/${id}/performance`
    )*/
	const { data, isLoading, error } = HandleChange(id, 3)
    	if (error) {
		return <span>Il y a un problème</span>
	}

	return isLoading ? <div>Chargement...</div> : (
		<React.Fragment>
			<UsePerformanceData perfData={data.data} performance={data}/>
		</React.Fragment>
	)
};

export default GetUserPerformance