import { useContext } from "react";
import { abc_voyage } from "../App";
export default function Vols()
{
   
    const Vols =useContext(abc_voyage);
 
    const displayStudents=Vols.vols.map((user,key)=>{
        return <div className=" grid grid-cols-7  w-3/4 gap-1   " key={key}>
            <h1 className="col-span-1 font-bold font-montserrat">{user.Departure_city}</h1>
            <h1 className="col-span-1 font-bold font-montserrat">{user.city_of_arrival}</h1>
            <h1 className="col-span-1 font-bold font-montserrat">{user.date}</h1>
            <h1 className="col-span-1 font-bold font-montserrat">{user.time}</h1>
            <h1 className="col-span-1 font-bold font-montserrat">{user.price} <span className="text-red-700">euro</span> </h1>
            <h1 className="col-span-1 font-bold font-montserrat">{user.sales_rat} <span className="font-bold text-red-700">%</span></h1>
            <button className="col-span-1 rounded-md py-1 px-1 text-white font-bold  bg-yellow-400 hover:bg-yellow-300">Update</button>
                </div>
    })
    return(
        <>
        <div className="w-4/5 mx-80 px-1 py-10 flex flex-col justify-center gap-4 items-start  ">
            <button className="mb-3 px-2 py-2 rounded-md bg-green-500 text-white font-bold hover:bg-green-400">new ticket</button>
            <div className=" grid grid-cols-7  w-3/4 gap-1   " >
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">departure</h1>
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">destination</h1>
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">Date</h1>
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">Time</h1>
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">Price</h1>
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">Sales of ration</h1>
             </div>
            {displayStudents}
        </div>
        </>
    )
}