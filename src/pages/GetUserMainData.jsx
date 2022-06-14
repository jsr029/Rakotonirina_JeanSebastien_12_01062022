import React from 'react'
/*import { useFetch } from '../components/utils/Hooks'*/
import UserMainData from '../components/UserMainData'
import { useParams } from 'react-router-dom'
import HorizontalMenu from '../components/HorizontalMenu'
import VerticalMenu from '../components/VerticalMenu'
import HandleChange from '../components/utils/HandleChange'
import NotFound from '../components/NotFound'

/**
 * function <GetUserMainData>
 * Catches the id with useParams and pass it in the url with useFetch hook
 * Uses the first endPoints http://localhost:5000/user/${id} to connect at the datas server 
 * Gets the user datas infos
 */
function GetUserMainData() {
	const id = useParams().id
	if(id !== '12' && id !== '18')
	{
		return (
			<>
				<h1>La valeur de id est incorrecte, elle doit être 12 ou 18</h1>
				<NotFound />
			</>
		)		
	}else{
	const { data, isLoading, error } = HandleChange(id,0)
    /*const { data, isLoading, error } = useFetch(
		`http://localhost:5000/user/${id}`
    )*/
    	if (error) {
		return <span>Il y a un problème</span>
	}
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