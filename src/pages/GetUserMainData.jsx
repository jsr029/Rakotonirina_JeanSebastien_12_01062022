import React from 'react'
import UserMainData from '../components/UserMainData'
import { useParams } from 'react-router-dom'
import HorizontalMenu from '../components/HorizontalMenu'
import VerticalMenu from '../components/VerticalMenu'
import HandleChange from '../components/utils/HandleChange'
import NotFound from '../components/NotFound'

/**
 * 
 * Retrieves the id with useParams hook and pass it in the url with useFetch hook
 * 
 * Uses the first endPoints http://localhost:5000/user/${id} to connect at the datas server 
 * 
 * Gets the user datas infos
 */
function GetUserMainData() {
	/**
	 * Catches the id by useParms hook function
	 */
	const id = useParams().id
	/**
	 * Puts conditions :
	 * - if id!=12 and id!=18 returns error 404 page inside <NotFound /> component
	 * - else @returns {Promise} function HandleChange 
	 *  
	 */
	if(id !== '12' && id !== '18')
	{
		return (
			<>
				<h1>La valeur de id est incorrecte, elle doit être 12 ou 18</h1>
				<NotFound />
			</>
		)		
	}else{
		/**
		 * retrieves data, isLoading, error 
		 */
	const { data, isLoading, error } = HandleChange(id,0)
	/**
	 * @returns { String } 'Il y a un probleme' if error 
	 */
    	if (error) {
		return <span>Il y a un problème</span>
	}
	/**
	 * Ternary
	 * 
	 * if isLoading = true returns 'Chargement...'
	 * 
	 * else returns <HorizontalMenu/>, <VerticalMenu /> and <UserMainData /> components
	 */
	return isLoading ? <div>Chargement...</div> : (
		<React.Fragment>
		<HorizontalMenu />
		<div className='menu-graph-bloc'>
			<VerticalMenu />
			<UserMainData dataUser={data.data} id={id}/>
		</div>
		</React.Fragment>
	)
	}
};

export default GetUserMainData