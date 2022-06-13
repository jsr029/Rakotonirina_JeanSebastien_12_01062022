import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


function DBarChart({ sessions }) {
   let data = []
  for(let i=0; i < sessions.length; i++){
      data.push({
        name: sessions[i].day,
        kg: sessions[i].kilogram,
        cal: sessions[i].calories
      })
  }

  return (
    <>
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={320}>
          <BarChart
          data={data}
            margin={{
              top: -24,
              right: 29,
              left: 32,
              bottom: 23
            }}
          >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip wrapperStyle={{ fontFamily: 'Roboto, sans-serif' }} />
      <Legend         
        wrapperStyle={{ fontFamily: 'Roboto, sans-serif' }}
        verticalAlign="top"
        align="right"
        height={12}
      />
      <Bar dataKey="kg" barSize={10} fill="#282D30" />
      <Bar dataKey="cal" barSize={10} fill="#FF0101" />
    </BarChart>
    </ResponsiveContainer>
    </>
  );
}
export default DBarChart;