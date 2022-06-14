import React from 'react'
import GetUserPerformance from '../../pages/GetUserPerformance'
import GetUserActivityData from '../../pages/GetUserActivityData'
import GetUserSessionsData from '../../pages/GetUserSessionsData'
import RightBloc from '../RightBloc'
import RPieChart from '../RPieChart'

/** 
 * Component <UserMainData> 
 * Displays all data we need from all endpoints
 * Calls components :
 * <GetUserActivityData> retrieves user activity data for Bar chart
 * <GetUserSessionsData> retrieves user average sessions data for Line chart
 * <GetUserPerformance> retrieves user performance data for radar chart
 * <RPieChart> retrieves user score data for pie chart
 * <RightBloc> retrieves user data for displaying calories, lipid, protein and glucid counts in the right bloc
 * @params {string} dataUser is an objet which contains userInfos (ids), keydata (counts) 
*/
function UserMainData({ dataUser }) {
    /**Datas from http://localhost:3000/user/${userId} endpoint */
    const USERMAINNAME = dataUser.userInfos.firstName
    const USERMAINCAL = dataUser.keyData.calorieCount
    const USERMAINPRO = dataUser.keyData.proteinCount
    const USERMAINCAR = dataUser.keyData.carbohydrateCount
    const USERMAINLIP = dataUser.keyData.lipidCount
    /** end Datas */

    return (
        <>
            <div className='sportSee-main'>
                <h2><span className='sportSee-main-hello'>Bonjour</span> <span className='sportSee-main-name'>{USERMAINNAME}</span></h2>
                <p>Félicitation ! Vous avez explosé vos objectifs hier <span role='img' aria-label='emoji'>👏</span></p>
                <div className='spotSee-main-bloc'>
                    <div className='sportSee-main-graph'>
                        <GetUserActivityData id={dataUser.id}/>
                        <div className='sportSee-main-grapBloc'>
                            <GetUserSessionsData id={dataUser.id}/>
                            <GetUserPerformance  id={dataUser.id}/>
                            <div className='sportSee-score'>
                                <RPieChart scoreUser={dataUser} />
                            </div>
                        </div>
                    </div>
                    <RightBloc 
                        calories={USERMAINCAL}
                        protein={USERMAINPRO}
                        glucid={USERMAINCAR}
                        lipid={USERMAINLIP}
                        />
                </div>
            </div>
         </>
    )
};

export default UserMainData