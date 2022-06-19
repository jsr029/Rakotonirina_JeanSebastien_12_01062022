import React from 'react'
import UserActivityDataItem from '../UserActivityDataItem'

/**
 * Transmits data and id to UserActivityDataItem component
 * 
 * @param { Object } data 
 * data retrieves userId and average-sessions array
 * 
 * @param { Number } id 
 * id which was passed in the url
 */
function UserActivityData({ data, id }) {
    return (
        <>
                 <div className='sportSee-activity'>
                    <UserActivityDataItem
                        userId={id}
                        sessions={data.sessions}
                    />
                </div>
         </>
    )
};

export default UserActivityData