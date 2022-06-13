import React from 'react'
import { useParams } from 'react-router-dom';
import EndPointsUser from '../components/utils/EndPointsUser';
import EndPointsUserActivity from '../components/utils/EndPointsUserActivity';
import EndPointsUserAverageSessions from '../components/utils/EndPointsUserAverageSessions';
import EndPointsUserPerformance from '../components/utils/EndPointsUserPerformance';
import UserMainData from '../components/UserMainData'

function CreateDataBase (){
    let id = useParams().id

    const userData = EndPointsUser(id).data
    const userActivity = EndPointsUserActivity(id).data
    const userAverageSessions = EndPointsUserAverageSessions(id).data
    const userPerformance = EndPointsUserPerformance(id).data
    const isLoading = EndPointsUser(id).isLoading
    const error = EndPointsUser(id).error

       let user = {
            'userData' : userData.data,
            'userActivity' : {...userActivity.data},
            'userAverageSessions' : {...userAverageSessions.data},
            'userPerformance' : {...userPerformance.data},
            'isLoading': isLoading,
            'error': error
        }
        console.log(user)
    return (
        <>
            <div className='sportSee-dataUser'>
                <UserMainData 
                    userData={user.userData}
                />
            </div>
        </>
    )
}

export default CreateDataBase;