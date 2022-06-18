import React from 'react'
import UserActivityDataItem from '../UserActivityDataItem'

/**
 * function <UserActivityData> transmits props to <UserActivityDataItem />
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