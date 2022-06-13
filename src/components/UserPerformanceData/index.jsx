import React from 'react'
import RRadarChart from '../RRadarChart'

function UserPerformanceData({ perfData, performance }) {
    return (
        <>
                <div className='sportSee-performance'>
                    <RRadarChart
                        userId={perfData.userId}
                        kind={perfData.kind}
                        perfData={perfData.data}
                        performance={performance}
                    />
                </div>
        </>
    )
};

export default UserPerformanceData