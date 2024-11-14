import { useCallback, useContext, useRef } from "react";
import { abc_voyage } from "../App";

export default function NewTicket()
{
const context =useContext(abc_voyage);

    const Id=useRef();
    const Departure=useRef();
    const arrival=useRef();
    const Date=useRef();
    const Time=useRef();
    const Price=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
    context.addTicket({

        payload:{
            id:context.id,
            Departure :Departure.current.value,
            Arrival :arrival.current.value,
           Date: Date.current.value,
            Time: Time.current.value,
            Price:Price.current.value,
        }
       
    });
}
    return(
        <>
        <form action="" className="mx-80 px-2 py-20 w-3/4 gap-3" onSubmit={handleSubmit}>
           
            <div className="py-2">
            <label className=" text-gray-600 " htmlFor="">
               Departure{" "}
            </label>
            <div className="  ">
              <input
              ref={Departure}
                type="text"
                className="rounded-md w-full  shadow-md py-2 px-2  "
                placeholder="Departure "
              />
            </div>
            </div>
            <div className="py-2">
            <label className=" text-gray-600 " htmlFor="">
            arrival{" "}
            </label>
            <div className="  ">
              <input
              ref={arrival}
                type="text"
                className="rounded-md w-full  shadow-md py-2 px-2  "
                placeholder="Arrival"
              />
            </div>
            </div>
            <div className="py-2">
            <label className=" text-gray-600 " htmlFor="">
               Date{" "}
            </label>
            <div className="  ">
              <input
              ref={Date}
                type="date"
                className="rounded-md w-full  shadow-md py-2 px-2  "
                placeholder="Date"
              />
            </div>
            </div>
            <div className="py-2">
            <label className=" text-gray-600 " htmlFor="">
               Time{" "}
            </label>
            <div className="  ">
              <input
              ref={Time}
                type="time"
                className="rounded-md w-full  shadow-md py-2 px-2  "
                placeholder="Time"
              />
            </div>
            </div>
            <div className="py-2">
            <label className=" text-gray-600 " htmlFor="">
               Price{" "}
            </label>
            <div className="  ">
              <input
              ref={Price}
                type="number"
                className="rounded-md w-full  shadow-md py-2 px-2  "
                placeholder="Ticket ID"
              />
            </div>
            </div>
            <div className="flex items-center justify-start gap-2">
                <button className=" rounded-md px-2 py-2 font-montserrat font-bold text-white bg-yellow-500 hover:ng-yellow-300">submit</button>
                <button className=" rounded-md px-2 py-2 font-montserrat font-bold text-white bg-red-500 hover:ng-red-300">cancel</button>
          
            </div>
        </form>
        </>
    )
}