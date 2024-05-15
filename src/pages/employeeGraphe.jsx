import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';


export default function EmployeeGraphe()
{
    const data=[
        {employeerole:'vendor',number:29},
        {employeerole:'guide',number:120},
        {employeerole:'reservation',number:10},
    ]
    return(
        <>
         <div className="w-3/4 mx-80 py-20 border flex flex-col justify-center items-center gap-5">
    <h1 className='font-montserrat font-bold text-blue-900'>Number of employees for each role</h1>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="number" nameKey="employeerole" fill="#8884d8" label />
      </PieChart>
    </ResponsiveContainer>
    <div className="PieKey flex flex-col justify-center items-center gap-3">
        <h1 className='font-montserrat font-bold text-blue-900'> 29 - Vendor</h1>
        <h1 className='font-montserrat font-bold text-blue-900'> 120 - Guide</h1>
        <h1 className='font-montserrat font-bold text-blue-900'> 10 - Reservation</h1>
    </div>
  </div>
        </>
    )
}