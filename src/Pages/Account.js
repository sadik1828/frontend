import { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import AdminProfile from "../Components/AdminProfile";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

function Account() {

const [passwordInputs, setPasswordInputs] = useState();

async function changePassword(){
  try{

  const token = localStorage.getItem("token");

const response = await axios.put(
  "http://localhost:8000/user/changePassword", passwordInputs,

{
  headers:{
    authentication: token,
  },
}

  );
toast.success(response.data.clientMessage);
  } catch(e){
    toast.error(e.response.data.clientMessage);
    console.log(e.response);
  }

}

  return (
    <div className="flex">
    <Sidebar />
  
      <div className='flex-1 flex flex-col'>
      <Header />
      <div className="flex justify-center " >
        <div className="w-1/2 pt-10">
       

       {/* ////////////////// */}
       <div className=" bg-white p-4  drop-shadow-md">
            <h2 className="font-bold text-2xl text-center">Change Your Profile</h2>
            <div className="mt-5 space-y-2">
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                />
                {/* <input
                  type="text"
                  className="input w-full"
                  placeholder="Phone"
                /> */}
              </div>

              <input type="text" className="input w-full" placeholder="Email" />

              <div className="flex justify-center">
                <button className="btn-dark">Update</button>
              </div>
            </div>
          </div>


       {/* ///////////////// */}
          <div className=" bg-neutral-50 p-4 mt-20 drop-shadow-md">
            <h2 className="font-bold text-2xl text-center">Change Your Password</h2>
            <div className="mt-5 space-y-2  pt-2 ">
              <input
                type="text"
                className="input w-full"
                placeholder="Old Password"
                onChange={(e)=>setPasswordInputs({...passwordInputs, oldPassword: e.target.value})}
              />
              <input
                type="text"
                className="input w-full"
                placeholder="New Password"
                onChange={(e)=>setPasswordInputs({...passwordInputs, newPassword: e.target.value})}
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Confirm New Password"
                onChange={(e)=>setPasswordInputs({...passwordInputs, confirmPassword: e.target.value})}
              />

              <div className="flex justify-center text-purple-600 ">
                <button className="btn-dark mt-5" onClick={changePassword}>Change</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Account;