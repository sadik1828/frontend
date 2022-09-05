import React from "react"
import Header from "../Components/Header"
import IncidentReport from "../Components/Reports/IncidentReport"
import OffensesReport from "../Components/Reports/OffensesReport"
import Sidebar from "../Components/Sidebar"

const Reports = () => {

   
    const [selected, setSelected] = React.useState('Offenses')
    return (
        <div className='flex'>
    <Sidebar />
    <div className="flex-1 flex flex-col">
        <Header />
        <div className='flex justify-end px-12 pt-8 space-x-4 items-center'>
             <h1 className='flex-1 text-2xl font-semibold'>{selected}</h1>
            <button 
            onClick={() => setSelected('Offenses')}
            className={`px-4 py-1.5 rounded-md border ${selected === 'Offenses' ?  'bg-red-500 text-grey-dark border-transparent': 'bg-white text-black border-gray-300'} text-grey-dark`}>Offenses</button>
            <button
            onClick={() => setSelected('Incidents')} 
            className={`px-4 py-1.5 rounded-md border ${selected === 'Incidents' ?  'bg-red-500 text-grey-dark border-transparent': 'bg-white text-black border-gray-300'} text-grey-dark`}>Incidents</button>
        </div>
         {selected === 'Incidents' ? <IncidentReport /> : <OffensesReport />}
        </div>
        </div>
    )
}

export default Reports