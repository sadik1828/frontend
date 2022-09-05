import React from "react"

import axios from "axios"

const IncidentReport = () => {

    const [incidents, setIncidents] = React.useState([])

// Delete Incident Part
    const deleteIncident = incidentID => {
      try {
          const token = localStorage.getItem("token")
          axios.delete("http://localhost:8000/incident/" + incidentID, {headers:{authentication:token}})
          .then((response) => {
              // console.log(response.data.offenses)
              alert('Deleted successfully \n' + incidentID)
              window.location.reload()
          })
          
  
      } catch (e) {
          console.log(e.response);
      }
  }

    // Delete Incident Part

    React.useEffect(() => {
        try {
            const token = localStorage.getItem("token")
            axios.get("http://localhost:8000/incident", {headers:{authentication:token}})
            .then((response) => {
                // console.log(response.data.offenses)
                setIncidents(response.data.incidents)
            })
            
    
        } catch (e) {
            console.log(e.response);
        }
    }, [])

    return (
        
        
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 px-12 pt-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th scope="col" x="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                NO
              </th>

              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Mean Time
              </th>

              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Detection Time
              </th>

              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Response Time
              </th>

              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Source
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Destination
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Reason
              </th>
              
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Status
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Type Attack
              </th>

              {/* modifications part */}
              <th className="text-bold">
                Edit
              </th>

              <th className="text-bold">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {incidents.map(item => {
                return (
                    <tr key={item._id}>
                        <td>{item.IncidentNo}</td>
                        <td>{item.MeanTime}</td>
                        <td>{item.DetectionTime}</td>
                        <td>{item.ResponseTime}</td>
                        <td>{item.Source}</td>
                        <td>{item.Destination}</td>
                        <td>{item.Reason}</td>
                        <td>{item.Status}</td>
                        <td>{item.TypeOfAttack}</td>
                        <td><button onClick={() => window.location.href='/editIncident?id=' + item._id}  className='bg-orange-500 text-black' >Edit</button></td>
                        <td><button onClick={() => deleteIncident(item._id)}  className='bg-red-500 text-black' >Delete</button></td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>



    )
}

export default IncidentReport