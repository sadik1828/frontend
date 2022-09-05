import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Components/userContext";

function Signup (){

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    // FUNCTION PART
    async function Submit(e) {
        e.preventDefault()
      try {
        const response = await axios.post("http://localhost:8000/user/signup", inputs);
        toast.success(response.data.clientMessage);
        localStorage.setItem("token", response.data.token);
        setUser(true);
        navigate("/dashboard");

      } catch (e) {
        toast.error(e.response.data.clientMessage);
      }
    }


    return (

    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-violet-100 ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
            <h2 className="text-2xl font-semibold text-center text-purple-700 mt-4">signup account</h2>
           

            <form>

                {/* QAYBTI MAGACA */}
                      <div className="mb-2">
    
                        <label
                            for="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            {/* Name */}
                        </label>
                        <input
                            type="name"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="full name"
                            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                        />
                    </div>

                    {/* QAYBTI EMAIL KA */}

                      <div className="mb-2">
    
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            {/* Email */}
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="email"
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                       />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            {/* Password */}
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="**************"
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                   
               {/* // confirm password       */}
                    <div className="mb-2">
                        <label
                            for="confirmPassword"
                            className="block text-sm font-semibold text-gray-800"
                            
                        >
                            {/* ConfirmPassword */}
                        </label>
                        <input
                            type="Confirmpassword"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="**************"
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                       />
                    </div>

                    {/* // DEPARTMENT PART       */}
                    {/* <div className="mb-2">
                        <label
                            for="Department"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Department
                        </label>
                        <input
                            type="Department"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setInputs({ ...inputs, department: e.target.value })}
                       />
                    </div> */}

                    {/* DEPARMENT PART */}
             </form>

               <div className="mt-6" >
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 font-bold"
                    onClick={(e)=>Submit(e)}
                    >
                        Signup
                    </button>
                </div>

                <p className="mt-3">
                You already have an account?{" "}
                 <Link to="/" className="font-bold">
                 Login
                 </Link>
                </p>
               
        </div>

    </div>
    
    )
}

export default Signup;