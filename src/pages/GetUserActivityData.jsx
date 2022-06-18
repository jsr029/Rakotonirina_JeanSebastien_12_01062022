import React from 'react'
import UserActivityData from '../components/UserActivityData'
import HandleChange from '../components/utils/HandleChange'

/**
 * Function <GetUserActivityData> gets user activity data * 
 */
function GetUserActivityData({ id }) {
	const { data, isLoading, error } = HandleChange(id, 1)
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