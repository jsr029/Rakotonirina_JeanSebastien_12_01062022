import React from 'react'
import DBarChart from '../DBarChart'

/**
 * Displays datas userId and sessions for DBarChart component
 * @param { Number } userId props user id
 * @param { Object } sessions props user sessions
 */
function UserActivityDataItem({ userId, sessions }){
    let sessionsDay = []
    let sessionsKg = []
    let sessionsCal = []    

    for(let i=0; i < sessions.length; i++){
        sessionsDay.push(sessions[i].day)
        sessionsKg.push(sessions[i].kilogram)
        sessionsCal.push(sessions[i].calories)
    }
    
    return (
        <>
            <div className='sportSee-activity-item'>
                <DBarChart sessions={sessions} />
            </div>
         </>    
    )
}

export default UserActivityDataItem