import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';

import { useContext,createContext, useState } from 'react';
import Functionalities from './pages/functionalities';
import Vols from './pages/vols';
export const abc_voyage =createContext({
  vols:[],
  employees:[],
  Lessons:[],
  id:0,
  


});

function App() {

  const[vols,setVols]=useState([{Departure_city:'Alger',city_of_arrival:'Paris',price:350,date:'15-07-2023',time:'15H:30min',sales_rat:20},
  {Departure_city:'Oran',city_of_arrival:'Toulouse',price:315,date:'15-07-2024',time:'14H:00min',sales_rat:10.68},
  {Departure_city:'Alger',city_of_arrival:'Lyon',price:400,date:'15-06-2024',time:'06H:30min',sales_rat:67},
  {Departure_city:'Chlef',city_of_arrival:'Marseille',price:350,date:'22-05-2024',time:'00H:00min',sales_rat:88},
  {Departure_city:'Oran',city_of_arrival:'Madrid',price:350,date:'10-06-2024',time:'15H:30min',sales_rat:91},
  {Departure_city:'Oran',city_of_arrival:'valencia',price:350,date:'10-06-2024',time:'15H:30min',sales_rat:91},
  {Departure_city:'alger',city_of_arrival:'Berlin',price:350,date:'10-07-2024',time:'18H:30min',sales_rat:80},
  {Departure_city:'alger',city_of_arrival:'Montreal',price:350,date:'20-06-2024',time:'13H:45min',sales_rat:99},
  {Departure_city:'Setif',city_of_arrival:'Marseille',price:350,date:'13-06-2024',time:'10H:30min',sales_rat:93},
  {Departure_city:'Alger',city_of_arrival:'Toulouse',price:370,date:'08-07-2024',time:' 19H:30min',sales_rat:42},
  {Departure_city:'Oran',city_of_arrival:'Marseille',price:420,date:'30-06-2024',time:'09H:30min',sales_rat:64},
  {Departure_city:'Setif',city_of_arrival:'Rome',price:550,date:'20-07-2024',time:'11H:30min',sales_rat:70},
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

  return (
    
    <>
<abc_voyage.Provider value={{
          vols:vols,
          id:id,
          employees:employees
         
        }}>
             <Functionalities />
        </abc_voyage.Provider> 
    </>
  );
}

export default App;
