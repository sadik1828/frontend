
import Searching from "./Components/Searching";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
// import BarChart from "./Components/Barchart";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Account from './Pages/Account'

const Dashboard = () => {
  



  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 bg-slate-300">
      <Header />
      <div className='px-12 pt-10'>
      <Searching />
      </div>

      {/* <div>
        <BarChart />
      </div> */}
    </div>
    </div>
  );
};
export default Dashboard;