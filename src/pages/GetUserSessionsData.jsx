import React from 'react'
/*import { useFetch } from '../components/utils/Hooks'*/
import UserSessionsData from '../components/UserSessionsData'
import HandleChange from '../components/utils/HandleChange'

function GetUserSessionsData({ id }) {
    /*const url = window.location.href
    const id = url.split('=')[1]*/
	const { data, isLoading, error } = HandleChange(id, 2)
    /*const { data, isLoading, error } = useFetch(
		`http://localhost:5000/user/${id}/average-sessions`
    )*/
    	if (error) {
		return <span>Il y a un problème</span>
	}

	return isLoading ? <div>Chargement...</div> : (
		<React.Fragment>
			<UserSessionsData data={data.data}/>
		</React.Fragment>
	)
};
export default GetUserSessionsData