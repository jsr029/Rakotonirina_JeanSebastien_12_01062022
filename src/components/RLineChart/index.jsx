import React from 'react'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
  
function RLineChart({ sessions }) {
    let names = []
    let asLength = []
    let pdata = []
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    for(let i=0; i < sessions.length; i++){
        names.push(sessions[i].day)
        asLength.push(sessions[i].sessionLength)
        pdata.push({
            name: days[i],
            session: sessions[i].sessionLength 
        })
    }
    return (
        <>
            <h2 className="text-sessions">
                Duréee Moyenne <br/>des Sessions
            </h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={pdata} width={300} height={340}>
                    <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        interval={'preserveStartEnd'} />
                    <YAxis dataKey="y" domain={[0, 100]} dx={-25} axisLine={false} tick={false} />
                    <Legend />
                    <Tooltip />
                    <Line type="monotone" dataKey="session"
                        stroke="black" activeDot={{ r: 2 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
export default RLineChart