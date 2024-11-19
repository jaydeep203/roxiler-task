

const DropDown = ({months, setMonth}) => {

    const handleChange = (e) => {
        setMonth(e.target.value);
    }

  return (
   <> 
        
    <div className="">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select a month
        </label>
        <select
            onChange={handleChange}
        id="countries" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a month</option>
            {
                months.map((item, i) => (
                    <option key={i}value={item.value}>{item.name}</option>
                ))
            }
        </select>
    </div>

    </>
  )
}

export default DropDown