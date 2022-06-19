import React from 'react'
import UsePerformanceData from '../components/UserPerformanceData'
import HandleChange from '../components/utils/HandleChange'

/**
 * 
 * Gets User Performance data
 * @param { Number } id user props id 
 * @returns { Component } UserPerformanceData in which we passed props data.data as perfData
 * and data as performance 
 */

function GetUserPerformance({ id }) {
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