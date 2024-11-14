import React, { useContext, useEffect, useState, useRef } from "react";
import { abc_voyage } from "../App";
import { useParams } from "react-router-dom";

export default function DeleteTicket()
{
    const params = useParams();

    const context =useContext(abc_voyage);
useEffect(()=>{

        
        context.deleteTicket({
            payload:{id:parseInt(params.id)}})
    
},[])

    
    return <>
      
    </>
}