import { Route, Routes, BrowserRouter} from "react-router-dom";

import Home from "./Pages/Home";

import Signup from "./Pages/Signup";
import Incidents from "./Pages/Incidents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { UserContext } from "../src/Components/userContext";
import axios from "axios";
import Dashboard from "./Dashboard";
import Account from "./Pages/Account";
import Offenses from "./Pages/Offenses";

import Footer from "./Components/Footer";
import Reports from "./Pages/Reports";
import EditOffenses from "./Components/editOffenses";


function App() {

  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    }

    setLoading(false);
  }, []);

  if (loading) return <h1>Loading ....</h1>;

  return  (

  <UserContext.Provider value={{ user, setUser }}>
   <BrowserRouter>
   {/* <Header /> */}
   <Routes>

     <Route path="/" element={<Home />} />
     {/* <Route path="/login" element={<Login />} /> */}
     <Route path="/signup" element={<Signup />} />
     <Route path="/incidents" element={<Incidents />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/account" element={<Account />} />
     <Route path="/offenses" element={<Offenses />} />
     <Route path="/reports" element={<Reports />} />
     
     <Route path="/editOffense" element={<EditOffenses />} />
    
     
    
     
   </Routes>
   
   <Footer/>
   <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

   </BrowserRouter>

   </UserContext.Provider>
  );
}

export default App;
