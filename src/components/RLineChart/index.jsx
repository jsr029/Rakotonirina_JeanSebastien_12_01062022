import React from 'react'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis
} from 'recharts';
  
function RLineChart({ sessions }) {
    let pdata = []
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    for(let i=0; i < sessions.length; i++){
        pdata.push({
            name: days[i],
            min: sessions[i].sessionLength
        })
    }
    return (
        <>
            <h2 className="text-sessions">
                Duréee Moyenne <br/>des Sessions
            </h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={pdata} 
                width="100%" 
                height={340} 
                margin={{ top:0, bottom:0, right: 5, left:-55 }} 
                stroke="white"
                >
                    <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        interval={'preserveStartEnd'} 
                        stroke="white"
                        />
                    <YAxis dataKey="y" domain={[0, 100]} xd={25} axisLine={false} tick={false} />
                    <Legend />
                    <Tooltip />
                    <Line type="monotone" dataKey="min"
                        stroke="#FFF" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
export default RLineChart