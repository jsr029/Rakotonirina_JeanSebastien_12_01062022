import React from 'react'
/*import { useFetch } from '../components/utils/Hooks'*/
import UserSessionsData from '../components/UserSessionsData'
import HandleChange from '../components/utils/HandleChange'

/**
 * Gets User Average-Sessions data 
 * Uses UserSessionsData component in which props data was passed
 * 
 * @param { Number } id props user id, it is used as parameter in HandleChange function to retrieve data  
 * by the endPoints url case 2 in the switch function
 * @returns { component } UserSessionsData
 */
function GetUserSessionsData({ id }) {
	const { data, isLoading, error } = HandleChange(id, 2)
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