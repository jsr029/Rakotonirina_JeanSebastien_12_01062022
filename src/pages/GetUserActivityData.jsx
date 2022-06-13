import React from 'react'
import { useFetch } from '../components/utils/Hooks'
import UserActivityData from '../components/UserActivityData'

function GetUserActivityData({ id }) {
    /*const url = window.location.href*/
    const { data, isLoading, error } = useFetch(
		`http://localhost:5000/user/${id}/activity`
    )
    	if (error) {
		return <span>Il y a un problème</span>
	}

	return isLoading ? <div>Chargement...</div> : (
		<React.Fragment>
			<UserActivityData data={data.data} id={id}/>
		</React.Fragment>
	)
};
export default GetUserActivityData