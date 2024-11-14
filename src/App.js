import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';

import { useContext,createContext, useState } from 'react';
import Functionalities from './pages/functionalities';
import Vols from './pages/vols';
export const abc_voyage =createContext({
  vols:[],
  employees:[],
  updateVol:()=>null,
  deleteTicket:()=>null,
  addTicket:()=>null,
  id:0,
  
});

function App() {

  const[vols,setVols]=useState([
]);
  const[id,setId]=useState(1);
  const[employees,setEmployees]=useState([{familyName:'Anteur',name:'Mohamed',role:'reservation',Salary:35000},
  {familyName:'Baseeba',name:'Fawzi',role:'reservation',Salary:36500},
  {familyName:'Chellaf',name:'Islam',role:'reservation',Salary:30000},
  {familyName:'Chellaf',name:'Islam',role:'reservation',Salary:30000},
  {familyName:'Hadalen',name:'Houcine',role:'vendor',Salary:45000},
  {familyName:'Allali',name:'Ayoub',role:'vendor',Salary:33000},
  {familyName:'Youcef',name:'Mohamed',role:'vendor',Salary:45000},
  {familyName:'Ahmed',name:'Mohamed',role:'vendor',Salary:45000},
  {familyName:'Hadalen',name:'Houcine',role:'guide',Salary:100000},
  {familyName:'Allali',name:'Ayoub',role:'guide',Salary:100000},
  {familyName:'Youcef',name:'Mohamed',role:'guide',Salary:100000},
  {familyName:'Ahmed',name:'Mohamed',role:'guide',Salary:100000},

  ]);
  const[lessons,setLessons]=useState([{name:'SWOT MATRIX',module:'TIC',success:50.54},
  {name:'BCG MATRIX',module:'TIC',success:30},
  {name:'Loops',module:'Algorithms',success:90},
  {name:'Arrays',module:'Algorithms',success:81},
  {name:'DPR algorithm',module:'Algorithms',success:45},
  {name:'linked lists',module:'Algorithms',success:50},
  {name:'React framwork',module:'Javascript',success:55},
  {name:'functions',module:'Algorithms',success:49},

  ]);


  const updateVol=(data)=>{
    const id =data.payload.id;
    
    setVols(prevState => prevState.map(vol=>{
      if(vol.id=== id)
      {
        return {id:vol.id ,Departure:vol.Departure,Arrival:vol.Arrival,Date:data.payload.date,Time:data.payload.time,Price:data.payload.price}
      }
      return vol;
    }));

    window.history.back();
    
  }

  
  const deleteTicket=(data)=>{
    
    
    setVols(prevState => prevState.filter(user =>user.id !== parseInt(data.payload.id)));

    window.history.back();
    
  }

  const addTicket=(data)=>{
    
    
    setVols(prevState => [...prevState,data.payload]);
    setId(id+1);

    window.history.back();
    
  }


  return (
    
    <>
<abc_voyage.Provider value={{
          vols:vols,
          id:id,
          employees:employees,
          updateVol:updateVol,
          deleteTicket:deleteTicket,
          addTicket:addTicket
         
        }}>
             <Functionalities />
        </abc_voyage.Provider> 
    </>
  );
}

export default App;
