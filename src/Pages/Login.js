
import {Link} from "react-router-dom";
import {useState} from "react";
import { UserContext } from "../Components/userContext";
import axios from "axios";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";


function Login() {

const [inputs, setInputs] = useState();
const navigate = useNavigate();
const { setUser } = useContext(UserContext);

// FUNCTION PART

async function Submit(e){
    e.preventDefault()
    try {
        const response = await axios.post("http://localhost:8000/user/login", inputs);
        toast.success(response.data.clientMessage);
        localStorage.setItem("token", response.data.token);
        setUser(true);
        navigate("/dashboard");
        console.log("token");

    } catch (e) {
        toast.error(e.response.data.clientMessage);
    }
}

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden rounded-2xl ">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="font-bold text-3xl font-semibold text-center text-black-700 uppercase mt-4">
                    OFFENSES DOCUMENTATION
                    </h1>
                <h1 className="text-2xl font-semibold text-center text-purple-700  mt-10">
                login to your account
                </h1>
                <form className="mt-6">
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
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 font-bold"
                        onClick={(e)=>Submit(e)}>
                            Login
                        </button>
                    </div>

                </form>
                

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                    <Link to="/Signup">
                    Sign up
                    </Link>
                        
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
