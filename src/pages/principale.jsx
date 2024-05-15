import { Link } from "react-router-dom"
import Phone from "../icons/phoneIcon"
import studentImg from '../images/student.jpg'
import TownGraphe from "./townGraphe"
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart,Line } from 'recharts';
import { PieChart,Pie } from "recharts";

export default function Principale()


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

  const data1=[
   {Tickets:'First Class',numberSales:10098},
   {Tickets:'Business Class',numberSales:15000},
   {Tickets:'Premium Economy Class',numberSales:12890},
   {Tickets:'Economy Class',numberSales:21098},
]

const data3=[
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
        <div className="w-3/4 mx-80 grid grid-cols-3 grid-rows-3 items-center justify-between px-4  py-3 gap-5 ">
         <Link to={'/vols'} className=" col-span-1 cursor-pointer hover:bg-blue-600 bg-blue-400 text-white rounded-lg flex justify-center items-center font-bold font-montserrat py-12">vols</Link>
         <Link to={'/employees'}  className="col-span-1 cursor-pointer hover:bg-red-600 bg-red-400 text-white rounded-lg flex justify-center items-center font-bold font-montserrat py-12">Salaries</Link>
         <Link className="col-span-1 cursor-pointer hover:bg-yellow-600 bg-yellow-400 text-white rounded-lg flex justify-center items-center font-bold font-montserrat py-12">Reservations</Link>
           <Link to={'/TownsTickets'} className=" col-span-2 row-span-2 cursor-pointer">
            <ResponsiveContainer  width="100%" height={300} >
            <BarChart className='mx-auto cursor-pointer '
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
            </ResponsiveContainer>
            
          
            </Link>
            <Link to={'/EmployeesGraphe'} className="cursor-pointer col-span-1 row-span-2">
            <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data1} dataKey="numberSales" nameKey="Tickets" fill="#8884d8" label />
      </PieChart>
    </ResponsiveContainer>
            </Link>
            <Link to={'/MonthsTickets'} className=" col-span-3 row-span-1 cursor-pointer">
            <ResponsiveContainer width="100%" height={300} >
      <LineChart
        width={500}
        height={300}
        data={data3}
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
               </Link>    
        </div>
    )
}