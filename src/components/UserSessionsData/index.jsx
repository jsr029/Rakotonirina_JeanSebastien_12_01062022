import React from 'react'
import RLineChart from '../RLineChart'

function UserSessionsData({ data }) {
    return (
        <>
                 <div className='sportSee-sessions'>
                    <RLineChart sessions={data.sessions} />
                </div>
         </>
    )
};

export default UserSessionsData