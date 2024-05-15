import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function MonthsGraphe()
{
    const data=[
        {month:'january',ticketNumber:230},
        {month:'febreary',ticketNumber:200},
        {month:'march',ticketNumber:440},
        {month:'april',ticketNumber:378},
        {month:'may',ticketNumber:500},
        {month:'june',ticketNumber:1123},
        {month:'july',ticketNumber:1534},
        {month:'augest',ticketNumber:3330},
        {month:'sebtember',ticketNumber:200},
        {month:'october',ticketNumber:230},
        {month:'november',ticketNumber:2219},
        {month:'december',ticketNumber:2421}
        
    ]
    return(
        <>
       <div className="w-3/4 mx-80 py-20 border flex flex-col justify-center items-center gap-5">
            <h1 className='font-montserrat font-bold text-blue-900'>Number of tickets for each moth</h1>
        <ResponsiveContainer width="100%" height={300} >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ticketNumber" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
        </div>
       

        </>
    )
}