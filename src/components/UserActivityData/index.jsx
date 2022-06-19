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
 * @returns { Component } UserActivityDataItem with id and data.sessions as userId and sessions props
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