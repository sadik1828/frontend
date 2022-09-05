import {Link} from "react-router-dom";
import {useState} from "react";
import { UserContext } from "../Components/userContext";
import axios from "axios";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

function Offenses(){

const [inputs, setInputs] = useState();
const navigate = useNavigate();
const { setUser } = useContext(UserContext);


// FUNCTION PART OF OFFENSE

async function Submit(){
    // e.preventDefault()
    try {
        const token = localStorage.getItem("token")
        const response = await axios.post("http://localhost:8000/offense/", inputs, {headers:{authentication:token}});
        toast.success(response.data.clientMessage);
        localStorage.setItem("token", response.data.token);
        // setUser(true);
        navigate("/dashboard");
        console.log("token");

    } catch (e) {
        console.log(e.response);
        toast.error(e.response.data.clientMessage);
    }
}

    return (
 <div className="w-full h-screen flex bg-neutral-100">   
<Sidebar />
<div className='flex-1 flex flex-col'>
      <Header />
<div className="bg-blue-200 h-fit text-center py-5 drop-shadow-xl rounded-lg max-w-7xl mx-auto mt-8 px-24 w-full h-screen" >
<h1 className="w-full flex justify-center font-bold text-2xl">OFFENSES DASHBOARD</h1>

<div className="w-full flex flex-col w-3/4 m-auto space-y-2 my-1 mt-6 text-black ">
<input
    type="number"
    placeholder="offense no."
    className="px-3 py-2 rounded-sm bg-slate-100  text-sm"
    onChange={(e) => setInputs({ ...inputs, OffenseNo: e.target.value })}
    
            
 />

<input
    type="date"
    placeholder="date of offense"
    className="px-3 py-2 rounded-sm bg-slate-100  text-sm"
    onChange={(e) => setInputs({ ...inputs, OffenseDate: e.target.value })}
            
 />

<input
    type="source"
    placeholder="source"
    className="px-3 py-2 rounded-sm bg-slate-100  text-sm"
    onChange={(e) => setInputs({ ...inputs, Source: e.target.value })}
            
 />

<input
    type="destination"
    placeholder="destination"
    className="px-3 py-2 rounded-sm bg-slate-100  text-sm"
    onChange={(e) => setInputs({ ...inputs, Destination: e.target.value })}
            
 />

<select className="px-3 py-2 rounded-sm bg-slate-100  text-sm"
onChange={(e) => setInputs({ ...inputs, UserAccount: e.target.value })}
>

          <option>--user account--</option>
          <option>Sidiiq</option>
          <option>Subeer</option>
          <option>Cabdifataax</option>
        
        </select>

<select className="px-3 py-2 rounded-sm bg-slate-100  text-sm"
onChange={(e) => setInputs({ ...inputs, Shift: e.target.value })}

>

<option>--shift--</option>
<option>Shift A</option>
<option>Shift B</option>
<option>Normal Shift</option>

</select>        

<input
    type="reason"
    placeholder="reason"
    className="px-3 py-2 rounded-sm bg-slate-100  text-sm"
    onChange={(e) => setInputs({ ...inputs, Reason: e.target.value })}
            
 />
 
 <input
    type="action"
    placeholder="action"
    className="px-3 py-2 rounded-sm bg-slate-100  text-sm"
    onChange={(e) => setInputs({ ...inputs, Action: e.target.value })}
            
 />

<select className="px-3 py-2 rounded-sm bg-slate-100  text-sm"
onChange={(e) => setInputs({ ...inputs, Status: e.target.value })}
>
          <option>--cases-status--</option>
          <option>Open Case</option>
          <option>Closed Case</option>
          <option>Investigation Case</option>
 </select>

<select className="px-3 py-2 rounded-sm bg-slate-100  text-sm"
onChange={(e) => setInputs({ ...inputs, Department: e.target.value })}
>
          <option>--department--</option>
          <option>NIS</option>
          <option>VIVACOM</option>
          <option>CLOUD</option>
          <option>SOLTELCO</option>
          <option>DMZ</option>
          <option>LOCAL</option>
          <option>IT</option>
          <option>NOC</option>
          <option>NONE</option>
        </select>

        <button className="btn-dark "
        onClick={Submit}
        >Submit</button>
</div>
</div>
</div>

</div>    

    )
}

export default Offenses;