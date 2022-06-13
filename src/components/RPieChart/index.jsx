import React from 'react'
import { PieChart, Pie, ResponsiveContainer} from 'recharts'

const RPieChart = ({ scoreUser }) => {        
        const score = scoreUser.score * 100
        // Sample data
        const data = [
        {name: '% de votre objectif', score: score},
        {name: '100% de votre objectif', score: 100}
        ]
        
        
        return (
                <>
                <h2 className='sportSee-pie'>{score}% <br /> de votre <br /> objectif</h2>
                <ResponsiveContainer width="100%" height={300}>
                <PieChart width={340} height={340}>
                <Pie data={data} dataKey="score" outerRadius={100} innerRadius={90} fill="#FF0000" />
                </PieChart>
                </ResponsiveContainer>
                </>
        )
}

export default RPieChart;