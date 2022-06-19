import React from 'react'
import UserActivityData from '../components/UserActivityData'
import HandleChange from '../components/utils/HandleChange'

/**
 * Gets user activity data 
 * @param { number } id  
 * props user id
 * @returns { Component } UserActivityData with data.data as props data
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