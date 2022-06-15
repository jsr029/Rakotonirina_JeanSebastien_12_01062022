import React from 'react'
import { Radar, RadarChart, PolarGrid, 
        PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';

function RRadarChart({ kind, perfData }) {   
    console.log(kind)
        // Sample data
    let data = []
    const frenchKind = {
        6:'Intensité',
        5:'Vitesse',
        4:'Force',
        3:'Endurance',
        2:'Energie',
        1:'Cardio',
    }
    perfData.sort((a, b) => b.kind - a.kind)
    for(let i=0; i < perfData.length; i++){
        data.push({
            name: frenchKind[perfData[i].kind],
            min: perfData[i].value
        })
    }
      
        return (
            <ResponsiveContainer width="100%" height={300}>
            <RadarChart 
                outerRadius="60%" data={data}
                >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" stroke="white" />
                <Legend />
                <Radar dataKey="min" stroke="#FF0101" 
                    fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
            </ResponsiveContainer>
        )
    }

export default RRadarChart;