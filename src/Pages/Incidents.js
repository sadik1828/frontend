import {Link} from "react-router-dom";
import {useState} from "react";
import { UserContext } from "../Components/userContext";
import axios from "axios";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";


function Incidents(){

        const [inputs, setInputs] = useState();
        const navigate = useNavigate();
        const { setUser } = useContext(UserContext);
        
        
        // FUNCTION PART OF OFFENSE
        
        async function Submit(){
            // e.preventDefault()
            try {
                const token = localStorage.getItem("token")
                const response = await axios.post("http://localhost:8000/incident/", inputs, {headers:{authentication:token}});
                toast.success(response.data.clientMessage);
                // localStorage.setItem("token", response.data.token);
                // setUser(true);
                navigate("/dashboard");
                console.log("token");
        
            } catch (e) {
                console.log(e.response);
                toast.error(e.response.data.clientMessage);
            }
        }



    return (
 <div className="w-screen h-full flex justify-center bg-neutral-100">   
<Sidebar />
<div className="w-full h-full flex-1 flex flex-col">
<Header />
<div className='w-full h-full flex-1 overflow-y-scroll'></div>
<div className="bg-blue-200 h-fit text-center py-5 drop-shadow-xl rounded-lg max-w-7xl mx-auto mt-8 px-10 w-full h-screen" >
<h1 className="flex justify-center font-bold text-lg">INCIDENT DASHBOARD</h1>

<div className="flex flex-col w-3/4 m-auto space-y-2 my-1 text-black">
<input
    type="number"
    placeholder="incident no."
    className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
    onChange={(e) => setInputs({ ...inputs, IncidentNo: e.target.value })}
            
 />

<input
    type="datetime-local"
    placeholder="mean time"
    className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
    onChange={(e) => setInputs({ ...inputs, MeanTime: e.target.value })}
            
 />

<input
    type="datetime-local"
    placeholder="detection time"
    className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
    onChange={(e) => setInputs({ ...inputs, DetectionTime: e.target.value })}
            
 />

<input
    type="datetime-local"
    placeholder="response time"
    className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
    onChange={(e) => setInputs({ ...inputs, ResponseTime: e.target.value })}
            
 />

<select className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
onChange={(e) => setInputs({ ...inputs, TypeOfAttack: e.target.value })}
>
          <option>--attack-type--</option>
          <option>Phishing</option>
          <option>Exploits</option>
          <option>Sql Injection</option>
          <option>Buffer Attack</option>
          <option>Proxy nologon</option>
          <option>LOCAL</option>
          <option>BruteForce</option>
          <option>DDOS</option>
          <option>OS Comman Injection</option>
          <option>XSS</option>
          <option>Log4j</option>
          <option>MITM</option>
          <option>Malware</option>
          <option>Web Attacks</option>
          <option>NONE</option>
        </select>

<input
    type="source"
    placeholder="source"
    className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
    onChange={(e) => setInputs({ ...inputs, Source: e.target.value })}
            
 />

<input
    type="destination"
    placeholder="destination"
    className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
    onChange={(e) => setInputs({ ...inputs, Destination: e.target.value })}
            
 />

<select className="px-3 py-2 rounded-sm bg-slate-100   text-sm"
onChange={(e) => setInputs({ ...inputs, Investigator: e.target.value })}
>

<option>--Investigator--</option>
<option>Sidiiq</option>
<option>Subeer</option>
<option>Cabdifataax</option>

</select>


<input
    type="reason"
    placeholder="reason"
    className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
    onChange={(e) => setInputs({ ...inputs, Reason: e.target.value })}
            
 />
 
 <input
    type="action"
    placeholder="action"
    className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
    onChange={(e) => setInputs({ ...inputs, Action: e.target.value })}
            
 />

<input
    type="reportedby"
    placeholder="reported by"
    className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
    onChange={(e) => setInputs({ ...inputs, ReportedBy: e.target.value })}
            
 />

<select className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
onChange={(e) => setInputs({ ...inputs, Status: e.target.value })}
>
          <option>--incident-status--</option>
          <option>Open</option>
          <option>Closed</option>
          <option>Investigation</option>
 </select>

<select className="px-3 py-2 rounded-sm bg-slate-100 text-sm"
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

        <button className="btn-dark" onClick={Submit} >Submit</button>
</div>
</div>
</div>

</div>    

    )
}

export default Incidents;