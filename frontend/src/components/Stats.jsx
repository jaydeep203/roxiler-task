import { useEffect, useState } from "react"


const Stats = ({month, months, statsData}) => {
    const [monthName, setMonthName] = useState("");

    useEffect(() => {
        for(let i=0; i<months.length; i++){
            if(months[i].value==month){
                setMonthName(months[i].name);
            }
        }
    },[month]);

  return (

    <div className="max-w-[40%] mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 
    dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Statistics - {monthName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Total Sale - {statsData.sale}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Total sold item - {statsData.sold}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Total unsold item - {statsData.unsold}
        </p>
        
    </div>

  )
}

export default Stats