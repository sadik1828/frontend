import {Link} from "react-router-dom";
// import Login from "../Components/Login";

function Signup (){
    return (

    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <h2 className="flex font-bold items-center">SIGN UP</h2>
            <div className="flex flex-col items-start ">
                <input
                type="name"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="enter your name"
                />

                <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="enter your password"
                />

                 <input
                 type="password"
                 className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                 placeholder="enter your password"
                
                />
                 <input
                type="confirmPassword"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="enter confirm password"
                />


               <div className="mt-4">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Signup
                    </button>
                </div>

                <p>
                You already have an account?{" "}
                 <Link to="/" className="font-bold">
                 Login
                 </Link>
                </p>
               
                
            </div>
        </div>

    </div>
    
    )
}

export default Signup;