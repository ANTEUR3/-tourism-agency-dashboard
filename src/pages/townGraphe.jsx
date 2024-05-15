import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function TownGraphe()
{
    const data=[
        {town:'Paris',ticketNumber:1670},
        {town:'toulouse',ticketNumber:2190},
        {town:'Lyon',ticketNumber:450},
        {town:'Berlin',ticketNumber:500},
        {town:'Barcelona',ticketNumber:220},
        {town:'Madrid',ticketNumber:1100},
        {town:'Rome',ticketNumber:120},
        {town:'Makkah',ticketNumber:3278},
        {town:'Madinah',ticketNumber:1230},
        {town:'Montreal',ticketNumber:97},
        {town:'New York',ticketNumber:70},
        {town:'Dubai',ticketNumber:610},
    ]
    return(
        <>
        <div className="w-3/4 mx-80 py-20 border flex flex-col justify-center items-center gap-5">
            <h1 className='font-montserrat font-bold text-blue-900'>Number of tickets sold in terms of cities</h1>
        <BarChart className='mx-auto '
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="town" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="ticketNumber" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
        
        </>
    )
}