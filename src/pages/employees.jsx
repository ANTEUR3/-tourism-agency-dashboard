import { useContext } from "react";
import { abc_voyage } from "../App";
export default function Employees()

{
  const Vols=useContext(abc_voyage)
  const displayEmployees=Vols.employees.map((user,key)=>{
    return <div className=" grid grid-cols-5  w-3/4 gap-1   " key={key}>
        <h1 className="col-span-1 font-bold font-montserrat">{user.familyName}</h1>
        <h1 className="col-span-1 font-bold font-montserrat">{user.name}</h1>
        <h1 className="col-span-1 font-bold font-montserrat">{user.role}</h1>
        <h1 className="col-span-1 font-bold font-montserrat">{user.Salary} <span className="font-bold text-red-600">DA</span></h1>
        <button className="col-span-1 rounded-md py-1 px-1 text-white font-bold  bg-yellow-400 hover:bg-yellow-300">Update</button>
            </div>
})
    return(
<>
<div className="w-4/5 mx-80 px-1 py-10 flex flex-col justify-center gap-4 items-start  ">
            <button className="mb-3 px-2 py-2 rounded-md bg-green-500 text-white font-bold hover:bg-green-400">new employees</button>
            <div className=" grid grid-cols-5  w-3/4 gap-1   " >
            <h1 className="col-span-1 font-bold font-montserrat text-red-600">Family name</h1>
          <h1 className="col-span-1 font-bold font-montserrat text-red-600">name</h1>
            <h1 className="col-span-1 font-bold font-montserrat text-red-600">role</h1>
            <h1 className="col-span-1 font-bold font-montserrat text-red-600">salary</h1>
             </div>
            {displayEmployees}
        </div>
</>
    )
}