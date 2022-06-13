import React from 'react'

function UserMainDataItem({ id, dataInfos, keyData, score }){
    console.log(dataInfos)
    return (
        <>
            <h1>
                <span className='sportSee-item-welcome'>Bonjour</span> 
                <span className='sportSee-item-firstname'> {dataInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="emoji">👏</span></p>
            <ul className='sportSee-item'>
                <li className='sportSee-item-todayScore'>
                {score}
                </li>
                <li className='sportSee-item-calorieCount'>{keyData.calorieCount / 1000}kCal</li>
                <li className='sportSee-item-proteineCount'>{keyData.proteinCount}g</li>
                <li className='sportSee-item-carbohydrateCount'>{keyData.carbohydrateCount}g</li>
                <li className='sportSee-item-lipidCount'>{keyData.lipidCount}g</li>
            </ul>
         </>    
    )
}

export default UserMainDataItem