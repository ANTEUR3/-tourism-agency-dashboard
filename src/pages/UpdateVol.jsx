import React, { useContext, useEffect, useState, useRef } from "react";
import { abc_voyage } from "../App";
import { useParams } from "react-router-dom";

export default function UpdateVol()
{


    const context = useContext(abc_voyage);
  const params = useParams();

  const [ticketUpdate , setTicketUpdate] = useState([]);

  const Price = useRef();
  const Date = useRef();
  const Time = useRef();

 
  const { id } = params;
  useEffect(() => {
 
    const Ticket = context.vols.filter((user) => user.id == parseInt(id));
if (Ticket.length > 0) {
    setTicketUpdate(...Ticket);
} else {
  console.error('noooooooo');
}

  }, []);

console.log(ticketUpdate);
  const handleSubmit=(e)=>{
    e.preventDefault();
    context.updateVol({

        payload:{
            id:parseInt(params.id),
            price : Price.current.value,
           date: Date.current.value,
            time: Time.current.value
        }
       
    });

    Date.current.value='';
    Price.current.value='';
    Time.current.value='';
}


    return(
        <>
        <form action="" onSubmit={handleSubmit} className=" py-20  border-black mx-80 px-4 gap-4 flex flex-col justify-between items-center w-3/4">
        <div className="px-2 w-4/5 ">
            <label className=" text-gray-600 " htmlFor="">
              current ID{" "}
            </label>
            <div className="  ">
              <input
                type="number"
                readOnly
                defaultValue={ticketUpdate.id}
                className="rounded-md w-full  shadow-md py-2 px-2  "
                placeholder="your id"
              />
            </div>
          </div>
          <div className="px-2 w-4/5 ">
            <label className=" text-gray-600 " htmlFor="">
              Price
            </label>
            <div className="  ">
              <input
                type="number"
                id="fullName"
                ref={Price}
                defaultValue={ticketUpdate.Price}
               className="rounded-md w-full  shadow-md py-2 px-2  "
                placeholder="full name"
              />
            </div>
          </div>
          <div className="px-2 w-4/5 ">
            <label className=" text-gray-600 " htmlFor="">
              Date
            </label>
            <div className="  ">
              <input
                type="text"
                id="fullName"
                ref={Date}
                defaultValue={ticketUpdate.Date}
              className="rounded-md w-full  shadow-md py-2 px-2  "
                placeholder="full name"
              />
            </div>
          </div>
          <div className="px-2 w-4/5 ">
            <label className=" text-gray-600 " htmlFor="">
              Time
            </label>
            <div className="  ">
              <input
                type="text"
                id="fullName"
                ref={Time}
                defaultValue={ticketUpdate.Time}
             className="rounded-md w-full  shadow-md py-2 px-2  "
                placeholder="full name"
              />
            </div>
          </div>
          <div className="px-2 w-4/5 flex items-start gap-1">
            <button className="px-3 py-2 text-white bg-yellow-500 hover:bg-yellow-400 rounded-md">submit</button>
            <button className="px-3 py-2 text-white bg-red-500 hover:bg-red-400 rounded-md">cancel</button>
          </div>
        </form>
        </>
    )
}