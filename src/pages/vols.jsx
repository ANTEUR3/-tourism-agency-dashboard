import { useContext } from "react";
import { abc_voyage } from "../App";
import { Link } from "react-router-dom";
export default function Vols()
{
   
    const Vols =useContext(abc_voyage);
 
    const displayStudents=Vols.vols.map((user,key)=>{
        return <div className=" grid grid-cols-8  w-3/4 gap-1   " key={key}>
            <h1 className="col-span-1 font-bold font-montserrat">{user.id}</h1>
            <h1 className="col-span-1 font-bold font-montserrat">{user.Departure}</h1>
            <h1 className="col-span-1 font-bold font-montserrat">{user.Arrival}</h1>
            <h1 className="col-span-1 font-bold font-montserrat">{user.Date}</h1>
            <h1 className="col-span-1 font-bold font-montserrat">{user.Time}</h1>
            <h1 className="col-span-1 font-bold font-montserrat">{user.Price} <span className="text-red-700">euro</span> </h1>
            <button className="col-span-1 rounded-md py-1 px-1 text-white font-bold  bg-yellow-400 hover:bg-yellow-300"><Link to={`/Ticket/${user.id}/update`} className="">Update</Link></button>
            <button className="col-span-1 rounded-md py-1 px-1 text-white font-bold  bg-red-400 hover:bg-red-300"><Link to={`/Ticket/${user.id}/delete`} className="">Delete</Link></button>
                </div>
    })
    return(
        <>
        <div className="w-4/5 mx-80 px-1 py-10 flex flex-col justify-center gap-4 items-start  ">
            <Link to={'/Ticket/new'}><button className="mb-3 px-2 py-2 rounded-md bg-green-500 text-white font-bold hover:bg-green-400">new ticket</button></Link>
            <div className=" grid grid-cols-8  w-3/4 gap-1   " >
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">code</h1>
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">departure</h1>
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">destination</h1>
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">Date</h1>
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">Time</h1>
            <h1 className="col-span-1 text-red-600 font-bold font-montserrat ">Price</h1>
            
             </div>
            {displayStudents}
        </div>
        </>
    )
}