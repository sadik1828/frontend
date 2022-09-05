import { useState } from "react";
import User from '../assets/User.png'
import Chart_fill from '../assets/Chart_fill.png'
import Search from '../assets/Search.png'
import Calendar from '../assets/Calendar.png'
import control from '../assets/control.png'
import telesomlogo from '../assets/telesomlogo.png'
import offense from '../assets/offense.png'


import { useNavigate} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./userContext";

const Sidebar = () => {

    const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", path: '/dashboard', src: Chart_fill },
    { title: "Reports ", path: '/reports', src: Calendar },
    { title: "Incidents", path: '/incidents', src: Search },
    { title: "Offenses",  path: '/offenses', src: offense},
    { title: "Accounts", path: '/account', src: User },
  ];

  
  
  // NOTE: MY USESTATES
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();


   // NOTE: MY FUNCTION OF BUTTON
   function Logout(){
    localStorage.removeItem("token");
    setUser(false);
    navigate("/");
   }

    return (
        <div>
            <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-green-900 h-screen px-12  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-col gap-x-4 items-center">
          <img
            src={telesomlogo}
            className={`cursor-pointer duration-500 w-16 rounded-full ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`mt-4 text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Offenses Manager
          </h1>
        </div>
        <ul className="pt-6 border-t border-gray-300 mt-6">
          {Menus.map((Menu, index) => (
            <a href={Menu.path} 
            key={index}>
                <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img className='w-8 h-8' src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
            </a>
          ))}
        </ul>
        <div>
        <button className="mt-20 w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-green-300 rounded-md focus:outline-none font-bold"
        onClick={Logout}
        >
          logout
        </button>
        </div>
      </div>
        </div>
    )
}

export default Sidebar