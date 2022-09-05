import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


import axios from "axios"
import Sidebar from "./Sidebar"
import Header from "./Header"

export default function EditOffenses() {
    const [inputs, setInputs] = React.useState([])
    
    const params = useParams();
    
    // const [id, setID] = React.useState("")

    React.useEffect(() => {
        try {
            const token = localStorage.getItem("token")
            axios.get("http://localhost:8000/offense", {headers:{authentication:token}})
            .then((response) => {
                // console.log(response.data.offenses)
                setInputs(response.data.offenses)
            });
            
    
        } catch (e) {
            console.log(e.response);
        }
    }, [])

    async function updateOffenses(id) {
      try {
         
          axios.put(`http://localhost:8000/offense/${id}`)
          .then((response) => {
              // console.log(response.data.offenses)
              alert('edit offense successfully')
              window.location.reload()
              console.log(response);
          })
        } catch (e) {

        }

    }
    return (
      

            <div className="flex">
                <Sidebar />
            <div className='flex flex-col flex-1'>
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

        <div>
                <button onClick={()=>updateOffenses()}>
                    Edit Offense
                </button>
            </div>
        

            </div>

            
</div>
            </div>

        </div>
    )

    }
