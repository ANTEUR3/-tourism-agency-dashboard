import { PieChart,Pie,Cell,Label,ResponsiveContainer } from "recharts"
export default function TicketsGraphe()
{
    const data=[
        {Tickets:'First Class',numberSales:10098},
        {Tickets:'Business Class',numberSales:15000},
        {Tickets:'Premium Economy Class',numberSales:12890},
        {Tickets:'Economy Class',numberSales:21098},
    ]

   

    return(
<>
<div className="w-3/4 mx-80 py-20 border flex flex-col justify-center items-center gap-5">
    <h1 className='font-montserrat font-bold text-blue-900'>Number of tickets for each classe</h1>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="numberSales" nameKey="Tickets" fill="#8884d8" label />
      </PieChart>
    </ResponsiveContainer>
    <div className="PieKey flex flex-col justify-center items-center gap-3">
        <h1 className='font-montserrat font-bold text-blue-900'> 10098 - First Class</h1>
        <h1 className='font-montserrat font-bold text-blue-900'> 15000 - Business Class</h1>
        <h1 className='font-montserrat font-bold text-blue-900'> 12890 - Premium Economy Class</h1>
        <h1 className='font-montserrat font-bold text-blue-900'> 21098 - Economy Class</h1>
    </div>
  </div>
</>
)
}