import React from "react"



import axios from "axios"

const OffensesReport = () => {

    const [offenses, setOffenses] = React.useState([])

    const deleteOffense = offsenseID => {
      try {
          const token = localStorage.getItem("token")
          axios.delete("http://localhost:8000/offense/" + offsenseID, {headers:{authentication:token}})
          .then((response) => {
              // console.log(response.data.offenses)
              alert('Deleted successfully \n' + offsenseID)
              window.location.reload()
          })
          
  
      } catch (e) {
          console.log(e.response);
      }
  }

    React.useEffect(() => {
        try {
            const token = localStorage.getItem("token")
            axios.get("http://localhost:8000/offense", {headers:{authentication:token}})
            .then((response) => {
                // console.log(response.data.offenses)
                setOffenses(response.data.offenses)
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
            <tr className="bg-red-100">
              <th scope="col" x="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-red-100">
                NO
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-red-100">
                Source
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-red-100">
                Destination
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-red-100">
                Reason
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-red-100">
                Status
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-red-100">
                User
              </th>
              <th className="bg-red-100 text-bold">
                EDit
              </th>

              <th className="bg-red-100 text-bold">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-green-50">
            {offenses.map(item => {
                return (
                    <tr key={item._id}>
                        <td>{item.OffenseNo}</td>
                        <td>{item.Source}</td>
                        <td>{item.Destination}</td>
                        <td>{item.Reason}</td>
                        <td>{item.Status}</td>
                        <td>{item.UserAccount}</td>
                        <td><button onClick={() => window.location.href='/editOffense?id=' + item._id}  className='bg-orange-500 text-black' >Edit</button></td>
                        <td><button onClick={() => deleteOffense(item._id)}  className='bg-red-500 text-black' >Delete</button></td>
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

export default OffensesReport