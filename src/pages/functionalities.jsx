import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Outlet } from "react-router-dom"; 
import Vols from "./vols";
import PlanIcon from "../icons/planIcon";
import EmailIcon from "../icons/emailIcon";
import FacebookIcon from "../icons/facebookIcon";
import Phone from "../icons/phoneIcon";
import Principale from "./principale";
import Employees from "./employees";
import Statistics from "./Statistics";

import TownGraphe from "./townGraphe";
import TicketsGraphe from "./TicketsGraphe";
import MonthsGraphe from "./monthsGraphe";
import EmployeeGraphe from "./employeeGraphe";
import { useState } from "react";
import UpdateVol from "./UpdateVol";
import DeleteTicket from "./DeleteTicket";
import NewTicket from "./newTicket";
export default function  Functionalities()

{
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return(
        <>
        <BrowserRouter>
    <div className=" bg-gray-200  w-1/6 h-screen flex flex-col justify-center items-center px-2 gap-20 absolute">
        <PlanIcon/>
        <div className="flex flex-col justify-center items-center gap-6 mx-auto " >
            <li onClick={() => handleItemClick(0)} className={`list-none ${activeIndex === 0 ? 'active' : ''}`}>
                <Link className="text-xl text-black font-bold  hover:text-yellow-500  " to={'/'}>abc-Travel</Link>
            </li>
            <li onClick={() => handleItemClick(1)} className={`list-none ${activeIndex === 1 ? 'active' : ''}`}>
                <Link className="text-xl text-black font-bold  hover:text-yellow-500 " to={'/vols'}>tickets </Link>
            </li>
            <li onClick={() => handleItemClick(2)} className={`list-none ${activeIndex === 2 ? 'active' : ''}`}>
                <Link className="text-xl text-black font-bold  hover:text-yellow-500 " to={'/employees'}>employees </Link>
            </li>
            <li onClick={() => handleItemClick(3)} className={`list-none ${activeIndex === 3 ? 'active' : ''}`}>
                <Link className="text-xl text-black font-bold  hover:text-yellow-500 " to={'/modules'}>Statistics </Link>
            </li>
          
        </div>
        <div className="flex justify-center items-center w-full ">
        <FacebookIcon/>
         <EmailIcon/>
         <Phone/>
    
        </div>
    </div>
    <Routes>
        <Route index element={<Principale/>} />
        <Route path={'/vols'} element={<Vols/>} />
        <Route path={'/employees'} element={<Employees/>} />
        <Route path={'/modules'} element={<Statistics/>} />
        <Route path={'/TownsTickets'} element={<TownGraphe/>} />
        <Route path={'/MonthsTickets'} element={<MonthsGraphe/>} />
        <Route path={'/EmployeesGraphe'} element={<EmployeeGraphe/>} />
        <Route path={'/TicketsGraphe'} element={<TicketsGraphe/>} />
        <Route path={'/Ticket/:id/update'} element={<UpdateVol/>} />
        <Route path={'/Ticket/:id/delete'} element={<DeleteTicket/>} />
        <Route path={'/Ticket/new'} element={<NewTicket/>} />
    </Routes>
    
    </BrowserRouter>

    <Outlet />
       
        </>
    )
}