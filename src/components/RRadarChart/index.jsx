import React from 'react'
import { Radar, RadarChart, PolarGrid, 
        PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from 'recharts';

function RRadarChart({ kind, perfData }) {          
        // Sample data
    let data = []
    for(let i=0; i < perfData.length; i++){
        data.push({
            name: kind[perfData[i].kind],
            min: perfData[i].value
        })
    }
      
        return (
            <ResponsiveContainer width="100%" height={300}>
            <RadarChart height={340} width={340} 
                outerRadius="70%" data={data}
                >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Legend />
                <Radar dataKey="min" stroke="#FF0101" 
                    fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
            </ResponsiveContainer>
        )
    }

export default RRadarChart;